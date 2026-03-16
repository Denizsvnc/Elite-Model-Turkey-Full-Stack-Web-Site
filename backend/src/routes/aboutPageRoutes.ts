import { Router } from 'express';
import { getAboutPage, upsertAboutPage } from '../controllers/aboutPageController';
import { authMiddleware as adminAuth } from '../middleware/auth';

const router = Router();

// Sayfa verilerini getir
// GET /api/about
router.get('/', getAboutPage);

// Sayfayı kaydet veya güncelle (Tek endpoint)
// POST /api/about
router.post('/', adminAuth, upsertAboutPage);

export default router;