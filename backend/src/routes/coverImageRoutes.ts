import { Router } from 'express';
import {
    getCoverImages,
    upsertCoverImage,
    deleteCoverImage
} from '../controllers/coverImageController';

const router = Router();

// GET: Tüm kapakları getir
router.get('/', getCoverImages);

// POST: Kapak ekle veya güncelle (Tek endpoint ikisini de yapar)
// Body: { "type": "WOMEN", "imageUrl": "..." }
router.post('/', upsertCoverImage);

// DELETE: Tipe göre sil
// URL Örneği: /api/covers/WOMEN
router.delete('/:type', deleteCoverImage);

export default router;