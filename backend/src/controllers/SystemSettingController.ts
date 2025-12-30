import { Request, Response } from 'express';
import prisma from '../lib/prisma';

// ==========================================
// 1. Tüm Ayarları Listele (Gruplanmış veya Düz)
// ==========================================
export const getAllSettings = async (req: Request, res: Response) => {
    try {
        const settings = await prisma.systemSetting.findMany({
            orderBy: {
                group: 'asc', // Gruplara göre sıralı gelsin (email, telegram...)
            }
        });

        // İstersen frontend'de gruplamak yerine burada da gruplayabilirsin.
        // Şimdilik düz liste dönüyoruz, frontend'de filter ile ayırabilirsin.
        res.json(settings);
    } catch (error) {
        console.error("Ayarlar çekilemedi:", error);
        res.status(500).json({ error: 'Ayarlar yüklenirken hata oluştu.' });
    }
};

// ==========================================
// 2. Ayar Güncelle (Key ile)
// ==========================================
export const updateSetting = async (req: Request, res: Response) => {
    const { key } = req.params; // URL'den gelir: /api/admin/settings/telegram_token
    const { value, isActive } = req.body;

    try {
        const updatedSetting = await prisma.systemSetting.update({
            where: { key: key },
            data: {
                value: value,      // Yeni değer
                isActive: isActive // Aktif/Pasif durumu
            }
        });

        res.json({ success: true, data: updatedSetting });
    } catch (error) {
        console.error("Ayar güncellenemedi:", error);
        res.status(500).json({ error: 'Güncelleme başarısız.' });
    }
};

// ==========================================
// 3. Yeni Ayar Ekle (Gerekirse)
// ==========================================
export const createSetting = async (req: Request, res: Response) => {
    try {
        const setting = await prisma.systemSetting.create({
            data: req.body
        });
        res.status(201).json(setting);
    } catch (error) {
        res.status(500).json({ error: 'Ayar oluşturulamadı.' });
    }
};