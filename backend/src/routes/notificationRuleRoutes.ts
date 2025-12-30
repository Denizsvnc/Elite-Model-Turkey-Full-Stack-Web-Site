import { Router } from 'express';
import { 
    getAllRules, 
    updateRule 
} from '../controllers/NotificationRuleController';

const router = Router();

// Endpoint: /api/admin/rules
router.get('/', getAllRules);              // Tüm kuralları getir
router.put('/:slug', updateRule);          // Kural güncelle (Örn: /contact_form)

export default router;