import { Request, Response } from 'express';
import prisma from '../lib/prisma';
import { ApplicationStatus } from '../../generated/prisma'; // Enum'ı import etmeyi unutma
import { MailService } from '../Services/MailGender';

// ==========================================
// 1. Başvuru Oluştur (Public - Kullanıcı Formu)
// ==========================================
export const createApplication = async (req: Request, res: Response) => {
    const {
        // Kişisel
        fullName, birthDate, gender, nationality,
        // İletişim
        email, phone, city,
        // Fiziksel
        heightCm, chestCm, hipsCm, footCm, waistCm, eyeColor,
        // Görseller
        selfieUrl, profilePhoto, fullBodyPhoto
    } = req.body;

    // Görsel URL'lerini tam olarak oluştur
    const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
    const selfieUrlFull = selfieUrl ? `${baseUrl}${selfieUrl.startsWith('/uploads') ? '' : '/uploads/Applications/selfie/'}${selfieUrl.replace(/^\/uploads\/Applications\/selfie\//, '')}` : '';
    const profilePhotoFull = profilePhoto ? `${baseUrl}${profilePhoto.startsWith('/uploads') ? '' : '/uploads/Applications/profile/'}${profilePhoto.replace(/^\/uploads\/Applications\/profile\//, '')}` : '';
    const fullBodyPhotoFull = fullBodyPhoto ? `${baseUrl}${fullBodyPhoto.startsWith('/uploads') ? '' : '/uploads/Applications/fullbody/'}${fullBodyPhoto.replace(/^\/uploads\/Applications\/fullbody\//, '')}` : '';

    try {
        const newApplication = await prisma.application.create({
            data: {
                fullName,
                birthDate: new Date(birthDate),
                gender,
                nationality,
                email,
                phone,
                city,
                heightCm: Number(heightCm),
                chestCm: Number(chestCm),
                hipsCm: Number(hipsCm),
                footCm: Number(footCm),
                waistCm: Number(waistCm),
                eyeColor,
                selfieUrl: selfieUrlFull,
                profilePhoto: profilePhotoFull,
                fullBodyPhoto: fullBodyPhotoFull,
                status: 'NEW'
            },
        });

        // Mail gönder (async olarak, hata olsa bile kullanıcıya başarılı döner)
        try {
            await MailService.sendApplicationNotification({
                fullName,
                email,
                phone,
                city,
                gender,
                heightCm: Number(heightCm),
                selfieUrl: selfieUrlFull,
                profilePhoto: profilePhotoFull,
                fullBodyPhoto: fullBodyPhotoFull,
            });
            console.log('✅ Başvuru maili gönderildi');
        } catch (err) {
            console.error('❌ Başvuru mail gönderme hatası:', err);
        }

        res.status(201).json(newApplication);
    } catch (error) {
        console.error("Başvuru oluşturma hatası:", error);
        res.status(500).json({ error: 'Başvuru alınamadı. Lütfen bilgileri kontrol edin.' });
    }
};

// ==========================================
// 2. Başvuruları Listele (Admin - Filtreleme Destekli)
// ==========================================
export const getApplications = async (req: Request, res: Response) => {
    // Query parametresi ile filtreleme: /api/applications?status=NEW
    const { status } = req.query;

    try {
        const applications = await prisma.application.findMany({
            where: status ? { status: status as ApplicationStatus } : {}, // Eğer status varsa filtrele
            orderBy: {
                submittedAt: 'desc', // En yeni başvurular en üstte
            },
        });
        res.json(applications);
    } catch (error) {
        res.status(500).json({ error: 'Başvurular çekilemedi.' });
    }
};

// ==========================================
// 3. Tek Başvuru Detayı (Admin)
// ==========================================
export const getApplicationById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const application = await prisma.application.findUnique({
            where: { id },
        });
        if (!application) return res.status(404).json({ error: 'Başvuru bulunamadı.' });
        res.json(application);
    } catch (error) {
        res.status(500).json({ error: 'Hata oluştu.' });
    }
};

// ==========================================
// 4. Başvuru Durumu Güncelle (Admin - Onay/Red/Not)
// ==========================================
export const updateApplicationStatus = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status, adminNotes } = req.body; // Örn: { status: "ACCEPTED", adminNotes: "Arandı, uygun." }

    // Enum kontrolü
    if (status && !Object.values(ApplicationStatus).includes(status)) {
        return res.status(400).json({ error: 'Geçersiz başvuru durumu.' });
    }

    try {
        const updatedApp = await prisma.application.update({
            where: { id },
            data: {
                status,     // Yeni durum
                adminNotes, // Varsa notu güncelle
            },
        });
        res.json(updatedApp);
    } catch (error) {
        res.status(500).json({ error: 'Güncelleme başarısız.' });
    }
};

// ==========================================
// 5. Başvuruyu Sil (Admin)
// ==========================================
export const deleteApplication = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await prisma.application.delete({ where: { id } });
        res.json({ message: 'Başvuru silindi.' });
    } catch (error) {
        res.status(500).json({ error: 'Silme işlemi başarısız.' });
    }
};