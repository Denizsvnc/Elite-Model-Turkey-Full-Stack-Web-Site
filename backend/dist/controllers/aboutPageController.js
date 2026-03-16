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
exports.upsertAboutPage = exports.getAboutPage = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
// ==========================================
// 1. Hakkımızda Sayfası Verisini Getir
// ==========================================
const getAboutPage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // findFirst kullanıyoruz çünkü sadece 1 kayıt olmalı
        const aboutPage = yield prisma_1.default.aboutPage.findFirst();
        if (!aboutPage) {
            // Eğer henüz sayfa oluşturulmadıysa null dönebiliriz 
            // veya frontend patlamasın diye boş bir obje dönebiliriz.
            return res.status(200).json(null);
        }
        res.json(aboutPage);
    }
    catch (error) {
        res.status(500).json({ error: 'Veri çekilemedi.' });
    }
});
exports.getAboutPage = getAboutPage;
// ==========================================
// 2. Hakkımızda Sayfasını Kaydet (Varsa Güncelle, Yoksa Oluştur)
// ==========================================
const upsertAboutPage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body; // Formdan gelen tüm veriler (başlıklar, metinler, resimler)
    try {
        // Önce veritabanında kayıt var mı bakalım
        const existingPage = yield prisma_1.default.aboutPage.findFirst();
        let result;
        if (existingPage) {
            try {
                if (data.vision_imageUrl && existingPage.vision_imageUrl && data.vision_imageUrl !== existingPage.vision_imageUrl) {
                    if (existingPage.vision_imageUrl.startsWith('/uploads/')) {
                        const oldVisionPath = path.join(process.cwd(), 'src', existingPage.vision_imageUrl);
                        if (fs.existsSync(oldVisionPath))
                            fs.unlinkSync(oldVisionPath);
                    }
                }
                if (data.mission_imageUrl && existingPage.mission_imageUrl && data.mission_imageUrl !== existingPage.mission_imageUrl) {
                    if (existingPage.mission_imageUrl.startsWith('/uploads/')) {
                        const oldMissionPath = path.join(process.cwd(), 'src', existingPage.mission_imageUrl);
                        if (fs.existsSync(oldMissionPath))
                            fs.unlinkSync(oldMissionPath);
                    }
                }
            }
            catch (e) {
                console.error('Eski görsel silme hatası (About):', e);
            }
            result = yield prisma_1.default.aboutPage.update({
                where: { id: existingPage.id },
                data: Object.assign(Object.assign({}, data), { updatedAt: new Date() }),
            });
        }
        else {
            // --- YOKSA OLUŞTUR ---
            // Şema zorunlu alanları için boş değerlerle başlangıç oluştur
            const defaults = {
                intro_title_tr: '',
                intro_title_en: '',
                intro_title_de: '',
                intro_title_ru: '',
                intro_text_tr: '',
                intro_text_en: '',
                intro_text_de: '',
                intro_text_ru: '',
                vision_imageUrl: '',
                vision_title_tr: '',
                vision_title_en: '',
                vision_title_de: '',
                vision_title_ru: '',
                vision_slogan_tr: '',
                vision_slogan_en: '',
                vision_slogan_de: '',
                vision_slogan_ru: '',
                vision_text_tr: '',
                vision_text_en: '',
                vision_text_de: '',
                vision_text_ru: '',
                mission_imageUrl: '',
                mission_title_tr: '',
                mission_title_en: '',
                mission_title_de: '',
                mission_title_ru: '',
                mission_slogan_tr: '',
                mission_slogan_en: '',
                mission_slogan_de: '',
                mission_slogan_ru: '',
                mission_text_tr: '',
                mission_text_en: '',
                mission_text_de: '',
                mission_text_ru: '',
                isActive: true,
            };
            result = yield prisma_1.default.aboutPage.create({
                data: Object.assign(Object.assign({}, defaults), data),
            });
        }
        res.json(result);
    }
    catch (error) {
        console.error("Hakkımızda sayfası kayıt hatası:", error);
        res.status(500).json({ error: 'İşlem başarısız. Lütfen tüm zorunlu alanları kontrol edin.' });
    }
});
exports.upsertAboutPage = upsertAboutPage;
//# sourceMappingURL=aboutPageController.js.map