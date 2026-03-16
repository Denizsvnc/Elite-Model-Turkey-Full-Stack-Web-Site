"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const applicationNotificationController_1 = require("../controllers/applicationNotificationController");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// Public: Bildirim talebi oluştur
router.post('/', applicationNotificationController_1.createNotificationRequest);
// Admin: Bildirilmemiş talepleri getir
router.get('/', auth_1.authMiddleware, applicationNotificationController_1.getUnnotifiedRequests);
exports.default = router;
//# sourceMappingURL=applicationNotificationRoutes.js.map