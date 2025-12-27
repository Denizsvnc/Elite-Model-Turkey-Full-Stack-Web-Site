import { Request, Response } from 'express';
import prisma from '../lib/prisma';
import * as fs from 'fs';
import * as path from 'path';

// ==========================================
// 1. Hakkımızda Sayfası Verisini Getir
// ==========================================
export const getAboutPage = async (req: Request, res: Response) => {
    try {
        // findFirst kullanıyoruz çünkü sadece 1 kayıt olmalı
        const aboutPage = await prisma.aboutPage.findFirst();

        if (!aboutPage) {
            // Eğer henüz sayfa oluşturulmadıysa null dönebiliriz 
            // veya frontend patlamasın diye boş bir obje dönebiliriz.
            return res.status(200).json(null);
        }

        res.json(aboutPage);
    } catch (error) {
        res.status(500).json({ error: 'Veri çekilemedi.' });
    }
};

// ==========================================
// 2. Hakkımızda Sayfasını Kaydet (Varsa Güncelle, Yoksa Oluştur)
// ==========================================
export const upsertAboutPage = async (req: Request, res: Response) => {
    const data = req.body; // Formdan gelen tüm veriler (başlıklar, metinler, resimler)

    try {
        // Önce veritabanında kayıt var mı bakalım
        const existingPage = await prisma.aboutPage.findFirst();

        let result;

        if (existingPage) {
            // --- VARSA GÜNCELLE ---
            // Görseller güncelleniyorsa, eski dosyaları sil
            try {
                if (data.vision_imageUrl && existingPage.vision_imageUrl && data.vision_imageUrl !== existingPage.vision_imageUrl) {
                    if (existingPage.vision_imageUrl.startsWith('/uploads/')) {
                        const oldVisionPath = path.join(process.cwd(), 'src', existingPage.vision_imageUrl);
                        if (fs.existsSync(oldVisionPath)) fs.unlinkSync(oldVisionPath);
                    }
                }
                if (data.mission_imageUrl && existingPage.mission_imageUrl && data.mission_imageUrl !== existingPage.mission_imageUrl) {
                    if (existingPage.mission_imageUrl.startsWith('/uploads/')) {
                        const oldMissionPath = path.join(process.cwd(), 'src', existingPage.mission_imageUrl);
                        if (fs.existsSync(oldMissionPath)) fs.unlinkSync(oldMissionPath);
                    }
                }
            } catch (e) {
                console.error('Eski görsel silme hatası (About):', e);
            }
            result = await prisma.aboutPage.update({
                where: { id: existingPage.id },
                data: {
                    ...data, // Gelen tüm alanları güncelle
                    updatedAt: new Date()
                },
            });
        } else {
            // --- YOKSA OLUŞTUR ---
            // Şema zorunlu alanları için boş değerlerle başlangıç oluştur
            const defaults = {
                intro_title_tr: '',
                intro_title_en: '',
                intro_title_de: '',
                intro_title_ru: '',

                intro_text_tr: '',
                intro_text_en: '',
                intro_text_de: '',
                intro_text_ru: '',

                vision_imageUrl: '',
                vision_title_tr: '',
                vision_title_en: '',
                vision_title_de: '',
                vision_title_ru: '',
                vision_slogan_tr: '',
                vision_slogan_en: '',
                vision_slogan_de: '',
                vision_slogan_ru: '',
                vision_text_tr: '',
                vision_text_en: '',
                vision_text_de: '',
                vision_text_ru: '',

                mission_imageUrl: '',
                mission_title_tr: '',
                mission_title_en: '',
                mission_title_de: '',
                mission_title_ru: '',
                mission_slogan_tr: '',
                mission_slogan_en: '',
                mission_slogan_de: '',
                mission_slogan_ru: '',
                mission_text_tr: '',
                mission_text_en: '',
                mission_text_de: '',
                mission_text_ru: '',
                isActive: true,
            };

            result = await prisma.aboutPage.create({
                data: {
                    ...defaults,
                    ...data, // Gelen tüm alanları kaydet (varsa üzerine yazar)
                },
            });
        }

        res.json(result);
    } catch (error) {
        console.error("Hakkımızda sayfası kayıt hatası:", error);
        res.status(500).json({ error: 'İşlem başarısız. Lütfen tüm zorunlu alanları kontrol edin.' });
    }
};