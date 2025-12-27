import { Router } from 'express';
import { getContactInfo, upsertContactInfo } from '../controllers/contactInfoController';

const router = Router();

// Bilgileri getir
// GET /api/contact
router.get('/', getContactInfo);

// Bilgileri kaydet/güncelle
// POST /api/contact
router.post('/', upsertContactInfo);

export default router;