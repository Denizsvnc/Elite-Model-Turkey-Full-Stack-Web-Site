import { Router } from 'express';
import { getAboutPage, upsertAboutPage } from '../controllers/aboutPageController';

const router = Router();

// Sayfa verilerini getir
// GET /api/about
router.get('/', getAboutPage);

// Sayfayı kaydet veya güncelle (Tek endpoint)
// POST /api/about
router.post('/', upsertAboutPage);

export default router;