import { Router } from 'express';
import {
        createApplication,
        getApplications,
        getApplicationById,
        updateApplicationStatus,
        deleteApplication
} from '../controllers/applicationController';
import { body } from 'express-validator';

const router = Router();

// Public: Başvuru Gönder
router.post(
    '/',
    [
        body('fullName').isString().isLength({ min: 2, max: 100 }).trim(),
        body('birthDate').isISO8601().toDate(),
        body('gender').isIn(['MALE', 'FEMALE', 'OTHER']),
        body('nationality').optional().isString().isLength({ max: 50 }),
        body('email').isEmail().normalizeEmail(),
        body('phone').isString().isLength({ min: 8, max: 20 }),
        body('city').isString().isLength({ min: 2, max: 50 }),
        body('heightCm').isInt({ min: 100, max: 250 }),
        body('chestCm').optional().isInt({ min: 40, max: 200 }),
        body('hipsCm').optional().isInt({ min: 40, max: 200 }),
        body('footCm').optional().isInt({ min: 10, max: 60 }),
        body('waistCm').optional().isInt({ min: 30, max: 150 }),
        body('eyeColor').optional().isString().isLength({ max: 30 }),
        body('selfieUrl').optional().isString(),
        body('profilePhoto').optional().isString(),
        body('fullBodyPhoto').optional().isString(),
        body('status').optional().isIn(['NEW', 'ACCEPTED', 'REJECTED', 'REVIEW'])
    ],
    createApplication
);

// Admin: Tümünü Listele
router.get('/', getApplications);

// Admin: Detay Gör
router.get('/:id', getApplicationById);

// Admin: Durum veya Not Güncelle
router.patch('/:id', updateApplicationStatus);

// Admin: Sil
router.delete('/:id', deleteApplication);

export default router;