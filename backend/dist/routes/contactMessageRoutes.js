"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactMessageController_1 = require("../controllers/contactMessageController");
const express_validator_1 = require("express-validator");
const auth_1 = require("../middleware/auth");
const rateLimiter_1 = require("../middleware/rateLimiter");
const router = (0, express_1.Router)();
router.post('/', rateLimiter_1.contactLimiter, [
    (0, express_validator_1.body)('fullName').isString().isLength({ min: 2, max: 100 }).trim(),
    (0, express_validator_1.body)('email').isEmail().normalizeEmail(),
    (0, express_validator_1.body)('subject').isString().isLength({ min: 2, max: 100 }).trim(),
    (0, express_validator_1.body)('message').isString().isLength({ min: 5, max: 1000 }).trim()
], contactMessageController_1.createContactMessage);
// Admin: Gelen kutusunu gör
router.get('/', auth_1.authMiddleware, contactMessageController_1.getContactMessages);
// Admin: Mesaj detayını gör
router.get('/:id', auth_1.authMiddleware, contactMessageController_1.getMessageById);
// Admin: Mesajı okundu/okunmadı yap
router.patch('/:id', auth_1.authMiddleware, contactMessageController_1.markMessageAsRead);
// Admin: Mesajı sil
router.delete('/:id', auth_1.authMiddleware, contactMessageController_1.deleteContactMessage);
exports.default = router;
//# sourceMappingURL=contactMessageRoutes.js.map