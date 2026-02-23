import { Router } from 'express';
import { getContactInfo, upsertContactInfo } from '../controllers/contactInfoController';

const router = Router();

// bilgileri getir
// GET /api/contact
router.get('/', getContactInfo);

// kaydet / guncelle
// POST /api/contact
router.post('/', upsertContactInfo);

export default router;