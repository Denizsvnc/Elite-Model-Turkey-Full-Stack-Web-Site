import { Request, Response } from 'express';
import prisma from '../lib/prisma';
import * as fs from 'fs';
import * as path from 'path';

// ==========================================
// 1. Tüm Başarılı Model Yorumlarını Getir
// ==========================================
export const getSuccessModelReviews = async (req: Request, res: Response) => {
    try {
        const reviews = await prisma.successModelReview.findMany({
            where: { isActive: true },
            orderBy: { createdAt: 'desc' }
        });
        res.json(reviews);
    } catch (error) {
        console.error('Model yorumları getirme hatası:', error);
        res.status(500).json({ error: 'Model yorumları çekilemedi.' });
    }
};

// ==========================================
// 2. ID'ye Göre Tek Bir Yorum Getir
// ==========================================
export const getSuccessModelReviewById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const review = await prisma.successModelReview.findUnique({
            where: { id }
        });

        if (!review) {
            return res.status(404).json({ error: 'Model yorumu bulunamadı.' });
        }

        res.json(review);
    } catch (error) {
        res.status(500).json({ error: 'Model yorumu getirilemedi.' });
    }
};

// ==========================================
// 3. Yeni Model Yorumu Oluştur
// ==========================================
export const createSuccessModelReview = async (req: Request, res: Response) => {
    const {
        imageUrl,
        title_tr, title_en, title_de, title_ru,
        text_tr, text_en, text_de, text_ru,
        isActive
    } = req.body;

    try {
        const newReview = await prisma.successModelReview.create({
            data: {
                imageUrl,
                title_tr,
                title_en,
                title_de,
                title_ru,
                text_tr,
                text_en,
                text_de,
                text_ru,
                isActive: isActive !== undefined ? isActive : true
            }
        });

        res.status(201).json(newReview);
    } catch (error) {
        console.error('Model yorumu oluşturma hatası:', error);
        res.status(500).json({ error: 'Model yorumu oluşturulamadı.' });
    }
};

// ==========================================
// 4. Model Yorumu Güncelle
// ==========================================
export const updateSuccessModelReview = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;

    try {
        // Eğer imageUrl güncelleniyorsa, eski dosyayı sil
        if (data.imageUrl) {
            const existing = await prisma.successModelReview.findUnique({ where: { id } });
            if (existing && existing.imageUrl && existing.imageUrl.startsWith('/uploads/')) {
                const oldFilePath = path.join(process.cwd(), existing.imageUrl);
                if (fs.existsSync(oldFilePath)) {
                    fs.unlinkSync(oldFilePath);
                }
            }
        }

        const updatedReview = await prisma.successModelReview.update({
            where: { id },
            data
        });

        res.json(updatedReview);
    } catch (error) {
        console.error('Model yorumu güncelleme hatası:', error);
        res.status(500).json({ error: 'Model yorumu güncellenemedi.' });
    }
};

// ==========================================
// 5. Model Yorumu Sil
// ==========================================
export const deleteSuccessModelReview = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await prisma.successModelReview.delete({
            where: { id }
        });

        res.json({ message: 'Model yorumu başarıyla silindi.' });
    } catch (error) {
        console.error('Model yorumu silme hatası:', error);
        res.status(500).json({ error: 'Model yorumu silinemedi.' });
    }
};
