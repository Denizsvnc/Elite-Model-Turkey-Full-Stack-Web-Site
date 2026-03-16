"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const faqController_1 = require("../controllers/faqController");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
router.get('/', faqController_1.getFAQs); // Listele
router.get('/:id', faqController_1.getFAQById); // Tek Getir
router.post('/', auth_1.authMiddleware, faqController_1.createFAQ); // Yeni Ekle
router.put('/:id', auth_1.authMiddleware, faqController_1.updateFAQ); // Güncelle
router.delete('/:id', auth_1.authMiddleware, faqController_1.deleteFAQ); // Sil
exports.default = router;
//# sourceMappingURL=faqRoutes.js.map