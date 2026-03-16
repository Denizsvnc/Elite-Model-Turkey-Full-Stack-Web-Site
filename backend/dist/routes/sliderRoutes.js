"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HomeSliderController_1 = require("../controllers/HomeSliderController");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// ==========================================================
// 1. SLIDER GRUP ROTALARI (Örn: "Ana Sayfa", "Kampanya")
// ==========================================================
// Tüm slider gruplarını ve içindeki görselleri getir
// GET /api/sliders
router.get('/', HomeSliderController_1.getHomeSliders);
// ID'ye göre tek bir slider grubu getir
// GET /api/sliders/1
router.get('/:id', HomeSliderController_1.getHomeSliderById);
// Yeni bir slider grubu oluştur (İçi boş)
// POST /api/sliders
router.post('/', auth_1.authMiddleware, HomeSliderController_1.createHomeSlider);
// Slider grubunun adını veya durumunu güncelle
// PUT /api/sliders/1
router.put('/:id', auth_1.authMiddleware, HomeSliderController_1.updateHomeSlider);
// ==========================================================
// 2. SLIDER ITEM ROTALARI (Tekli Görsel Ekleme/Silme)
// ==========================================================
// Mevcut bir gruba YENİ GÖRSEL ekle
// POST /api/sliders/item
// (Body içinde "homeSliderId" gönderilmelidir)
router.post('/item', auth_1.authMiddleware, HomeSliderController_1.addSliderItem);
// Tek bir görseli sil (ID: Resmin kendi ID'sidir)
// DELETE /api/sliders/item/55
router.delete('/item/:id', auth_1.authMiddleware, HomeSliderController_1.deleteSliderItem);
// Tek bir görseli güncelle (Sıra, resim linki, başlıklar vb.)
// PATCH /api/sliders/item/55
router.patch('/item/:id', auth_1.authMiddleware, HomeSliderController_1.updateSliderItem);
exports.default = router;
//# sourceMappingURL=sliderRoutes.js.map