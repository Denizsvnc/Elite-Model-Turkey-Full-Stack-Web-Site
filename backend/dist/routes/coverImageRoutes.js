"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const coverImageController_1 = require("../controllers/coverImageController");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// GET: Tüm kapakları getir
router.get('/', coverImageController_1.getCoverImages);
// POST: Kapak ekle veya güncelle (Tek endpoint ikisini de yapar)
// Body: { "type": "WOMEN", "imageUrl": "..." }
router.post('/', auth_1.authMiddleware, coverImageController_1.upsertCoverImage);
// DELETE: Tipe göre sil
// URL Örneği: /api/covers/WOMEN
router.delete('/:type', auth_1.authMiddleware, coverImageController_1.deleteCoverImage);
exports.default = router;
//# sourceMappingURL=coverImageRoutes.js.map