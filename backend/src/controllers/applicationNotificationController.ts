import { Request, Response } from 'express';
import { ApplicationNotificationService } from '../Services/applicationNotification.service';

const service = new ApplicationNotificationService();

/**
 * Bildirim talebi oluştur
 */
export const createNotificationRequest = async (req: Request, res: Response) => {
    try {
        const { fullName, phone, email } = req.body;

        // Validasyon
        if (!fullName || !phone || !email) {
            return res.status(400).json({
                success: false,
                message: 'Tüm alanlar zorunludur.'
            });
        }

        // Email formatı kontrolü
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Geçersiz e-posta adresi.'
            });
        }

        const request = await service.createNotificationRequest(fullName, phone, email);

        return res.status(201).json({
            success: true,
            message: 'Bildirim talebiniz kaydedildi. Başvurular açıldığında size e-posta göndereceğiz.',
            data: request
        });

    } catch (error: any) {
        console.error('Bildirim talebi oluşturma hatası:', error);
        
        if (error.message === 'Bu e-posta adresi zaten kayıtlı.') {
            return res.status(409).json({
                success: false,
                message: error.message
            });
        }

        return res.status(500).json({
            success: false,
            message: 'Bir hata oluştu. Lütfen tekrar deneyin.'
        });
    }
};

/**
 * Tüm bildirilmemiş talepleri getir (Admin)
 */
export const getUnnotifiedRequests = async (req: Request, res: Response) => {
    try {
        const requests = await service.getUnnotifiedRequests();

        return res.status(200).json({
            success: true,
            data: requests
        });

    } catch (error) {
        console.error('Bildirim talepleri getirme hatası:', error);
        return res.status(500).json({
            success: false,
            message: 'Bir hata oluştu.'
        });
    }
};
