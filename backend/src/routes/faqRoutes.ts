import { Router } from 'express';
import {
    getFAQs,
    getFAQById,
    createFAQ,
    updateFAQ,
    deleteFAQ
} from '../controllers/faqController';
import { authMiddleware as adminAuth } from '../middleware/auth';

const router = Router();

router.get('/', getFAQs);          // Listele
router.get('/:id', getFAQById);    // Tek Getir
router.post('/', adminAuth, createFAQ);       // Yeni Ekle
router.put('/:id', adminAuth, updateFAQ);     // Güncelle
router.delete('/:id', adminAuth, deleteFAQ);  // Sil

export default router;