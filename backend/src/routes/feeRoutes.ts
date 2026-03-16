import { Router } from 'express';
import { getCurrentFee, updateFee } from '../controllers/feeController';
import { authMiddleware as adminAuth } from '../middleware/auth';

const router = Router();


router.get('/', getCurrentFee);

router.put('/', adminAuth, updateFee);

export default router;