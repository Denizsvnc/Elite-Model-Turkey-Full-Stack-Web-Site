import { Request, Response } from 'express';
import prisma from '../lib/prisma';
import { CoverType } from '../../generated/prisma'; // Enum'ı import ettik

// 1. Tüm Bölüm Kapaklarını Getir
export const getCoverImages = async (req: Request, res: Response) => {
    try {
        const covers = await prisma.coverImage.findMany({
            orderBy: { order: 'asc' } // Sıralama isteğe bağlı
        });
        res.json(covers);
    } catch (error) {
        res.status(500).json({ error: 'Kapak görselleri çekilemedi.' });
    }
};

// 2. Kapak Görselini Kaydet (Varsa Güncelle, Yoksa Oluştur)
export const upsertCoverImage = async (req: Request, res: Response) => {
    // Frontend'den gelen veriler
    const { type, imageUrl, isActive, order } = req.body;

    // 1. Gelen "type" geçerli mi kontrol et
    if (!Object.values(CoverType).includes(type)) {
        return res.status(400).json({
            error: 'Geçersiz kapak türü. (WOMEN, MEN, NEW_FACES olmalı)'
        });
    }

    try {
        // UPSERT: Create ve Update'in birleşimi
        const cover = await prisma.coverImage.upsert({
            where: { type: type }, // Bu tipe bak (Örn: WOMEN)

            // Eğer varsa bunları güncelle:
            update: {
                imageUrl,
                isActive,
                order
            },

            // Eğer yoksa bunu oluştur:
            create: {
                type,
                imageUrl,
                isActive: isActive !== undefined ? isActive : true,
                order: order || 1
            }
        });

        res.json(cover);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'İşlem başarısız.' });
    }
};

// 3. Kapak Görselini Sil (Tipe Göre)
export const deleteCoverImage = async (req: Request, res: Response) => {
    const { type } = req.params; // URL'den tipi al (Örn: /api/covers/WOMEN)

    // Enum kontrolü
    if (!Object.values(CoverType).includes(type as CoverType)) {
        return res.status(400).json({ error: 'Geçersiz tür.' });
    }

    try {
        await prisma.coverImage.delete({
            where: { type: type as CoverType }
        });
        res.json({ message: `${type} kapağı silindi.` });
    } catch (error) {
        res.status(404).json({ error: 'Silinecek kayıt bulunamadı.' });
    }
};