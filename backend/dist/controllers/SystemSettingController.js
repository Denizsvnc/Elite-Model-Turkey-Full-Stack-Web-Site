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
exports.createSetting = exports.updateSetting = exports.getAllSettings = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
// ==========================================
// 1. Tüm Ayarları Listele (Gruplanmış veya Düz)
// ==========================================
const getAllSettings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const settings = yield prisma_1.default.systemSetting.findMany({
            orderBy: {
                group: 'asc', // Gruplara göre sıralı gelsin (email, telegram...)
            }
        });
        // İstersen frontend'de gruplamak yerine burada da gruplayabilirsin.
        // Şimdilik düz liste dönüyoruz, frontend'de filter ile ayırabilirsin.
        res.json(settings);
    }
    catch (error) {
        console.error("Ayarlar çekilemedi:", error);
        res.status(500).json({ error: 'Ayarlar yüklenirken hata oluştu.' });
    }
});
exports.getAllSettings = getAllSettings;
// ==========================================
// 2. Ayar Güncelle (Key ile)
// ==========================================
const updateSetting = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { key } = req.params; // URL'den gelir: /api/admin/settings/telegram_token
    const { value, isActive } = req.body;
    try {
        const updatedSetting = yield prisma_1.default.systemSetting.update({
            where: { key: key },
            data: {
                value: value, // Yeni değer
                isActive: isActive // Aktif/Pasif durumu
            }
        });
        res.json({ success: true, data: updatedSetting });
    }
    catch (error) {
        console.error("Ayar güncellenemedi:", error);
        res.status(500).json({ error: 'Güncelleme başarısız.' });
    }
});
exports.updateSetting = updateSetting;
// ==========================================
// 3. Yeni Ayar Ekle (Gerekirse)
// ==========================================
const createSetting = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const setting = yield prisma_1.default.systemSetting.create({
            data: req.body
        });
        res.status(201).json(setting);
    }
    catch (error) {
        res.status(500).json({ error: 'Ayar oluşturulamadı.' });
    }
});
exports.createSetting = createSetting;
//# sourceMappingURL=SystemSettingController.js.map