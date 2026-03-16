"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const featuredItemController_1 = require("../controllers/featuredItemController");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
router.get('/', featuredItemController_1.getFeaturedItems);
router.get('/:id', featuredItemController_1.getFeaturedItemById);
router.post('/', auth_1.authMiddleware, featuredItemController_1.createFeaturedItem);
router.put('/:id', auth_1.authMiddleware, featuredItemController_1.updateFeaturedItem);
router.delete('/:id', auth_1.authMiddleware, featuredItemController_1.deleteFeaturedItem);
exports.default = router;
//# sourceMappingURL=featuredItemRoutes.js.map