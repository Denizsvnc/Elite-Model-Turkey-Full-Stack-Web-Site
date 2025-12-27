import { Router } from 'express';
import {
    getSuccessModelReviews,
    getSuccessModelReviewById,
    createSuccessModelReview,
    updateSuccessModelReview,
    deleteSuccessModelReview
} from '../controllers/successModelReviewController';

const router = Router();

// Tüm model yorumlarını getir
router.get('/', getSuccessModelReviews);

// ID'ye göre tek yorum getir
router.get('/:id', getSuccessModelReviewById);

// Yeni yorum oluştur
router.post('/', createSuccessModelReview);

// Yorum güncelle
router.put('/:id', updateSuccessModelReview);

// Yorum sil
router.delete('/:id', deleteSuccessModelReview);

export default router;
