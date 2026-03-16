"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const NotificationRuleController_1 = require("../controllers/NotificationRuleController");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// Endpoint: /api/admin/rules
router.get('/', auth_1.authMiddleware, NotificationRuleController_1.getAllRules); // Tüm kuralları getir
router.put('/:slug', auth_1.authMiddleware, NotificationRuleController_1.updateRule); // Kural güncelle (Örn: /contact_form)
exports.default = router;
//# sourceMappingURL=notificationRuleRoutes.js.map