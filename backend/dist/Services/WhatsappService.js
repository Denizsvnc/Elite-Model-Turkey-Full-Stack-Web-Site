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
exports.WhatsappService = void 0;
// services/WhatsappService.ts
const prisma_1 = __importDefault(require("../lib/prisma"));
class WhatsappService {
    // 1. Ayarları Çeken Private Yardımcı Metod
    static getConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const settings = yield prisma_1.default.systemSetting.findMany({
                    where: { group: 'whatsapp' }
                });
                const config = settings.reduce((acc, curr) => {
                    if (curr.value)
                        acc[curr.key] = curr.value;
                    return acc;
                }, {});
                // Kontroller
                if (config.whatsapp_enable !== 'true') {
                    console.warn("🛑 Whatsapp servisi veritabanından kapalı.");
                    return null;
                }
                if (!config.whatsapp_api_url || !config.whatsapp_api_key) {
                    console.error("❌ Whatsapp API URL veya Key eksik.");
                    return null;
                }
                return config;
            }
            catch (error) {
                console.error("❌ Whatsapp ayarları çekilemedi:", error);
                return null;
            }
        });
    }
    // 2. Genel HTTP İsteği Atan Metod
    static sendRequest(endpoint, payload, config) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // API sağlayıcısına göre URL yapısı değişebilir.
                // Genellikle: https://api.provider.com/instance123/message?token=XYZ
                // Veya Header'da token isterler. Aşağıdaki Header tabanlı bir örnektir:
                const response = yield fetch(config.whatsapp_api_url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        // Bazı API'ler token'ı header'da ister:
                        'Authorization': `Bearer ${config.whatsapp_api_key}`,
                        // Bazı API'ler ise body içinde token ister, dokümantasyona bakmalısın.
                    },
                    body: JSON.stringify(Object.assign({}, payload))
                });
                const data = yield response.json();
                // Hata kontrolü (API'den API'ye değişir)
                if (data.error || (data.status && data.status !== 'success')) {
                    console.error("❌ Whatsapp API dönüş hatası:", data);
                }
                else {
                    console.log("✅ Whatsapp mesajı iletildi.");
                }
            }
            catch (error) {
                console.error("❌ Whatsapp istek hatası:", error);
            }
        });
    }
    // --- PUBLIC METODLAR ---
    // A. Sadece Yazı Gönder
    static sendMessage(message, targetPhone) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = yield this.getConfig();
            if (!config)
                return;
            // Hedef numara parametre olarak gelmediyse, veritabanındaki admin numarasını al
            const phone = targetPhone || config.whatsapp_phone;
            if (!phone) {
                console.error("❌ Hedef telefon numarası bulunamadı.");
                return;
            }
            // Payload yapısı kullandığın API'ye göre DEĞİŞEBİLİR
            const payload = {
                to: phone,
                type: 'text', // Bazı API'ler tip ister
                body: message // Veya 'text': message
            };
            yield this.sendRequest('sendMessage', payload, config);
        });
    }
    // B. Medya (Resim/Dosya) Gönder
    static sendMedia(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = yield this.getConfig();
            if (!config || !options.mediaUrl)
                return;
            const phone = options.phone || config.whatsapp_phone;
            if (!phone)
                return;
            // ornek payload yapisi kullanılan api servisine gore degisir
            const payload = {
                to: phone,
                type: 'image', // veya 'video'
                image: options.mediaUrl, // URL
                caption: options.caption || ""
            };
            yield this.sendRequest('sendMedia', payload, config);
        });
    }
}
exports.WhatsappService = WhatsappService;
//# sourceMappingURL=WhatsappService.js.map