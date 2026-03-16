"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const applicationController_1 = require("../controllers/applicationController");
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
router.post("/", [
    (0, express_validator_1.body)("fullName").isString().isLength({ min: 2, max: 100 }).trim(),
    (0, express_validator_1.body)("birthDate").isISO8601().toDate(),
    (0, express_validator_1.body)("gender").isIn(["MALE", "FEMALE", "OTHER"]),
    (0, express_validator_1.body)("nationality").optional().isString().isLength({ max: 50 }),
    (0, express_validator_1.body)("email").isEmail().normalizeEmail(),
    (0, express_validator_1.body)("phone").isString().isLength({ min: 8, max: 20 }),
    (0, express_validator_1.body)("city").isString().isLength({ min: 2, max: 50 }),
    (0, express_validator_1.body)("heightCm").isInt({ min: 100, max: 250 }),
    (0, express_validator_1.body)("chestCm").optional().isInt({ min: 40, max: 200 }),
    (0, express_validator_1.body)("hipsCm").optional().isInt({ min: 40, max: 200 }),
    (0, express_validator_1.body)("footCm").optional().isInt({ min: 10, max: 60 }),
    (0, express_validator_1.body)("waistCm").optional().isInt({ min: 30, max: 150 }),
    (0, express_validator_1.body)("eyeColor").optional().isString().isLength({ max: 30 }),
    (0, express_validator_1.body)("selfieUrl").optional().isString(),
    (0, express_validator_1.body)("profilePhoto").optional().isString(),
    (0, express_validator_1.body)("fullBodyPhoto").optional().isString(),
    (0, express_validator_1.body)("status").optional().isIn(["NEW", "ACCEPTED", "REJECTED", "REVIEW"]),
], applicationController_1.createApplication);
// Admin: Tümünü Listele
router.get("/", applicationController_1.getApplications);
// Admin: Detay Gör
router.get("/:id", applicationController_1.getApplicationById);
// Admin: Durum veya Not Güncelle
router.patch("/:id", applicationController_1.updateApplicationStatus);
// Admin: Sil
router.delete("/:id", applicationController_1.deleteApplication);
router.put("/send-verification-email", applicationController_1.sendVerificationEmail);
router.post("/verify-code", applicationController_1.verifyCode);
exports.default = router;
//# sourceMappingURL=applicationRoutes.js.map