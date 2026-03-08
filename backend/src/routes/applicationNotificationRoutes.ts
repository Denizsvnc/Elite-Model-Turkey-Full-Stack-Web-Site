import { Router } from 'express';
import { 
    createNotificationRequest, 
    getUnnotifiedRequests 
} from '../controllers/applicationNotificationController';
import { authMiddleware as adminAuth } from '../middleware/auth';

const router = Router();

// Public: Bildirim talebi oluştur
router.post('/', createNotificationRequest);

router.get('/', adminAuth, getUnnotifiedRequests);

export default router;
