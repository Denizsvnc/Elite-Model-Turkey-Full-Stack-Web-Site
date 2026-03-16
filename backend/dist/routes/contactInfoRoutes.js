"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactInfoController_1 = require("../controllers/contactInfoController");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// bilgileri getir
// GET /api/contact
router.get('/', contactInfoController_1.getContactInfo);
// kaydet / guncelle
// POST /api/contact
router.post('/', auth_1.authMiddleware, contactInfoController_1.upsertContactInfo);
exports.default = router;
//# sourceMappingURL=contactInfoRoutes.js.map