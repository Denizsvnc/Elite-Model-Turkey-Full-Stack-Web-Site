import { Router } from 'express';
import {
    getAllNews,
    getNewsById,
    createNews,
    updateNews,
    deleteNews
} from '../controllers/newsController';
import { authMiddleware as adminAuth } from '../middleware/auth';

const router = Router();

router.get('/', getAllNews);
router.get('/:id', getNewsById);
router.post('/', adminAuth, createNews);
router.put('/:id', adminAuth, updateNews);
router.delete('/:id', adminAuth, deleteNews);

export default router;
