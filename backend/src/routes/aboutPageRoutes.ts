import { Router } from 'express';
import { getAboutPage, upsertAboutPage } from '../controllers/aboutPageController';
import { authMiddleware as adminAuth } from '../middleware/auth';

const router = Router();

router.get('/', getAboutPage);

router.post('/', adminAuth, upsertAboutPage);

export default router;