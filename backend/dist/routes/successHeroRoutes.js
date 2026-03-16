"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const successHeroController_1 = require("../controllers/successHeroController");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
router.get('/', successHeroController_1.getSuccessHeroes); // Hepsini getir
router.get('/:id', successHeroController_1.getSuccessHeroById); // Tek getir
router.post('/', auth_1.authMiddleware, successHeroController_1.createSuccessHero); // Yeni oluştur
router.put('/:id', auth_1.authMiddleware, successHeroController_1.updateSuccessHero); // Güncelle
router.delete('/:id', auth_1.authMiddleware, successHeroController_1.deleteSuccessHero); // Sil
exports.default = router;
//# sourceMappingURL=successHeroRoutes.js.map