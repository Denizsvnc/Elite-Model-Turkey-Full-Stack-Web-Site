import { Router } from 'express';
import { 
    getAllSettings, 
    updateSetting, 
    createSetting 
} from '../controllers/SystemSettingController';

const router = Router();

// Endpoint: /api/admin/settings
router.get('/', getAllSettings);           // Tüm ayarları getir
router.put('/:key', updateSetting);        // Ayar güncelle (Örn: /telegram_token)
router.post('/', createSetting);           // Yeni ayar ekle

export default router;