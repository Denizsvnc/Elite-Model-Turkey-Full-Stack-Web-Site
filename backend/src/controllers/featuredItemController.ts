import { Request, Response } from 'express';
import prisma from '../lib/prisma';
import fs from 'fs';
import path from 'path';

// ==========================================
// 1. Tüm Öne Çıkanları Getir (Sıralı)
// ==========================================
export const getFeaturedItems = async (req: Request, res: Response) => {
    try {
        const items = await prisma.featuredItem.findMany({
            orderBy: {
                order: 'asc', // 1, 2, 3... diye sıralar
            },
        });
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: 'Veriler çekilemedi.' });
    }
};

// ==========================================
// 2. ID'ye Göre Tek Bir Kayıt Getir
// ==========================================
export const getFeaturedItemById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const item = await prisma.featuredItem.findUnique({
            where: { id },
        });

        if (!item) {
            return res.status(404).json({ error: 'Kayıt bulunamadı.' });
        }
        res.json(item);
    } catch (error) {
        res.status(500).json({ error: 'Veri getirilemedi.' });
    }
};

// ==========================================
// 3. Yeni Öne Çıkan Ekle (4 DİL + ORDER ZORUNLU)
// ==========================================
export const createFeaturedItem = async (req: Request, res: Response) => {
    const {
        imageUrl,
        order, // Şemada default yok, zorunlu!
        isActive,

        // Başlıklar
        title_tr, title_en, title_de, title_ru,

        // İçerikler
        content_tr, content_en, content_de, content_ru
    } = req.body;

    try {
        const newItem = await prisma.featuredItem.create({
            data: {
                imageUrl,
                order: order ? Number(order) : 1, // Eğer gönderilmezse kod patlamasın diye 1 veriyoruz
                isActive: isActive !== undefined ? isActive : true,

                // Dil Alanları (Zorunlu)
                title_tr, title_en, title_de, title_ru,
                content_tr, content_en, content_de, content_ru
            },
        });
        res.status(201).json(newItem);
    } catch (error) {
        console.error("Ekleme hatası:", error);
        res.status(500).json({ error: 'Kayıt oluşturulamadı. Eksik alan olabilir.' });
    }
};

// ==========================================
// 4. Güncelleme İşlemi
// ==========================================
export const updateFeaturedItem = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body; // Gelen veriyi al

    try {
        // Eğer imageUrl değişiyorsa, eski dosyayı sil
        if (data.imageUrl) {
            const existingItem = await prisma.featuredItem.findUnique({ where: { id } });
            if (existingItem?.imageUrl && existingItem.imageUrl.startsWith('/uploads/')) {
                const oldFilePath = path.join(process.cwd(), 'src', existingItem.imageUrl);
                if (fs.existsSync(oldFilePath)) {
                    fs.unlinkSync(oldFilePath);
                }
            }
        }

        const updatedItem = await prisma.featuredItem.update({
            where: { id },
            data: data,
        });
        res.json(updatedItem);
    } catch (error) {
        res.status(500).json({ error: 'Güncelleme başarısız.' });
    }
};

// ==========================================
// 5. Silme İşlemi
// ==========================================
export const deleteFeaturedItem = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await prisma.featuredItem.delete({
            where: { id },
        });
        res.json({ message: 'Kayıt silindi.' });
    } catch (error) {
        res.status(500).json({ error: 'Silme işlemi başarısız.' });
    }
};