"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const newsController_1 = require("../controllers/newsController");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
router.get('/', newsController_1.getAllNews);
router.get('/:id', newsController_1.getNewsById);
router.post('/', auth_1.authMiddleware, newsController_1.createNews);
router.put('/:id', auth_1.authMiddleware, newsController_1.updateNews);
router.delete('/:id', auth_1.authMiddleware, newsController_1.deleteNews);
exports.default = router;
//# sourceMappingURL=newsRoutes.js.map