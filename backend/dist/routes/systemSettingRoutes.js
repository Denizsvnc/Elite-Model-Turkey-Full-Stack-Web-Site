"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SystemSettingController_1 = require("../controllers/SystemSettingController");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// Endpoint: /api/admin/settings
router.get('/', auth_1.authMiddleware, SystemSettingController_1.getAllSettings); // Tüm ayarları getir
router.put('/:key', auth_1.authMiddleware, SystemSettingController_1.updateSetting); // Ayar güncelle (Örn: /telegram_token)
router.post('/', auth_1.authMiddleware, SystemSettingController_1.createSetting); // Yeni ayar ekle
exports.default = router;
//# sourceMappingURL=systemSettingRoutes.js.map