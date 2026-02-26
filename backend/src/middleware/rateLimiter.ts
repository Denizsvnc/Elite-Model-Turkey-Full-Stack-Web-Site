import rateLimit from 'express-rate-limit';

export const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: 'Çok fazla giriş denemesi. 15 dakika sonra tekrar deneyin.',
    standardHeaders: true,
    legacyHeaders: false
});

export const applicationLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 3,
    message: 'Saatte en fazla 3 başvuru yapabilirsiniz.',
    standardHeaders: true,
    legacyHeaders: false
});

export const contactLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 5,
    message: 'Çok fazla mesaj gönderdiniz. Lütfen bir süre bekleyin.',
    standardHeaders: true,
    legacyHeaders: false
});

export const uploadLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20,
    message: 'Çok fazla dosya yükleme denemesi.',
    standardHeaders: true,
    legacyHeaders: false
});
