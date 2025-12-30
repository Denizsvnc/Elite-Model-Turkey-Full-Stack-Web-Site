import { Request, Response } from 'express';
import prisma from '../lib/prisma';

// ==========================================
// 1. Tüm Hesapları Getir (Public & Admin)
// ==========================================
// Frontend Footer'da kullanırken isActive: true olanları filtreleyebilirsin.
// Admin panelde ise hepsini gösterirsin.
export const getAllSocials = async (req: Request, res: Response) => {
    try {
        const socials = await prisma.socialMedia.findMany({
            orderBy: {
                order: 'asc', // Sıralama: 1, 2, 3...
            }
        });
        res.json(socials);
    } catch (error) {
        console.error("Sosyal medya hatası:", error);
        res.status(500).json({ error: 'Sosyal medya hesapları yüklenemedi.' });
    }
};

// ==========================================
// 2. Yeni Hesap Ekle (Admin)
// ==========================================
export const createSocial = async (req: Request, res: Response) => {
    const { platform, name, url, iconKey, order } = req.body;

    try {
        // Platform adı benzersiz olmalı (Örn: ikinci bir 'instagram' eklenemez)
        const existing = await prisma.socialMedia.findUnique({
            where: { platform }
        });

        if (existing) {
            return res.status(400).json({ error: 'Bu platform zaten ekli.' });
        }

        const newSocial = await prisma.socialMedia.create({
            data: {
                platform, // 'instagram', 'whatsapp' vb.
                name,     // 'Instagram', 'Whatsapp Hattımız'
                url,      // Link
                iconKey,  // 'Instagram', 'WhatsApp' (MUI Icon adı)
                order: Number(order) || 0,
                isActive: true
            }
        });

        res.status(201).json(newSocial);
    } catch (error) {
        console.error("Ekleme hatası:", error);
        res.status(500).json({ error: 'Sosyal medya hesabı eklenemedi.' });
    }
};

// ==========================================
// 3. Güncelle (Admin - Link, İkon, Sıra, Aktiflik)
// ==========================================
export const updateSocial = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { url, isActive, order, name, iconKey } = req.body;

    try {
        const updatedSocial = await prisma.socialMedia.update({
            where: { id: Number(id) },
            data: {
                url,
                name,
                iconKey,
                isActive: typeof isActive === 'boolean' ? isActive : undefined,
                order: order !== undefined ? Number(order) : undefined
            }
        });
        res.json({ success: true, data: updatedSocial });
    } catch (error) {
        console.error("Güncelleme hatası:", error);
        res.status(500).json({ error: 'Güncelleme başarısız.' });
    }
};

// ==========================================
// 4. Sil (Admin)
// ==========================================
export const deleteSocial = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await prisma.socialMedia.delete({
            where: { id: Number(id) }
        });
        res.json({ success: true, message: 'Hesap silindi.' });
    } catch (error) {
        console.error("Silme hatası:", error);
        res.status(500).json({ error: 'Silme işlemi başarısız.' });
    }
};