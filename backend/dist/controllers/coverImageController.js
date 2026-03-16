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
exports.deleteCoverImage = exports.upsertCoverImage = exports.getCoverImages = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const prisma_2 = require("../generated/prisma");
// 1. Tüm Bölüm Kapaklarını Getir
const getCoverImages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const covers = yield prisma_1.default.coverImage.findMany({
            orderBy: { order: 'asc' } // Sıralama isteğe bağlı
        });
        res.json(covers);
    }
    catch (error) {
        res.status(500).json({ error: 'Kapak görselleri çekilemedi.' });
    }
});
exports.getCoverImages = getCoverImages;
// 2. Kapak Görselini Kaydet (Varsa Güncelle, Yoksa Oluştur)
const upsertCoverImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Frontend'den gelen veriler
    const { type, imageUrl, isActive, order } = req.body;
    // 1. Gelen "type" geçerli mi kontrol et
    if (!Object.values(prisma_2.CoverType).includes(type)) {
        return res.status(400).json({
            error: 'Geçersiz kapak türü. (WOMEN, MEN, NEW_FACES olmalı)'
        });
    }
    try {
        // UPSERT: Create ve Update'in birleşimi
        const cover = yield prisma_1.default.coverImage.upsert({
            where: { type: type }, // Bu tipe bak (Örn: WOMEN)
            // Eğer varsa bunları güncelle:
            update: {
                imageUrl,
                isActive,
                order
            },
            // Eğer yoksa bunu oluştur:
            create: {
                type,
                imageUrl,
                isActive: isActive !== undefined ? isActive : true,
                order: order || 1
            }
        });
        res.json(cover);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'İşlem başarısız.' });
    }
});
exports.upsertCoverImage = upsertCoverImage;
// 3. Kapak Görselini Sil (Tipe Göre)
const deleteCoverImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { type } = req.params; // URL'den tipi al (Örn: /api/covers/WOMEN)
    // Enum kontrolü
    if (!Object.values(prisma_2.CoverType).includes(type)) {
        return res.status(400).json({ error: 'Geçersiz tür.' });
    }
    try {
        yield prisma_1.default.coverImage.delete({
            where: { type: type }
        });
        res.json({ message: `${type} kapağı silindi.` });
    }
    catch (error) {
        res.status(404).json({ error: 'Silinecek kayıt bulunamadı.' });
    }
});
exports.deleteCoverImage = deleteCoverImage;
//# sourceMappingURL=coverImageController.js.map