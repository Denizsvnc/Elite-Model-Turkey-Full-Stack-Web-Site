import { Router } from 'express';
import { 
    getAllSocials, 
    createSocial, 
    updateSocial, 
    deleteSocial 
} from '../controllers/SocialMediaController'; // Dosya ismine dikkat et (Büyük/Küçük harf)

import { authMiddleware as adminAuth} from '../middleware/auth'; 

const router = Router();

// --- PUBLIC ROUTE ---
// Sitenin footer'ında veya iletişim sayfasında listelemek için
router.get('/', getAllSocials);

// --- ADMIN ROUTES (Korumalı) ---
// Yeni ekle
router.post('/', adminAuth, createSocial);

// Güncelle (ID ile)
router.put('/:id', adminAuth, updateSocial);

// Sil (ID ile)
router.delete('/:id', adminAuth, deleteSocial);

export default router;