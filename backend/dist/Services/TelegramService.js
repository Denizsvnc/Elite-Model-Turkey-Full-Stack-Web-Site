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
exports.TelegramService = void 0;
// services/TelegramService.ts
const prisma_1 = __importDefault(require("../lib/prisma"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const form_data_1 = __importDefault(require("form-data"));
class TelegramService {
    // 1. YARDIMCI: Ayarları Çeken ve Kontrol Eden Fonksiyon (Private)
    // Bu sayede her fonksiyon içinde aynı kodları yazmaktan kurtuluyoruz.
    static getConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const settings = yield prisma_1.default.systemSetting.findMany({
                    where: { group: 'telegram' }
                });
                const config = settings.reduce((acc, curr) => {
                    if (curr.value)
                        acc[curr.key] = curr.value;
                    return acc;
                }, {});
                // Master Switch ve Eksik Veri Kontrolü
                if (config.telegram_enable !== 'true') {
                    console.warn("🛑 Telegram servisi veritabanından kapalı.");
                    return null;
                }
                if (!config.telegram_token || !config.telegram_chat_id) {
                    console.error("❌ Telegram token veya chat_id eksik.");
                    return null;
                }
                return config;
            }
            catch (error) {
                console.error("❌ Telegram ayarları çekilemedi:", error);
                return null;
            }
        });
    }
    // 2. YARDIMCI: Genel İstek Atma Fonksiyonu (Private)
    static sendRequest(endpoint_1, body_1, token_1) {
        return __awaiter(this, arguments, void 0, function* (endpoint, body, token, isFormData = false) {
            try {
                const url = `https://api.telegram.org/bot${token}/${endpoint}`;
                let response, data, responseText;
                if (isFormData) {
                    response = yield fetch(url, {
                        method: 'POST',
                        headers: body.getHeaders(),
                        body,
                    });
                    responseText = yield response.text();
                    try {
                        data = JSON.parse(responseText);
                    }
                    catch (_a) {
                        data = {};
                    }
                }
                else {
                    response = yield fetch(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(body)
                    });
                    responseText = yield response.text();
                    try {
                        data = JSON.parse(responseText);
                    }
                    catch (_b) {
                        data = {};
                    }
                }
                if (!data || !data.ok) {
                    console.error(`❌ Telegram API response text:`, responseText);
                    throw new Error(`Telegram API (${endpoint}) Hatası: ${(data && data.description) || 'Bilinmeyen hata'} | Raw response: ${responseText}`);
                }
                console.log(`✅ Telegram ${endpoint} başarılı.`);
            }
            catch (error) {
                console.error(`❌ Telegram gönderim hatası:`, error);
            }
        });
    }
    // --- PUBLIC METHODLAR ---
    // A. Sadece Yazı Gönder
    static sendMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = yield this.getConfig();
            if (!config)
                return;
            yield this.sendRequest('sendMessage', {
                chat_id: config.telegram_chat_id,
                text: message,
                parse_mode: 'HTML'
            }, config.telegram_token);
        });
    }
    // B. Fotoğraf Gönder (Resim URL + Açıklama)
    static sendPhoto(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = yield this.getConfig();
            if (!config || !options.mediaUrl)
                return;
            // Eğer local path ise dosyayı doğrudan gönder
            if (options.mediaUrl.startsWith('/uploads')) {
                const absPath = path_1.default.join(process.cwd(), 'src', options.mediaUrl);
                if (fs_1.default.existsSync(absPath)) {
                    const form = new form_data_1.default();
                    form.append('chat_id', config.telegram_chat_id);
                    form.append('photo', fs_1.default.createReadStream(absPath));
                    if (options.caption)
                        form.append('caption', options.caption);
                    form.append('parse_mode', 'HTML');
                    yield this.sendRequest('sendPhoto', form, config.telegram_token, true);
                    return;
                }
            }
            // Aksi halde (tam url ise) eski yöntemle gönder
            yield this.sendRequest('sendPhoto', {
                chat_id: config.telegram_chat_id,
                photo: options.mediaUrl,
                caption: options.caption || "",
                parse_mode: 'HTML'
            }, config.telegram_token);
        });
    }
    // C. Video Gönder
    static sendVideo(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = yield this.getConfig();
            if (!config || !options.mediaUrl)
                return;
            yield this.sendRequest('sendVideo', {
                chat_id: config.telegram_chat_id,
                video: options.mediaUrl,
                caption: options.caption || "",
                parse_mode: 'HTML'
            }, config.telegram_token);
        });
    }
}
exports.TelegramService = TelegramService;
//# sourceMappingURL=TelegramService.js.map