import { Request, Response } from 'express';
import prisma from '../lib/prisma';
import * as fs from 'fs';
import * as path from 'path';

// ==========================================
// 1. Tüm Başarı Hero Alanlarını Getir
// ==========================================
export const getSuccessHeroes = async (req: Request, res: Response) => {
    try {
        const heroes = await prisma.successHero.findMany({
            orderBy: {
                createdAt: 'desc', // En son eklenen en üstte
            },
        });
        res.json(heroes);
    } catch (error) {
        res.status(500).json({ error: 'Veriler çekilemedi.' });
    }
};

// ==========================================
// 2. ID'ye Göre Tek Bir Kayıt Getir
// ==========================================
export const getSuccessHeroById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const hero = await prisma.successHero.findUnique({
            where: { id },
        });
        if (!hero) {
            return res.status(404).json({ error: 'Kayıt bulunamadı.' });
        }
        res.json(hero);
    } catch (error) {
        res.status(500).json({ error: 'Veri getirilemedi.' });
    }
};

// ==========================================
// 3. Yeni Başarı Hero Alanı Oluştur (4 Dil Destekli)
// ==========================================
export const createSuccessHero = async (req: Request, res: Response) => {
    const {
        imageUrl,
        isActive,
        // Başlıklar
        title_tr, title_en, title_de, title_ru,
        // Metinler
        text_tr, text_en, text_de, text_ru
    } = req.body;

    try {
        const newHero = await prisma.successHero.create({
            data: {
                imageUrl,
                isActive: isActive !== undefined ? isActive : true,

                // Zorunlu alanlar (Şemada soru işareti yoksa zorunludur)
                title_tr,
                title_en,
                title_de,
                title_ru,

                text_tr,
                text_en,
                text_de,
                text_ru,
            },
        });
        res.status(201).json(newHero);
    } catch (error) {
        console.error("Oluşturma hatası:", error);
        res.status(500).json({ error: 'Kayıt oluşturulamadı. Eksik alanları kontrol edin.' });
    }
};

// ==========================================
// 4. Kaydı Güncelle
// ==========================================
export const updateSuccessHero = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body; // Tüm gelen veriyi al

    try {
        // Eğer imageUrl güncelleniyorsa, eski dosyayı sil
        if (data.imageUrl) {
            const existing = await prisma.successHero.findUnique({ where: { id } });
            if (existing && existing.imageUrl && existing.imageUrl.startsWith('/uploads/')) {
                const oldFilePath = path.join(process.cwd(), existing.imageUrl);
                if (fs.existsSync(oldFilePath)) {
                    fs.unlinkSync(oldFilePath);
                }
            }
        }

        const updatedHero = await prisma.successHero.update({
            where: { id },
            data: data, // Prisma alanları otomatik eşleştirir
        });
        res.json(updatedHero);
    } catch (error) {
        res.status(500).json({ error: 'Güncelleme başarısız.' });
    }
};

// ==========================================
// 5. Kaydı Sil
// ==========================================
export const deleteSuccessHero = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await prisma.successHero.delete({
            where: { id },
        });
        res.json({ message: 'Kayıt başarıyla silindi.' });
    } catch (error) {
        res.status(500).json({ error: 'Silme işlemi başarısız.' });
    }
};