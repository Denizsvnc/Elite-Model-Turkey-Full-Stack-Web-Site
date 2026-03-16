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
exports.updateSliderItem = exports.deleteSliderItem = exports.addSliderItem = exports.updateHomeSlider = exports.createHomeSlider = exports.getHomeSliderById = exports.getHomeSliders = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// ==================================================================
// BÖLÜM 1: SLIDER GRUP YÖNETİMİ (Kapsayıcı Kutular)
// ==================================================================
/**
 * 1. Tüm Slider Gruplarını ve içindeki Görselleri getirir.
 */
const getHomeSliders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sliders = yield prisma_1.default.homeSlider.findMany({
            include: {
                items: {
                    orderBy: { order: 'asc' }, // Görselleri sıraya diz
                },
            },
            orderBy: { id: 'asc' },
        });
        res.json(sliders);
    }
    catch (error) {
        console.error("Slider getirme hatası:", error);
        res.status(500).json({ error: 'Slider verileri çekilemedi.' });
    }
});
exports.getHomeSliders = getHomeSliders;
/**
 * 2. ID'ye göre tek bir Slider Grubu getirir.
 */
const getHomeSliderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const slider = yield prisma_1.default.homeSlider.findUnique({
            where: { id: Number(id) },
            include: {
                items: {
                    orderBy: { order: 'asc' },
                },
            },
        });
        if (!slider) {
            return res.status(404).json({ error: 'Slider grubu bulunamadı.' });
        }
        res.json(slider);
    }
    catch (error) {
        res.status(500).json({ error: 'Slider getirilemedi.' });
    }
});
exports.getHomeSliderById = getHomeSliderById;
/**
 * 3. Yeni bir Slider Grubu oluşturur (Örn: "Ana Sayfa", "Kampanyalar").
 */
const createHomeSlider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { key, name } = req.body;
    try {
        const existing = yield prisma_1.default.homeSlider.findUnique({ where: { key } });
        if (existing) {
            return res.status(400).json({ error: 'Bu KEY değerine sahip bir slider zaten var.' });
        }
        const newSlider = yield prisma_1.default.homeSlider.create({
            data: {
                key,
                name,
                isActive: true,
            },
        });
        res.status(201).json(newSlider);
    }
    catch (error) {
        res.status(500).json({ error: 'Slider grubu oluşturulamadı.' });
    }
});
exports.createHomeSlider = createHomeSlider;
/**
 * 4. Slider Grubunu Güncelle (İsim, Durum, Key).
 */
const updateHomeSlider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, isActive, key } = req.body;
    try {
        const updatedSlider = yield prisma_1.default.homeSlider.update({
            where: { id: Number(id) },
            data: { name, isActive, key },
        });
        res.json(updatedSlider);
    }
    catch (error) {
        res.status(500).json({ error: 'Grup güncellenemedi.' });
    }
});
exports.updateHomeSlider = updateHomeSlider;
// ==================================================================
// BÖLÜM 2: SLAYT (GÖRSEL) YÖNETİMİ - Tek Tek Ekleme/Silme
// ==================================================================
/**
 * 5. Slider Grubunun içine YENİ BİR GÖRSEL ekler.
 * Video alanları çıkarılmıştır. Sadece Resim destekler.
 */
const addSliderItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { homeSliderId, sliderKey, sliderName, imageUrl, // Sadece resim URL'si alıyoruz
    order, linkUrl, isActive, 
    // Çoklu Dil Başlıklar
    title_tr, title_en, title_de, title_ru, 
    // Çoklu Dil Açıklamalar
    description_tr, description_en, description_de, description_ru } = req.body;
    let targetSliderId = null;
    try {
        if (homeSliderId) {
            targetSliderId = Number(homeSliderId);
        }
        else if (sliderKey) {
            const key = String(sliderKey);
            let slider = yield prisma_1.default.homeSlider.findUnique({ where: { key } });
            if (!slider) {
                // Otomatik oluştur: tek bir hero slider kullanımı için kolaylık
                slider = yield prisma_1.default.homeSlider.create({
                    data: {
                        key,
                        name: (typeof sliderName === 'string' && sliderName.trim().length > 0) ? sliderName : key,
                        isActive: true,
                    }
                });
            }
            targetSliderId = slider.id;
        }
        else {
            return res.status(400).json({ error: 'homeSliderId veya sliderKey gönderilmelidir.' });
        }
        const newItem = yield prisma_1.default.homeSliderItem.create({
            data: {
                homeSliderId: targetSliderId,
                imageUrl: imageUrl, // Resim URL'si
                order: order || 1,
                linkUrl: linkUrl || null,
                isActive: isActive !== undefined ? isActive : true,
                // Diller
                title_tr, title_en, title_de, title_ru,
                description_tr, description_en, description_de, description_ru
            },
        });
        res.status(201).json(newItem);
    }
    catch (error) {
        console.error("Görsel ekleme hatası:", error);
        res.status(500).json({ error: 'Görsel eklenemedi.' });
    }
});
exports.addSliderItem = addSliderItem;
/**
 * 6. Tek Bir Görseli siler.
 */
const deleteSliderItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        // First fetch to get imageUrl for file removal
        const existing = yield prisma_1.default.homeSliderItem.findUnique({ where: { id: Number(id) } });
        if (!existing) {
            return res.status(404).json({ error: 'Öğe bulunamadı.' });
        }
        yield prisma_1.default.homeSliderItem.delete({ where: { id: Number(id) } });
        // Remove local file if stored under /uploads
        const url = existing.imageUrl || '';
        if (url.startsWith('/uploads/')) {
            const rel = url.replace(/^\/uploads\//, '');
            const filePath = path_1.default.resolve(process.cwd(), 'src/uploads', rel);
            try {
                if (fs_1.default.existsSync(filePath)) {
                    fs_1.default.unlinkSync(filePath);
                }
            }
            catch (e) {
                console.warn('Dosya silinemedi:', filePath, e);
            }
        }
        res.json({ message: 'Görsel başarıyla silindi.' });
    }
    catch (error) {
        res.status(500).json({ error: 'Silme işlemi başarısız.' });
    }
});
exports.deleteSliderItem = deleteSliderItem;
/**
 * 7. Tek Bir Görseli Güncelle (Sıra, Resim, Başlıklar vb.)
 */
const updateSliderItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body;
    try {
        const updatedItem = yield prisma_1.default.homeSliderItem.update({
            where: { id: Number(id) },
            data: data,
        });
        res.json(updatedItem);
    }
    catch (error) {
        console.error("Güncelleme hatası:", error);
        res.status(500).json({ error: 'Görsel güncellenemedi.' });
    }
});
exports.updateSliderItem = updateSliderItem;
//# sourceMappingURL=HomeSliderController.js.map