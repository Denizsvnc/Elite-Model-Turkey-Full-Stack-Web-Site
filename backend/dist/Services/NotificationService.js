"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const MailService_1 = require("./MailService");
const TelegramService_1 = require("./TelegramService");
const WhatsappService_1 = require("./WhatsappService");
class NotificationService {
    /**
     * Merkezi Bildirim Gönderici
     * @param eventSlug 'contact_form' | 'application_form'
     * @param data Formdan gelen veriler
     */
    static send(eventSlug, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // 1. Kuralı Veritabanından Çek
                const rule = yield prisma_1.default.notificationRule.findUnique({
                    where: { slug: eventSlug }
                });
                // Kural yoksa veya pasifse hiçbir şey yapma
                if (!rule || !rule.isActive) {
                    console.warn(`⚠️ Bildirim kuralı bulunamadı veya pasif: ${eventSlug}`);
                    return;
                }
                console.log(`📢 Bildirim Tetiklendi: ${rule.name}`);
                // --- KOMBİNASYON MANTIĞI ---
                // 1. E-MAIL Kanalı
                if (rule.emailEnabled) {
                    // Hangi olay olduğuna göre doğru Mail fonksiyonunu çağır
                    if (eventSlug === 'contact_form') {
                        yield MailService_1.MailService.sendContactNotification({
                            fullName: data.fullName,
                            email: data.email,
                            subject: data.subject || 'Konu Yok',
                            message: data.message || ''
                        });
                    }
                    else if (eventSlug === 'application_form') {
                        yield MailService_1.MailService.sendApplicationNotification({
                            fullName: data.fullName,
                            email: data.email,
                            phone: data.phone,
                            city: data.city,
                            gender: data.gender,
                            heightCm: data.heightCm,
                            selfieUrl: data.selfieUrl
                            // Diğer foto alanları eklenebilir...
                        });
                    }
                }
                // 2. TELEGRAM Kanalı
                if (rule.telegramEnabled) {
                    let text = '';
                    if (eventSlug === 'contact_form') {
                        text = `📩 <b>Yeni İletişim Mesajı</b>\n\n👤 <b>Kimden:</b> ${data.fullName}\n📧 <b>Email:</b> ${data.email}\n📝 <b>Konu:</b> ${data.subject}\n\n"${data.message}"`;
                        yield TelegramService_1.TelegramService.sendMessage(text);
                    }
                    else if (eventSlug === 'application_form') {
                        text = `📋 <b>Yeni Başvuru!</b>\n\n👤 ${data.fullName}\n📍 ${data.city}\n📏 ${data.heightCm}cm`;
                        // Eğer selfie varsa resimli at, yoksa yazılı at
                        if (data.selfieUrl) {
                            yield TelegramService_1.TelegramService.sendPhoto({
                                mediaUrl: data.selfieUrl,
                                caption: text
                            });
                        }
                        else {
                            yield TelegramService_1.TelegramService.sendMessage(text);
                        }
                    }
                }
                // 3. WHATSAPP Kanali
                if (rule.whatsappEnabled) {
                    let wpMessage = '';
                    if (eventSlug === 'contact_form') {
                        wpMessage = `🔔 *Yeni İletişim Mesajı*\n\n👤 *Kimden:* ${data.fullName}\n💬 *Mesaj:* ${data.message}`;
                    }
                    else if (eventSlug === 'application_form') {
                        wpMessage = `🚀 *Yeni Başvuru*\n\n👤 ${data.fullName}\n📱 ${data.phone}`;
                    }
                    // WhatsApp servisine gönder
                    yield WhatsappService_1.WhatsappService.sendMessage(wpMessage);
                }
            }
            catch (error) {
                console.error("❌ NotificationService Hatası:", error);
                // Hata olsa bile kullanıcıya "Başarısız" dememek için throw etmeyebiliriz
                // veya loglayıp geçeriz.
            }
        });
    }
}
exports.NotificationService = NotificationService;
//# sourceMappingURL=NotificationService.js.map