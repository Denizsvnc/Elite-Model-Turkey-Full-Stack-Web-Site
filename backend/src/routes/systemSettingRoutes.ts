import { Router } from 'express';
import { 
    getAllSettings, 
    updateSetting, 
    createSetting 
} from '../controllers/SystemSettingController';
import { authMiddleware as adminAuth } from '../middleware/auth';

const router = Router();

// Endpoint: /api/admin/settings
router.get('/', adminAuth, getAllSettings);           // Tüm ayarları getir
router.put('/:key', adminAuth, updateSetting);        // Ayar güncelle (Örn: /telegram_token)
router.post('/', adminAuth, createSetting);           // Yeni ayar ekle

export default router;