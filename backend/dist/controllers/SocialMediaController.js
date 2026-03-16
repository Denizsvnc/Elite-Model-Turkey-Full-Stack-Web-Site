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
exports.deleteSocial = exports.updateSocial = exports.createSocial = exports.getAllSocials = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
// ==========================================
// 1. Tüm Hesapları Getir (Public & Admin)
// ==========================================
// Frontend Footer'da kullanırken isActive: true olanları filtreleyebilirsin.
// Admin panelde ise hepsini gösterirsin.
const getAllSocials = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const socials = yield prisma_1.default.socialMedia.findMany({
            orderBy: {
                order: 'asc', // Sıralama: 1, 2, 3...
            }
        });
        res.json(socials);
    }
    catch (error) {
        console.error("Sosyal medya hatası:", error);
        res.status(500).json({ error: 'Sosyal medya hesapları yüklenemedi.' });
    }
});
exports.getAllSocials = getAllSocials;
// ==========================================
// 2. Yeni Hesap Ekle (Admin)
// ==========================================
const createSocial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { platform, name, url, iconKey, order } = req.body;
    try {
        // Platform adı benzersiz olmalı (Örn: ikinci bir 'instagram' eklenemez)
        const existing = yield prisma_1.default.socialMedia.findUnique({
            where: { platform }
        });
        if (existing) {
            return res.status(400).json({ error: 'Bu platform zaten ekli.' });
        }
        const newSocial = yield prisma_1.default.socialMedia.create({
            data: {
                platform, // 'instagram', 'whatsapp' vb.
                name, // 'Instagram', 'Whatsapp Hattımız'
                url, // Link
                iconKey, // 'Instagram', 'WhatsApp' (MUI Icon adı)
                order: Number(order) || 0,
                isActive: true
            }
        });
        res.status(201).json(newSocial);
    }
    catch (error) {
        console.error("Ekleme hatası:", error);
        res.status(500).json({ error: 'Sosyal medya hesabı eklenemedi.' });
    }
});
exports.createSocial = createSocial;
// ==========================================
// 3. Güncelle (Admin - Link, İkon, Sıra, Aktiflik)
// ==========================================
const updateSocial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { url, isActive, order, name, iconKey } = req.body;
    try {
        const updatedSocial = yield prisma_1.default.socialMedia.update({
            where: { id: Number(id) },
            data: {
                url,
                name,
                iconKey,
                isActive: typeof isActive === 'boolean' ? isActive : undefined,
                order: order !== undefined ? Number(order) : undefined
            }
        });
        res.json({ success: true, data: updatedSocial });
    }
    catch (error) {
        console.error("Güncelleme hatası:", error);
        res.status(500).json({ error: 'Güncelleme başarısız.' });
    }
});
exports.updateSocial = updateSocial;
// ==========================================
// 4. Sil (Admin)
// ==========================================
const deleteSocial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma_1.default.socialMedia.delete({
            where: { id: Number(id) }
        });
        res.json({ success: true, message: 'Hesap silindi.' });
    }
    catch (error) {
        console.error("Silme hatası:", error);
        res.status(500).json({ error: 'Silme işlemi başarısız.' });
    }
});
exports.deleteSocial = deleteSocial;
//# sourceMappingURL=SocialMediaController.js.map