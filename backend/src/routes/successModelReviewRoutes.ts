import { Router } from 'express';
import {
    getSuccessModelReviews,
    getSuccessModelReviewById,
    createSuccessModelReview,
    updateSuccessModelReview,
    deleteSuccessModelReview
} from '../controllers/successModelReviewController';
import { authMiddleware as adminAuth } from '../middleware/auth';

const router = Router();

// Tüm model yorumlarını getir
router.get('/', getSuccessModelReviews);

// ID'ye göre tek yorum getir
router.get('/:id', getSuccessModelReviewById);

// Yeni yorum oluştur
router.post('/', adminAuth, createSuccessModelReview);

// Yorum güncelle
router.put('/:id', adminAuth, updateSuccessModelReview);

// Yorum sil
router.delete('/:id', adminAuth, deleteSuccessModelReview);

export default router;
