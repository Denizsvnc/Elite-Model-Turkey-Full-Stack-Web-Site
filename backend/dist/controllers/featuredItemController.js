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
exports.deleteFeaturedItem = exports.updateFeaturedItem = exports.createFeaturedItem = exports.getFeaturedItemById = exports.getFeaturedItems = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// ==========================================
// 1. Tüm Öne Çıkanları Getir (Sıralı)
// ==========================================
const getFeaturedItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield prisma_1.default.featuredItem.findMany({
            orderBy: {
                order: 'asc', // 1, 2, 3... diye sıralar
            },
        });
        res.json(items);
    }
    catch (error) {
        res.status(500).json({ error: 'Veriler çekilemedi.' });
    }
});
exports.getFeaturedItems = getFeaturedItems;
// ==========================================
// 2. ID'ye Göre Tek Bir Kayıt Getir
// ==========================================
const getFeaturedItemById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const item = yield prisma_1.default.featuredItem.findUnique({
            where: { id: id },
        });
        if (!item) {
            return res.status(404).json({ error: 'Kayıt bulunamadı.' });
        }
        res.json(item);
    }
    catch (error) {
        res.status(500).json({ error: 'Veri getirilemedi.' });
    }
});
exports.getFeaturedItemById = getFeaturedItemById;
// ==========================================
// 3. Yeni Öne Çıkan Ekle (4 DİL + ORDER ZORUNLU)
// ==========================================
const createFeaturedItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { imageUrl, order, // Şemada default yok, zorunlu!
    isActive, 
    // Başlıklar
    title_tr, title_en, title_de, title_ru, 
    // İçerikler
    content_tr, content_en, content_de, content_ru } = req.body;
    try {
        const newItem = yield prisma_1.default.featuredItem.create({
            data: {
                imageUrl,
                order: order ? Number(order) : 1, // Eğer gönderilmezse kod patlamasın diye 1 veriyoruz
                isActive: isActive !== undefined ? isActive : true,
                // Dil Alanları (Zorunlu)
                title_tr, title_en, title_de, title_ru,
                content_tr, content_en, content_de, content_ru
            },
        });
        res.status(201).json(newItem);
    }
    catch (error) {
        console.error("Ekleme hatası:", error);
        res.status(500).json({ error: 'Kayıt oluşturulamadı. Eksik alan olabilir.' });
    }
});
exports.createFeaturedItem = createFeaturedItem;
// ==========================================
// 4. Güncelleme İşlemi
// ==========================================
const updateFeaturedItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body; // Gelen veriyi al
    try {
        // Eğer imageUrl değişiyorsa, eski dosyayı sil
        if (data.imageUrl) {
            const existingItem = yield prisma_1.default.featuredItem.findUnique({ where: { id: id } });
            if ((existingItem === null || existingItem === void 0 ? void 0 : existingItem.imageUrl) && existingItem.imageUrl.startsWith('/uploads/')) {
                const oldFilePath = path_1.default.join(process.cwd(), 'src', existingItem.imageUrl);
                if (fs_1.default.existsSync(oldFilePath)) {
                    fs_1.default.unlinkSync(oldFilePath);
                }
            }
        }
        const updatedItem = yield prisma_1.default.featuredItem.update({
            where: { id: id },
            data: data,
        });
        res.json(updatedItem);
    }
    catch (error) {
        res.status(500).json({ error: 'Güncelleme başarısız.' });
    }
});
exports.updateFeaturedItem = updateFeaturedItem;
// ==========================================
// 5. Silme İşlemi
// ==========================================
const deleteFeaturedItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma_1.default.featuredItem.delete({
            where: { id: id },
        });
        res.json({ message: 'Kayıt silindi.' });
    }
    catch (error) {
        res.status(500).json({ error: 'Silme işlemi başarısız.' });
    }
});
exports.deleteFeaturedItem = deleteFeaturedItem;
//# sourceMappingURL=featuredItemController.js.map