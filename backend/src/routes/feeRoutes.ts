import { Router } from 'express';
import { getCurrentFee, updateFee } from '../controllers/feeController';
// Eğer bir admin kontrolü (middleware) varsa buraya import edebilirsin.
// import { authenticate, requireAdmin } from '../middleware/auth'; 

const router = Router();

// 1. GET: Mevcut ücreti getir
// Adres: http://localhost:3005/api/fee
// Kimler erişebilir: Genelde herkes (Ödeme ekranında kullanıcı görecek)
router.get('/', getCurrentFee);

// 2. PUT: Ücreti güncelle (veya yoksa oluştur)
// Adres: http://localhost:3005/api/fee
// Body: { "amount": 1500 }
// Kimler erişebilir: Sadece Admin olmalı (Middleware eklemeyi unutma!)
router.put('/', updateFee);

export default router;