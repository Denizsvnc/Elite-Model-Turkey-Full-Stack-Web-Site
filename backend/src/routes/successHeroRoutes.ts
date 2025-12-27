import { Router } from 'express';
import {
    getSuccessHeroes,
    getSuccessHeroById,
    createSuccessHero,
    updateSuccessHero,
    deleteSuccessHero
} from '../controllers/successHeroController';

const router = Router();

router.get('/', getSuccessHeroes);          // Hepsini getir
router.get('/:id', getSuccessHeroById);     // Tek getir
router.post('/', createSuccessHero);        // Yeni oluştur
router.put('/:id', updateSuccessHero);      // Güncelle
router.delete('/:id', deleteSuccessHero);   // Sil

export default router;