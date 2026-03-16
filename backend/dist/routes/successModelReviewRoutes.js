"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const successModelReviewController_1 = require("../controllers/successModelReviewController");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// Tüm model yorumlarını getir
router.get('/', successModelReviewController_1.getSuccessModelReviews);
// ID'ye göre tek yorum getir
router.get('/:id', successModelReviewController_1.getSuccessModelReviewById);
// Yeni yorum oluştur
router.post('/', auth_1.authMiddleware, successModelReviewController_1.createSuccessModelReview);
// Yorum güncelle
router.put('/:id', auth_1.authMiddleware, successModelReviewController_1.updateSuccessModelReview);
// Yorum sil
router.delete('/:id', auth_1.authMiddleware, successModelReviewController_1.deleteSuccessModelReview);
exports.default = router;
//# sourceMappingURL=successModelReviewRoutes.js.map