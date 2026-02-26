
import { Router } from 'express';
import {
        createContactMessage,
        getContactMessages,
        getMessageById,
        markMessageAsRead,
        deleteContactMessage
} from '../controllers/contactMessageController';
import { body } from 'express-validator';
import { authMiddleware as adminAuth } from '../middleware/auth';
import { contactLimiter } from '../middleware/rateLimiter';

const router = Router();

router.post(
    '/',
    contactLimiter,
    [
        body('fullName').isString().isLength({ min: 2, max: 100 }).trim(),
        body('email').isEmail().normalizeEmail(),
        body('subject').isString().isLength({ min: 2, max: 100 }).trim(),
        body('message').isString().isLength({ min: 5, max: 1000 }).trim()
    ],
    createContactMessage
);

// Admin: Gelen kutusunu gör
router.get('/', adminAuth, getContactMessages);

// Admin: Mesaj detayını gör
router.get('/:id', adminAuth, getMessageById);

// Admin: Mesajı okundu/okunmadı yap
router.patch('/:id', adminAuth, markMessageAsRead);

// Admin: Mesajı sil
router.delete('/:id', adminAuth, deleteContactMessage);

export default router;