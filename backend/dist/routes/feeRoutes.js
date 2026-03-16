"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const feeController_1 = require("../controllers/feeController");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
router.get('/', feeController_1.getCurrentFee);
router.put('/', auth_1.authMiddleware, feeController_1.updateFee);
exports.default = router;
//# sourceMappingURL=feeRoutes.js.map