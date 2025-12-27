import { Router } from 'express';
import {
    // Grup İşlemleri (Ana Kutular)
    getHomeSliders,
    getHomeSliderById,
    createHomeSlider,
    updateHomeSlider,

    // Tekli İşlemler (Görseller)
    addSliderItem,
    deleteSliderItem,
    updateSliderItem
} from '../controllers/HomeSliderController';

const router = Router();

// ==========================================================
// 1. SLIDER GRUP ROTALARI (Örn: "Ana Sayfa", "Kampanya")
// ==========================================================

// Tüm slider gruplarını ve içindeki görselleri getir
// GET /api/sliders
router.get('/', getHomeSliders);

// ID'ye göre tek bir slider grubu getir
// GET /api/sliders/1
router.get('/:id', getHomeSliderById);

// Yeni bir slider grubu oluştur (İçi boş)
// POST /api/sliders
router.post('/', createHomeSlider);

// Slider grubunun adını veya durumunu güncelle
// PUT /api/sliders/1
router.put('/:id', updateHomeSlider);


// ==========================================================
// 2. SLIDER ITEM ROTALARI (Tekli Görsel Ekleme/Silme)
// ==========================================================

// Mevcut bir gruba YENİ GÖRSEL ekle
// POST /api/sliders/item
// (Body içinde "homeSliderId" gönderilmelidir)
router.post('/item', addSliderItem);

// Tek bir görseli sil (ID: Resmin kendi ID'sidir)
// DELETE /api/sliders/item/55
router.delete('/item/:id', deleteSliderItem);

// Tek bir görseli güncelle (Sıra, resim linki, başlıklar vb.)
// PATCH /api/sliders/item/55
router.patch('/item/:id', updateSliderItem);

export default router;