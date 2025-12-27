import { Request, Response } from 'express';
import prisma from '../lib/prisma';
import * as fs from 'fs';
import * as path from 'path';

// ==========================================
// 1. Tüm Haberleri Getir (Yeniden Eskiye)
// ==========================================
export const getAllNews = async (req: Request, res: Response) => {
    try {
        const newsList = await prisma.news.findMany({
            orderBy: {
                publishedAt: 'desc', // En yeni haber en üstte
            },
        });
        res.json(newsList);
    } catch (error) {
        res.status(500).json({ error: 'Haberler çekilemedi.' });
    }
};

// ==========================================
// 2. ID ile Tek Haber Getir
// ==========================================
export const getNewsById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const newsItem = await prisma.news.findUnique({
            where: { id },
        });

        if (!newsItem) {
            return res.status(404).json({ error: 'Haber bulunamadı.' });
        }
        res.json(newsItem);
    } catch (error) {
        res.status(500).json({ error: 'Haber getirilemedi.' });
    }
};

// ==========================================
// 3. Yeni Haber Ekle (4 Dil + Tarih)
// ==========================================
export const createNews = async (req: Request, res: Response) => {
    const {
        imageUrl,
        category,
        category_tr, category_en, category_de, category_ru,
        galleryUrls,
        publishedAt, // Frontend'den "2025-12-25" gibi string gelir
        isActive,

        // Başlıklar
        title_tr, title_en, title_de, title_ru,

        // Kısa Açıklamalar
        description_tr, description_en, description_de, description_ru,

        // İçerikler
        content_tr, content_en, content_de, content_ru
    } = req.body;

    try {
        const newNews = await prisma.news.create({
            data: {
                imageUrl,
                category: category || null,
                category_tr: category_tr || null,
                category_en: category_en || null,
                category_de: category_de || null,
                category_ru: category_ru || null,
                galleryUrls: Array.isArray(galleryUrls) ? galleryUrls : [],
                // String gelen tarihi Date objesine çeviriyoruz:
                publishedAt: new Date(publishedAt),
                isActive: isActive !== undefined ? isActive : true,

                // Zorunlu Dil Alanları
                title_tr, title_en, title_de, title_ru,
                description_tr: description_tr || null,
                description_en: description_en || null,
                description_de: description_de || null,
                description_ru: description_ru || null,
                content_tr, content_en, content_de, content_ru
            },
        });
        res.status(201).json(newNews);
    } catch (error) {
        console.error("Haber ekleme hatası:", error);
        res.status(500).json({ error: 'Haber oluşturulamadı. Eksik alanları kontrol et.' });
    }
};

// ==========================================
// 4. Haberi Güncelle
// ==========================================
export const updateNews = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;

    // Eğer tarih güncelleniyorsa, onu Date formatına çevirmemiz gerekebilir
    // Ancak Prisma genelde ISO stringleri otomatik tanır. 
    // Garanti olsun istersen burada kontrol edebilirsin.

    try {
        // Eğer imageUrl güncelleniyorsa, eski dosyayı sil
        if (data.imageUrl) {
            const existing = await prisma.news.findUnique({ where: { id } });
            if (existing && existing.imageUrl && existing.imageUrl.startsWith('/uploads/')) {
                const oldFilePath = path.join(process.cwd(), 'src', existing.imageUrl);
                if (fs.existsSync(oldFilePath)) {
                    fs.unlinkSync(oldFilePath);
                }
            }
        }

        // Normalize
        const normalized: any = { ...data };
        if (typeof data.publishedAt === 'string') {
            normalized.publishedAt = new Date(data.publishedAt);
        }
        if (Array.isArray(data.galleryUrls)) {
            normalized.galleryUrls = data.galleryUrls;
        } else {
            delete normalized.galleryUrls; // undefined bırak
        }
        // Boş stringleri null'a çek (kategori çevirileri)
        ['category_tr','category_en','category_de','category_ru','category'].forEach((key) => {
            if (normalized[key] === '') normalized[key] = null;
        });

        const updatedNews = await prisma.news.update({
            where: { id },
            data: normalized,
        });
        res.json(updatedNews);
    } catch (error) {
        res.status(500).json({ error: 'Güncelleme başarısız.' });
    }
};

// ==========================================
// 5. Haberi Sil
// ==========================================
export const deleteNews = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const existing = await prisma.news.findUnique({ where: { id } });
        if (existing) {
            // Ana görseli sil
            if (existing.imageUrl && existing.imageUrl.startsWith('/uploads/')) {
                const oldFilePath = path.join(process.cwd(), 'src', existing.imageUrl);
                if (fs.existsSync(oldFilePath)) {
                    fs.unlinkSync(oldFilePath);
                }
            }

            // Galeri görsellerini sil
            if (Array.isArray(existing.galleryUrls)) {
                existing.galleryUrls.forEach((url) => {
                    if (url && typeof url === 'string' && url.startsWith('/uploads/')) {
                        const filePath = path.join(process.cwd(), 'src', url);
                        if (fs.existsSync(filePath)) {
                            fs.unlinkSync(filePath);
                        }
                    }
                });
            }
        }

        await prisma.news.delete({ where: { id } });
        res.json({ message: 'Haber başarıyla silindi.' });
    } catch (error) {
        res.status(500).json({ error: 'Silme işlemi başarısız.' });
    }
};