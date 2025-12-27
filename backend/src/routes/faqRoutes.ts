import { Router } from 'express';
import {
    getFAQs,
    getFAQById,
    createFAQ,
    updateFAQ,
    deleteFAQ
} from '../controllers/faqController';

const router = Router();

router.get('/', getFAQs);          // Listele
router.get('/:id', getFAQById);    // Tek Getir
router.post('/', createFAQ);       // Yeni Ekle
router.put('/:id', updateFAQ);     // Güncelle
router.delete('/:id', deleteFAQ);  // Sil

export default router;