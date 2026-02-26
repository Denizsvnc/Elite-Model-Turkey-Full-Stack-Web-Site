import { Router } from 'express';
import { 
    getAllRules, 
    updateRule 
} from '../controllers/NotificationRuleController';
import { authMiddleware as adminAuth } from '../middleware/auth';

const router = Router();

// Endpoint: /api/admin/rules
router.get('/', adminAuth, getAllRules);              // Tüm kuralları getir
router.put('/:slug', adminAuth, updateRule);          // Kural güncelle (Örn: /contact_form)

export default router;