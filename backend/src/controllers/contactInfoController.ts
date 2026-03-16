import { Request, Response } from 'express';
import prisma from '../lib/prisma';

// ==========================================
// 1. İletişim Bilgilerini Getir
// ==========================================
export const getContactInfo = async (req: Request, res: Response) => {
    try {
        // Sadece ilk kaydı getiriyoruz
        const contact = await prisma.contactInfo.findFirst();

        // Eğer henüz kayıt yoksa null dönebiliriz, frontend bunu kontrol eder
        res.json(contact);
    } catch (error) {
        res.status(500).json({ error: 'İletişim bilgileri çekilemedi.' });
    }
};

// ==========================================
// 2. İletişim Bilgilerini Kaydet veya Güncelle
// ==========================================
export const upsertContactInfo = async (req: Request, res: Response) => {
    const {
        // Adresler
        address_tr, address_en, address_de, address_ru,
        // İletişim
        phone, email, locationUrl,
        isActive
    } = req.body;

    try {
        // Mevcut kayıt var mı?
        const existingContact = await prisma.contactInfo.findFirst();

        let result;

        if (existingContact) {
            // --- GÜNCELLEME ---
            result = await prisma.contactInfo.update({
                where: { id: existingContact.id },
                data: {
                    address_tr, address_en, address_de, address_ru,
                    phone, email, locationUrl,
                    isActive
                },
            });
        } else {
            // --- OLUŞTURMA ---
            result = await prisma.contactInfo.create({
                data: {
                    address_tr, address_en, address_de, address_ru,
                    phone, email, locationUrl,
                    isActive: isActive !== undefined ? isActive : true
                },
            });
        }

        res.json(result);
    } catch (error) {
        console.error("İletişim bilgisi kayıt hatası:", error);
        res.status(500).json({ error: 'İşlem başarısız.' });
    }
};