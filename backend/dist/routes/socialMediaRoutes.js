"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SocialMediaController_1 = require("../controllers/SocialMediaController"); // Dosya ismine dikkat et (Büyük/Küçük harf)
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// --- PUBLIC ROUTE ---
// Sitenin footer'ında veya iletişim sayfasında listelemek için
router.get('/', SocialMediaController_1.getAllSocials);
// --- ADMIN ROUTES (Korumalı) ---
// Yeni ekle
router.post('/', auth_1.authMiddleware, SocialMediaController_1.createSocial);
// Güncelle (ID ile)
router.put('/:id', auth_1.authMiddleware, SocialMediaController_1.updateSocial);
// Sil (ID ile)
router.delete('/:id', auth_1.authMiddleware, SocialMediaController_1.deleteSocial);
exports.default = router;
//# sourceMappingURL=socialMediaRoutes.js.map