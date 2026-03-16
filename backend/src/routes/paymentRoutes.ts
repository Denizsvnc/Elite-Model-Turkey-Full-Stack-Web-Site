import { Router } from "express";
import { iyzicoCallback } from "../controllers/paymentController";

const router = Router();

router.post("/callback", iyzicoCallback);

export default router;
