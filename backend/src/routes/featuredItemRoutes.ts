import { Router } from 'express';
import {
    getFeaturedItems,
    getFeaturedItemById,
    createFeaturedItem,
    updateFeaturedItem,
    deleteFeaturedItem
} from '../controllers/featuredItemController';
import { authMiddleware as adminAuth } from '../middleware/auth';

const router = Router();

router.get('/', getFeaturedItems);
router.get('/:id', getFeaturedItemById);
router.post('/', adminAuth, createFeaturedItem);
router.put('/:id', adminAuth, updateFeaturedItem);
router.delete('/:id', adminAuth, deleteFeaturedItem);

export default router;