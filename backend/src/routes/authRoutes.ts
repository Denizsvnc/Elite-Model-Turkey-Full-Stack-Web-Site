import { Router } from 'express';
import * as authController from '../controllers/authController';
import { authMiddleware, roleMiddleware } from '../middleware/auth';
import { loginLimiter } from '../middleware/rateLimiter';
import { body, validationResult } from 'express-validator';

const router = Router();

const validateRequest = (req: any, res: any, next: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

router.post('/login', loginLimiter, [
    body('email').isEmail().withMessage('Geçerli bir email giriniz'),
    body('password').notEmpty().withMessage('Şifre gerekli'),
    validateRequest
], authController.login);

router.post('/logout', authController.logout);

router.get('/profile', authMiddleware, authController.getProfile);

router.post('/change-password', authMiddleware, [
    body('currentPassword').notEmpty().withMessage('Mevcut şifre gerekli'),
    body('newPassword')
        .isLength({ min: 8 }).withMessage('Yeni şifre en az 8 karakter olmalı')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
        .withMessage('Şifre en az 1 büyük harf, 1 küçük harf, 1 rakam ve 1 özel karakter içermelidir'),
    validateRequest
], authController.changePassword);


router.post(
    '/register',
    authMiddleware,
    roleMiddleware('SUPERADMIN'),
    authController.register
);

export default router;
