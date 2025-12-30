import { Request, Response } from 'express';
import prisma from '../lib/prisma';

// ==========================================
// 1. Tüm Kuralları Listele (Contact, Application vb.)
// ==========================================
export const getAllRules = async (req: Request, res: Response) => {
    try {
        const rules = await prisma.notificationRule.findMany();
        res.json(rules);
    } catch (error) {
        res.status(500).json({ error: 'Kurallar çekilemedi.' });
    }
};

// ==========================================
// 2. Kural Güncelle (Slug ile)
// ==========================================
export const updateRule = async (req: Request, res: Response) => {
    const { slug } = req.params; // URL: /api/admin/rules/contact_form
    const { 
        emailEnabled, 
        telegramEnabled, 
        whatsappEnabled, 
        isActive 
    } = req.body;

    try {
        const updatedRule = await prisma.notificationRule.update({
            where: { slug: slug },
            data: {
                emailEnabled,
                telegramEnabled,
                whatsappEnabled,
                isActive
            }
        });

        res.json({ success: true, data: updatedRule });
    } catch (error) {
        console.error("Kural güncellenemedi:", error);
        res.status(500).json({ error: 'Güncelleme hatası.' });
    }
};