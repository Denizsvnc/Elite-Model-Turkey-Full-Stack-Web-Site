import { Router } from 'express';
import {
    getFeaturedItems,
    getFeaturedItemById,
    createFeaturedItem,
    updateFeaturedItem,
    deleteFeaturedItem
} from '../controllers/featuredItemController';

const router = Router();

router.get('/', getFeaturedItems);
router.get('/:id', getFeaturedItemById);
router.post('/', createFeaturedItem);
router.put('/:id', updateFeaturedItem);
router.delete('/:id', deleteFeaturedItem);

export default router;