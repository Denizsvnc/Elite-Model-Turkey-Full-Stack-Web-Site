// src/controllers/homeSliderController.ts
import { Request, Response } from 'express';
import prisma from '../lib/prisma';
import fs from 'fs';
import path from 'path';

// ==================================================================
// BÖLÜM 1: SLIDER GRUP YÖNETİMİ (Kapsayıcı Kutular)
// ==================================================================

/**
 * 1. Tüm Slider Gruplarını ve içindeki Görselleri getirir.
 */
export const getHomeSliders = async (req: Request, res: Response) => {
    try {
        const sliders = await prisma.homeSlider.findMany({
            include: {
                items: {
                    orderBy: { order: 'asc' }, // Görselleri sıraya diz
                },
            },
            orderBy: { id: 'asc' },
        });
        res.json(sliders);
    } catch (error) {
        console.error("Slider getirme hatası:", error);
        res.status(500).json({ error: 'Slider verileri çekilemedi.' });
    }
};

/**
 * 2. ID'ye göre tek bir Slider Grubu getirir.
 */
export const getHomeSliderById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const slider = await prisma.homeSlider.findUnique({
            where: { id: Number(id) },
            include: {
                items: {
                    orderBy: { order: 'asc' },
                },
            },
        });

        if (!slider) {
            return res.status(404).json({ error: 'Slider grubu bulunamadı.' });
        }

        res.json(slider);
    } catch (error) {
        res.status(500).json({ error: 'Slider getirilemedi.' });
    }
};

/**
 * 3. Yeni bir Slider Grubu oluşturur (Örn: "Ana Sayfa", "Kampanyalar").
 */
export const createHomeSlider = async (req: Request, res: Response) => {
    const { key, name } = req.body;

    try {
        const existing = await prisma.homeSlider.findUnique({ where: { key } });
        if (existing) {
            return res.status(400).json({ error: 'Bu KEY değerine sahip bir slider zaten var.' });
        }

        const newSlider = await prisma.homeSlider.create({
            data: {
                key,
                name,
                isActive: true,
            },
        });
        res.status(201).json(newSlider);
    } catch (error) {
        res.status(500).json({ error: 'Slider grubu oluşturulamadı.' });
    }
};

/**
 * 4. Slider Grubunu Güncelle (İsim, Durum, Key).
 */
export const updateHomeSlider = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, isActive, key } = req.body;

    try {
        const updatedSlider = await prisma.homeSlider.update({
            where: { id: Number(id) },
            data: { name, isActive, key },
        });
        res.json(updatedSlider);
    } catch (error) {
        res.status(500).json({ error: 'Grup güncellenemedi.' });
    }
};


// ==================================================================
// BÖLÜM 2: SLAYT (GÖRSEL) YÖNETİMİ - Tek Tek Ekleme/Silme
// ==================================================================

/**
 * 5. Slider Grubunun içine YENİ BİR GÖRSEL ekler.
 * Video alanları çıkarılmıştır. Sadece Resim destekler.
 */
export const addSliderItem = async (req: Request, res: Response) => {
    const {
        homeSliderId,
        sliderKey,
        sliderName,
        imageUrl, // Sadece resim URL'si alıyoruz
        order,
        linkUrl,
        isActive,

        // Çoklu Dil Başlıklar
        title_tr, title_en, title_de, title_ru,

        // Çoklu Dil Açıklamalar
        description_tr, description_en, description_de, description_ru
    } = req.body;

    let targetSliderId: number | null = null;

    try {
        if (homeSliderId) {
            targetSliderId = Number(homeSliderId);
        } else if (sliderKey) {
            const key = String(sliderKey);
            let slider = await prisma.homeSlider.findUnique({ where: { key } });
            if (!slider) {
                // Otomatik oluştur: tek bir hero slider kullanımı için kolaylık
                slider = await prisma.homeSlider.create({
                    data: {
                        key,
                        name: (typeof sliderName === 'string' && sliderName.trim().length > 0) ? sliderName : key,
                        isActive: true,
                    }
                });
            }
            targetSliderId = slider.id;
        } else {
            return res.status(400).json({ error: 'homeSliderId veya sliderKey gönderilmelidir.' });
        }

        const newItem = await prisma.homeSliderItem.create({
            data: {
                homeSliderId: targetSliderId,
                imageUrl: imageUrl, // Resim URL'si
                order: order || 1,
                linkUrl: linkUrl || null,
                isActive: isActive !== undefined ? isActive : true,

                // Diller
                title_tr, title_en, title_de, title_ru,
                description_tr, description_en, description_de, description_ru
            },
        });
        res.status(201).json(newItem);
    } catch (error) {
        console.error("Görsel ekleme hatası:", error);
        res.status(500).json({ error: 'Görsel eklenemedi.' });
    }
};

/**
 * 6. Tek Bir Görseli siler.
 */
export const deleteSliderItem = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        // First fetch to get imageUrl for file removal
        const existing = await prisma.homeSliderItem.findUnique({ where: { id: Number(id) } });
        if (!existing) {
            return res.status(404).json({ error: 'Öğe bulunamadı.' });
        }

        await prisma.homeSliderItem.delete({ where: { id: Number(id) } });

        // Remove local file if stored under /uploads
        const url = existing.imageUrl || '';
        if (url.startsWith('/uploads/')) {
            const rel = url.replace(/^\/uploads\//, '');
            const filePath = path.resolve(process.cwd(), 'src/uploads', rel);
            try {
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
            } catch (e) {
                console.warn('Dosya silinemedi:', filePath, e);
            }
        }

        res.json({ message: 'Görsel başarıyla silindi.' });
    } catch (error) {
        res.status(500).json({ error: 'Silme işlemi başarısız.' });
    }
};

/**
 * 7. Tek Bir Görseli Güncelle (Sıra, Resim, Başlıklar vb.)
 */
export const updateSliderItem = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;

    try {
        const updatedItem = await prisma.homeSliderItem.update({
            where: { id: Number(id) },
            data: data,
        });
        res.json(updatedItem);
    } catch (error) {
        console.error("Güncelleme hatası:", error);
        res.status(500).json({ error: 'Görsel güncellenemedi.' });
    }
};