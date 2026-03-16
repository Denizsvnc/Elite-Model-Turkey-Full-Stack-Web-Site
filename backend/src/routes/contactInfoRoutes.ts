import { Router } from 'express';
import { getContactInfo, upsertContactInfo } from '../controllers/contactInfoController';
import { authMiddleware as adminAuth } from '../middleware/auth';

const router = Router();

// bilgileri getir
// GET /api/contact
router.get('/', getContactInfo);

// kaydet / guncelle
// POST /api/contact
router.post('/', adminAuth, upsertContactInfo);

export default router;