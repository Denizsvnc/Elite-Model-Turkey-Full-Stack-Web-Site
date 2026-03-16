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
exports.deleteSuccessModelReview = exports.updateSuccessModelReview = exports.createSuccessModelReview = exports.getSuccessModelReviewById = exports.getSuccessModelReviews = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
// ==========================================
// 1. Tüm Başarılı Model Yorumlarını Getir
// ==========================================
const getSuccessModelReviews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviews = yield prisma_1.default.successModelReview.findMany({
            where: { isActive: true },
            orderBy: { createdAt: 'desc' }
        });
        res.json(reviews);
    }
    catch (error) {
        console.error('Model yorumları getirme hatası:', error);
        res.status(500).json({ error: 'Model yorumları çekilemedi.' });
    }
});
exports.getSuccessModelReviews = getSuccessModelReviews;
// ==========================================
// 2. ID'ye Göre Tek Bir Yorum Getir
// ==========================================
const getSuccessModelReviewById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const review = yield prisma_1.default.successModelReview.findUnique({
            where: { id: id }
        });
        if (!review) {
            return res.status(404).json({ error: 'Model yorumu bulunamadı.' });
        }
        res.json(review);
    }
    catch (error) {
        res.status(500).json({ error: 'Model yorumu getirilemedi.' });
    }
});
exports.getSuccessModelReviewById = getSuccessModelReviewById;
// ==========================================
// 3. Yeni Model Yorumu Oluştur
// ==========================================
const createSuccessModelReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { imageUrl, title_tr, title_en, title_de, title_ru, text_tr, text_en, text_de, text_ru, isActive } = req.body;
    try {
        const newReview = yield prisma_1.default.successModelReview.create({
            data: {
                imageUrl,
                title_tr,
                title_en,
                title_de,
                title_ru,
                text_tr,
                text_en,
                text_de,
                text_ru,
                isActive: isActive !== undefined ? isActive : true
            }
        });
        res.status(201).json(newReview);
    }
    catch (error) {
        console.error('Model yorumu oluşturma hatası:', error);
        res.status(500).json({ error: 'Model yorumu oluşturulamadı.' });
    }
});
exports.createSuccessModelReview = createSuccessModelReview;
// ==========================================
// 4. Model Yorumu Güncelle
// ==========================================
const updateSuccessModelReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body;
    try {
        // Eğer imageUrl güncelleniyorsa, eski dosyayı sil
        if (data.imageUrl) {
            const existing = yield prisma_1.default.successModelReview.findUnique({ where: { id: id } });
            if (existing && existing.imageUrl && existing.imageUrl.startsWith('/uploads/')) {
                const oldFilePath = path.join(process.cwd(), existing.imageUrl);
                if (fs.existsSync(oldFilePath)) {
                    fs.unlinkSync(oldFilePath);
                }
            }
        }
        const updatedReview = yield prisma_1.default.successModelReview.update({
            where: { id: id },
            data
        });
        res.json(updatedReview);
    }
    catch (error) {
        console.error('Model yorumu güncelleme hatası:', error);
        res.status(500).json({ error: 'Model yorumu güncellenemedi.' });
    }
});
exports.updateSuccessModelReview = updateSuccessModelReview;
// ==========================================
// 5. Model Yorumu Sil
// ==========================================
const deleteSuccessModelReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma_1.default.successModelReview.delete({
            where: { id: id }
        });
        res.json({ message: 'Model yorumu başarıyla silindi.' });
    }
    catch (error) {
        console.error('Model yorumu silme hatası:', error);
        res.status(500).json({ error: 'Model yorumu silinemedi.' });
    }
});
exports.deleteSuccessModelReview = deleteSuccessModelReview;
//# sourceMappingURL=successModelReviewController.js.map