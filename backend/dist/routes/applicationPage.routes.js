"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const applicationPage_controller_1 = require("../controllers/applicationPage.controller");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
const controller = new applicationPage_controller_1.ApplicationPageController();
router.get("/status", controller.getStatus);
router.put('/status', auth_1.authMiddleware, controller.updateStatus);
exports.default = router;
//# sourceMappingURL=applicationPage.routes.js.map