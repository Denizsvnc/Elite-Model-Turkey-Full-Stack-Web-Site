import { Router } from 'express';
import { getDashboardStats } from '../controllers/statsController';
import { authMiddleware as adminAuth } from '../middleware/auth';

const router = Router();

// Dashboard istatistiklerini getir
router.get('/dashboard', adminAuth, getDashboardStats);

export default router;
