import { Request, Response } from 'express';
import prisma from '../lib/prisma';

// ==========================================
// 1. Tüm Soru-Cevapları Getir (Sıralı)
// ==========================================
export const getFAQs = async (req: Request, res: Response) => {
    try {
        const faqs = await prisma.fAQ.findMany({
            orderBy: {
                order: 'asc', // 1, 2, 3... sırasına göre getir
            },
        });
        res.json(faqs);
    } catch (error) {
        res.status(500).json({ error: 'Veriler çekilemedi.' });
    }
};

// ==========================================
// 2. ID ile Tek Bir Soru Getir
// ==========================================
export const getFAQById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const faq = await prisma.fAQ.findUnique({
            where: { id },
        });
        if (!faq) return res.status(404).json({ error: 'Kayıt bulunamadı.' });
        res.json(faq);
    } catch (error) {
        res.status(500).json({ error: 'Hata oluştu.' });
    }
};

// ==========================================
// 3. Yeni Soru Ekle (4 Dil Destekli)
// ==========================================
export const createFAQ = async (req: Request, res: Response) => {
    const {
        order,
        isActive,

        // Sorular (4 Dil)
        question_tr, question_en, question_de, question_ru,

        // Cevaplar (4 Dil)
        answer_tr, answer_en, answer_de, answer_ru
    } = req.body;

    try {
        const newFAQ = await prisma.fAQ.create({
            data: {
                order: order || 1, // Gönderilmezse 1 olsun
                isActive: isActive !== undefined ? isActive : true,

                // Zorunlu alanlar
                question_tr, question_en, question_de, question_ru,
                answer_tr, answer_en, answer_de, answer_ru
            },
        });
        res.status(201).json(newFAQ);
    } catch (error) {
        console.error("FAQ Ekleme Hatası:", error);
        res.status(500).json({ error: 'Soru oluşturulamadı. Eksik alanları kontrol et.' });
    }
};

// ==========================================
// 4. Soruyu Güncelle
// ==========================================
export const updateFAQ = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body; // Tüm gelen veriyi al

    try {
        const updatedFAQ = await prisma.fAQ.update({
            where: { id },
            data: data,
        });
        res.json(updatedFAQ);
    } catch (error) {
        res.status(500).json({ error: 'Güncelleme başarısız.' });
    }
};

// ==========================================
// 5. Soruyu Sil
// ==========================================
export const deleteFAQ = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await prisma.fAQ.delete({
            where: { id },
        });
        res.json({ message: 'Soru başarıyla silindi.' });
    } catch (error) {
        res.status(500).json({ error: 'Silme işlemi başarısız.' });
    }
};