import { Request, Response } from 'express';
import prisma from '../lib/prisma';
import { MailService } from '../Services/MailGender';

// ==========================================
// 1. Yeni Mesaj Gönder (Public - İletişim Formu)
// ==========================================
export const createContactMessage = async (req: Request, res: Response) => {
    try {
        const { fullName, email, subject, message } = req.body;

        if (!fullName || !email || !subject || !message) {
            return res.status(400).json({ error: 'Tüm alanlar zorunludur' });
        }

        // Veritabanına kaydet
        const newMessage = await prisma.contactMessage.create({
            data: {
                fullName,
                email,
                subject,
                message,
            },
        });

        // Mail gönder (async olarak, hata olsa bile kullanıcıya başarılı döner)
        try {
            await MailService.sendContactNotification({
                fullName,
                email,
                subject,
                message,
            });
            console.log('✅ İletişim maili gönderildi');
        } catch (err) {
            console.error('❌ Mail gönderme hatası:', err);
            // Hata olsa bile kullanıcıya başarılı döner
        }

        res.status(201).json(newMessage);
    } catch (error) {
        console.error("Mesaj gönderme hatası:", error);
        res.status(500).json({ error: 'Mesajınız gönderilemedi.' });
    }
};

// ==========================================
// 2. Tüm Mesajları Listele (Admin)
// ==========================================
export const getContactMessages = async (req: Request, res: Response) => {
    try {
        const messages = await prisma.contactMessage.findMany({
            orderBy: {
                createdAt: 'desc', // En son gelen mesaj en üstte
            },
        });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Mesajlar çekilemedi.' });
    }
};

// ==========================================
// 3. Tek Bir Mesajı Oku (Admin - Detay)
// ==========================================
export const getMessageById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const message = await prisma.contactMessage.findUnique({
            where: { id },
        });

        if (!message) {
            return res.status(404).json({ error: 'Mesaj bulunamadı.' });
        }
        res.json(message);
    } catch (error) {
        res.status(500).json({ error: 'Mesaj detayları alınamadı.' });
    }
};

// ==========================================
// 4. Mesajı "Okundu" Olarak İşaretle (Admin)
// ==========================================
export const markMessageAsRead = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { isRead } = req.body; // Frontend'den { "isRead": true } gönderilir

    try {
        const updatedMessage = await prisma.contactMessage.update({
            where: { id },
            data: {
                isRead: isRead,
            },
        });
        res.json(updatedMessage);
    } catch (error) {
        res.status(500).json({ error: 'Durum güncellenemedi.' });
    }
};

// ==========================================
// 5. Mesajı Sil (Admin - Spam vs.)
// ==========================================
export const deleteContactMessage = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await prisma.contactMessage.delete({
            where: { id },
        });
        res.json({ message: 'Mesaj başarıyla silindi.' });
    } catch (error) {
        res.status(500).json({ error: 'Silme işlemi başarısız.' });
    }
};