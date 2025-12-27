import { Router } from 'express';
import * as authController from '../controllers/authController';
import { authMiddleware, roleMiddleware } from '../middleware/auth';

const router = Router();

// Public routes
router.post('/login', authController.login);

// Protected routes - Sadece kimlik doğrulaması gerekli
router.get('/profile', authMiddleware, authController.getProfile);
router.post('/change-password', authMiddleware, authController.changePassword);

// Protected routes - Sadece SUPERADMIN erişebilir
router.post(
    '/register',
    authMiddleware,
    roleMiddleware('SUPERADMIN'),
    authController.register
);

export default router;
