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
exports.deleteSuccessHero = exports.updateSuccessHero = exports.createSuccessHero = exports.getSuccessHeroById = exports.getSuccessHeroes = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
// ==========================================
// 1. Tüm Başarı Hero Alanlarını Getir
// ==========================================
const getSuccessHeroes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const heroes = yield prisma_1.default.successHero.findMany({
            orderBy: {
                createdAt: 'desc', // En son eklenen en üstte
            },
        });
        res.json(heroes);
    }
    catch (error) {
        res.status(500).json({ error: 'Veriler çekilemedi.' });
    }
});
exports.getSuccessHeroes = getSuccessHeroes;
// ==========================================
// 2. ID'ye Göre Tek Bir Kayıt Getir
// ==========================================
const getSuccessHeroById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const hero = yield prisma_1.default.successHero.findUnique({
            where: { id: id },
        });
        if (!hero) {
            return res.status(404).json({ error: 'Kayıt bulunamadı.' });
        }
        res.json(hero);
    }
    catch (error) {
        res.status(500).json({ error: 'Veri getirilemedi.' });
    }
});
exports.getSuccessHeroById = getSuccessHeroById;
// ==========================================
// 3. Yeni Başarı Hero Alanı Oluştur (4 Dil Destekli)
// ==========================================
const createSuccessHero = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { imageUrl, isActive, 
    // Başlıklar
    title_tr, title_en, title_de, title_ru, 
    // Metinler
    text_tr, text_en, text_de, text_ru } = req.body;
    try {
        const newHero = yield prisma_1.default.successHero.create({
            data: {
                imageUrl,
                isActive: isActive !== undefined ? isActive : true,
                // Zorunlu alanlar (Şemada soru işareti yoksa zorunludur)
                title_tr,
                title_en,
                title_de,
                title_ru,
                text_tr,
                text_en,
                text_de,
                text_ru,
            },
        });
        res.status(201).json(newHero);
    }
    catch (error) {
        console.error("Oluşturma hatası:", error);
        res.status(500).json({ error: 'Kayıt oluşturulamadı. Eksik alanları kontrol edin.' });
    }
});
exports.createSuccessHero = createSuccessHero;
// ==========================================
// 4. Kaydı Güncelle
// ==========================================
const updateSuccessHero = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body; // Tüm gelen veriyi al
    try {
        // Eğer imageUrl güncelleniyorsa, eski dosyayı sil
        if (data.imageUrl) {
            const existing = yield prisma_1.default.successHero.findUnique({ where: { id: id } });
            if (existing && existing.imageUrl && existing.imageUrl.startsWith('/uploads/')) {
                const oldFilePath = path.join(process.cwd(), existing.imageUrl);
                if (fs.existsSync(oldFilePath)) {
                    fs.unlinkSync(oldFilePath);
                }
            }
        }
        const updatedHero = yield prisma_1.default.successHero.update({
            where: { id: id },
            data: data, // Prisma alanları otomatik eşleştirir
        });
        res.json(updatedHero);
    }
    catch (error) {
        res.status(500).json({ error: 'Güncelleme başarısız.' });
    }
});
exports.updateSuccessHero = updateSuccessHero;
// ==========================================
// 5. Kaydı Sil
// ==========================================
const deleteSuccessHero = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma_1.default.successHero.delete({
            where: { id: id },
        });
        res.json({ message: 'Kayıt başarıyla silindi.' });
    }
    catch (error) {
        res.status(500).json({ error: 'Silme işlemi başarısız.' });
    }
});
exports.deleteSuccessHero = deleteSuccessHero;
//# sourceMappingURL=successHeroController.js.map