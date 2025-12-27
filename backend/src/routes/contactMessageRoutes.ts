import { Router } from 'express';
import {
    createContactMessage,
    getContactMessages,
    getMessageById,
    markMessageAsRead,
    deleteContactMessage
} from '../controllers/contactMessageController';

const router = Router();

// Public: Form gönderimi
router.post('/', createContactMessage);

// Admin: Gelen kutusunu gör
router.get('/', getContactMessages);

// Admin: Mesaj detayını gör
router.get('/:id', getMessageById);

// Admin: Mesajı okundu/okunmadı yap
router.patch('/:id', markMessageAsRead);

// Admin: Mesajı sil
router.delete('/:id', deleteContactMessage);

export default router;