"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const aboutPageController_1 = require("../controllers/aboutPageController");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// Sayfa verilerini getir
// GET /api/about
router.get('/', aboutPageController_1.getAboutPage);
// Sayfayı kaydet veya güncelle (Tek endpoint)
// POST /api/about
router.post('/', auth_1.authMiddleware, aboutPageController_1.upsertAboutPage);
exports.default = router;
//# sourceMappingURL=aboutPageRoutes.js.map