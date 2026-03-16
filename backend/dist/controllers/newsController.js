"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.deleteNews = exports.updateNews = exports.createNews = exports.getNewsById = exports.getAllNews = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
// ==========================================
// 1. Tüm Haberleri Getir (Yeniden Eskiye)
// ==========================================
const getAllNews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newsList = yield prisma_1.default.news.findMany({
            orderBy: {
                publishedAt: 'desc', // En yeni haber en üstte
            },
        });
        res.json(newsList);
    }
    catch (error) {
        res.status(500).json({ error: 'Haberler çekilemedi.' });
    }
});
exports.getAllNews = getAllNews;
// ==========================================
// 2. ID ile Tek Haber Getir
// ==========================================
const getNewsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const newsItem = yield prisma_1.default.news.findUnique({
            where: { id: id },
        });
        if (!newsItem) {
            return res.status(404).json({ error: 'Haber bulunamadı.' });
        }
        res.json(newsItem);
    }
    catch (error) {
        res.status(500).json({ error: 'Haber getirilemedi.' });
    }
});
exports.getNewsById = getNewsById;
// ==========================================
// 3. Yeni Haber Ekle (4 Dil + Tarih)
// ==========================================
const createNews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { imageUrl, category, category_tr, category_en, category_de, category_ru, galleryUrls, publishedAt, // Frontend'den "2025-12-25" gibi string gelir
    isActive, 
    // Başlıklar
    title_tr, title_en, title_de, title_ru, 
    // Kısa Açıklamalar
    description_tr, description_en, description_de, description_ru, 
    // İçerikler
    content_tr, content_en, content_de, content_ru } = req.body;
    try {
        const newNews = yield prisma_1.default.news.create({
            data: {
                imageUrl,
                category: category || null,
                category_tr: category_tr || null,
                category_en: category_en || null,
                category_de: category_de || null,
                category_ru: category_ru || null,
                galleryUrls: Array.isArray(galleryUrls) ? galleryUrls : [],
                // String gelen tarihi Date objesine çeviriyoruz:
                publishedAt: new Date(publishedAt),
                isActive: isActive !== undefined ? isActive : true,
                // Zorunlu Dil Alanları
                title_tr, title_en, title_de, title_ru,
                description_tr: description_tr || null,
                description_en: description_en || null,
                description_de: description_de || null,
                description_ru: description_ru || null,
                content_tr, content_en, content_de, content_ru
            },
        });
        res.status(201).json(newNews);
    }
    catch (error) {
        console.error("Haber ekleme hatası:", error);
        res.status(500).json({ error: 'Haber oluşturulamadı. Eksik alanları kontrol et.' });
    }
});
exports.createNews = createNews;
// ==========================================
// 4. Haberi Güncelle
// ==========================================
const updateNews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body;
    // Eğer tarih güncelleniyorsa, onu Date formatına çevirmemiz gerekebilir
    // Ancak Prisma genelde ISO stringleri otomatik tanır. 
    // Garanti olsun istersen burada kontrol edebilirsin.
    try {
        // Eğer imageUrl güncelleniyorsa, eski dosyayı sil
        if (data.imageUrl) {
            const existing = yield prisma_1.default.news.findUnique({ where: { id: id } });
            if (existing && existing.imageUrl && existing.imageUrl.startsWith('/uploads/')) {
                const oldFilePath = path.join(process.cwd(), 'src', existing.imageUrl);
                if (fs.existsSync(oldFilePath)) {
                    fs.unlinkSync(oldFilePath);
                }
            }
        }
        // Normalize
        const normalized = Object.assign({}, data);
        if (typeof data.publishedAt === 'string') {
            normalized.publishedAt = new Date(data.publishedAt);
        }
        if (Array.isArray(data.galleryUrls)) {
            normalized.galleryUrls = data.galleryUrls;
        }
        else {
            delete normalized.galleryUrls; // undefined bırak
        }
        // Boş stringleri null'a çek (kategori çevirileri)
        ['category_tr', 'category_en', 'category_de', 'category_ru', 'category'].forEach((key) => {
            if (normalized[key] === '')
                normalized[key] = null;
        });
        const updatedNews = yield prisma_1.default.news.update({
            where: { id: id },
            data: normalized,
        });
        res.json(updatedNews);
    }
    catch (error) {
        res.status(500).json({ error: 'Güncelleme başarısız.' });
    }
});
exports.updateNews = updateNews;
// ==========================================
// 5. Haberi Sil
// ==========================================
const deleteNews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const existing = yield prisma_1.default.news.findUnique({ where: { id: id } });
        if (existing) {
            // Ana görseli sil
            if (existing.imageUrl && existing.imageUrl.startsWith('/uploads/')) {
                const oldFilePath = path.join(process.cwd(), 'src', existing.imageUrl);
                if (fs.existsSync(oldFilePath)) {
                    fs.unlinkSync(oldFilePath);
                }
            }
            // Galeri görsellerini sil
            if (Array.isArray(existing.galleryUrls)) {
                existing.galleryUrls.forEach((url) => {
                    if (url && typeof url === 'string' && url.startsWith('/uploads/')) {
                        const filePath = path.join(process.cwd(), 'src', url);
                        if (fs.existsSync(filePath)) {
                            fs.unlinkSync(filePath);
                        }
                    }
                });
            }
        }
        yield prisma_1.default.news.delete({ where: { id: id } });
        res.json({ message: 'Haber başarıyla silindi.' });
    }
    catch (error) {
        res.status(500).json({ error: 'Silme işlemi başarısız.' });
    }
});
exports.deleteNews = deleteNews;
//# sourceMappingURL=newsController.js.map