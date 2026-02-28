import { Router } from 'express';
import {
    getSuccessHeroes,
    getSuccessHeroById,
    createSuccessHero,
    updateSuccessHero,
    deleteSuccessHero
} from '../controllers/successHeroController';
import { authMiddleware as adminAuth } from '../middleware/auth';

const router = Router();

router.get('/', getSuccessHeroes);          // Hepsini getir
router.get('/:id', getSuccessHeroById);     // Tek getir
router.post('/', adminAuth, createSuccessHero);        // Yeni oluştur
router.put('/:id', adminAuth, updateSuccessHero);      // Güncelle
router.delete('/:id', adminAuth, deleteSuccessHero);   // Sil

export default router;