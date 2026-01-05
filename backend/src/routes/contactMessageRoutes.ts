
import { Router } from 'express';
import {
        createContactMessage,
        getContactMessages,
        getMessageById,
        markMessageAsRead,
        deleteContactMessage
} from '../controllers/contactMessageController';
import { body } from 'express-validator';

const router = Router();

// Public: Form gönderimi
router.post(
    '/',
    [
        body('fullName').isString().isLength({ min: 2, max: 100 }).trim(),
        body('email').isEmail().normalizeEmail(),
        body('subject').isString().isLength({ min: 2, max: 100 }).trim(),
        body('message').isString().isLength({ min: 5, max: 1000 }).trim()
    ],
    createContactMessage
);

// Admin: Gelen kutusunu gör
router.get('/', getContactMessages);

// Admin: Mesaj detayını gör
router.get('/:id', getMessageById);

// Admin: Mesajı okundu/okunmadı yap
router.patch('/:id', markMessageAsRead);

// Admin: Mesajı sil
router.delete('/:id', deleteContactMessage);

export default router;