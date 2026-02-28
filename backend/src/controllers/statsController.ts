import { Request, Response } from 'express';
import prisma from '../lib/prisma';

// ==========================================
// Dashboard İstatistiklerini Getir
// ==========================================
export const getDashboardStats = async (req: Request, res: Response) => {
    try {
        // Toplam başvuru sayısı
        const totalApplications = await prisma.application.count();

        // Bekleyen başvuru sayısı (REVIEW durumunda)
        const pendingApplications = await prisma.application.count({
            where: { status: 'REVIEW' }
        });

        // Aktif modeller (ACCEPTED durumunda)
        const activeModels = await prisma.application.count({
            where: { status: 'ACCEPTED' }
        });

        // Toplam mesaj sayısı
        const totalMessages = await prisma.contactMessage.count();

        // Okunmamış mesaj sayısı
        const unreadMessages = await prisma.contactMessage.count({
            where: { isRead: false }
        });

        res.json({
            totalApplications,
            pendingApplications,
            activeModels,
            totalMessages,
            unreadMessages
        });
    } catch (error) {
        console.error('Stats fetch error:', error);
        res.status(500).json({ error: 'İstatistikler alınamadı.' });
    }
};
