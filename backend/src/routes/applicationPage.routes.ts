import { Router } from "express";
import { ApplicationPageController } from "../controllers/applicationPage.controller";
import { authMiddleware as adminAuth } from '../middleware/auth';

const router = Router();
const controller = new ApplicationPageController();

router.get("/status", controller.getStatus);


router.put('/status', adminAuth, controller.updateStatus);

export default router;