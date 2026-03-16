import { Router } from "express";
import * as authController from "../controllers/authController";
import { authMiddleware, roleMiddleware } from "../middleware/auth";

const router = Router();

// Public routes
router.post("/login", authController.login);

// Protected routes
router.get("/profile", authMiddleware, authController.getProfile);
router.post("/change-password", authMiddleware, authController.changePassword);

router.post("/register", authController.register);

export default router;
