import { Router } from 'express';
import { getDashboardStats } from '../controllers/statsController';

const router = Router();

// Dashboard istatistiklerini getir
router.get('/dashboard', getDashboardStats);

export default router;
