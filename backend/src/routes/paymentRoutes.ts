import { Router } from 'express';
// 1. Mevcut Controller
import { getUniquePaymentKey } from '../controllers/paymentController';
// 2. YENİ: Mail Kontrol Controller'ını import et
import { checkBankEmails } from '../controllers/paymentCheckController'; 

const router = Router();

// Frontend için Kod Üretme (URL: /api/payment/generate-key)
router.get('/generate-key', getUniquePaymentKey); 

// YENİ: Cron Job Robotu için Mail Kontrol (URL: /api/payment/check-emails)
router.get('/check-emails', checkBankEmails);

export default router;