import { Router } from 'express';
import {
    getCoverImages,
    upsertCoverImage,
    deleteCoverImage
} from '../controllers/coverImageController';
import { authMiddleware as adminAuth } from '../middleware/auth';

const router = Router();

// GET: Tüm kapakları getir
router.get('/', getCoverImages);

// POST: Kapak ekle veya güncelle (Tek endpoint ikisini de yapar)
// Body: { "type": "WOMEN", "imageUrl": "..." }
router.post('/', adminAuth, upsertCoverImage);

// DELETE: Tipe göre sil
// URL Örneği: /api/covers/WOMEN
router.delete('/:type', adminAuth, deleteCoverImage);

export default router;