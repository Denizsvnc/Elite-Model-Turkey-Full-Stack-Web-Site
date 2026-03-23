import { Router } from "express";
import { paytrCallback } from "../controllers/paymentController";

const router = Router();

router.post("/callback", paytrCallback);

export default router;
