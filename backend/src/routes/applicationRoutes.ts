import { Router } from 'express';
import {
    createApplication,
    getApplications,
    getApplicationById,
    updateApplicationStatus,
    deleteApplication
} from '../controllers/applicationController';

const router = Router();

// Public: Başvuru Gönder
router.post('/', createApplication);

// Admin: Tümünü Listele (Query ?status=NEW destekler)
router.get('/', getApplications);

// Admin: Detay Gör
router.get('/:id', getApplicationById);

// Admin: Durum veya Not Güncelle (PATCH daha uygundur çünkü kısmi güncelleme yapıyoruz)
router.patch('/:id', updateApplicationStatus);

// Admin: Sil
router.delete('/:id', deleteApplication);

export default router;