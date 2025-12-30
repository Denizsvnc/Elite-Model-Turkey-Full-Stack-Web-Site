import { Request, Response } from 'express';
import prisma from '../lib/prisma';
import { ApplicationStatus } from '../../generated/prisma'; // Enum importu
import { NotificationService } from '../Services/NotificationService'; // Orkestra şefi importu

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
        selfieUrl, profilePhoto, fullBodyPhoto,
        // Statü (opsiyonel)
        status,
        paymentKey
    } = req.body;

    // Görsel URL'lerini optimize et: Her zaman sadece /uploads/... formatında sakla
    const selfieUrlFull = selfieUrl
        ? (selfieUrl.startsWith('/uploads') ? selfieUrl : `/uploads/Applications/selfie/${selfieUrl}`)
        : '';
    const profilePhotoFull = profilePhoto
        ? (profilePhoto.startsWith('/uploads') ? profilePhoto : `/uploads/Applications/profile/${profilePhoto}`)
        : '';
    const fullBodyPhotoFull = fullBodyPhoto
        ? (fullBodyPhoto.startsWith('/uploads') ? fullBodyPhoto : `/uploads/Applications/fullbody/${fullBodyPhoto}`)
        : '';

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
                status: status && Object.values(ApplicationStatus).includes(status) ? status : 'NEW',
                paymentKey: paymentKey || undefined
            },
        });

        // BİLDİRİM ORKESTRASYONU (Panel ayarlarına göre Mail, Telegram ve Whatsapp tetiklenir)
        NotificationService.send('application_form', {
            fullName,
            email,
            phone,
            city,
            gender,
            heightCm: Number(heightCm),
            selfieUrl: selfieUrlFull, // Telegram fotoğraflı mesaj için
        }).catch(err => console.error('❌ Başvuru bildirim hatası:', err));

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
    const { status, gender, year, month, ageMin, ageMax } = req.query;

    try {
        // Filtreleme için where objesi oluştur
        const where: any = {};
        if (status) {
            where.status = status as ApplicationStatus;
        } else {
            // Eğer status parametresi yoksa sadece NEW ve ACCEPTED başvuruları getir
            where.status = { in: ['NEW', 'ACCEPTED'] };
        }
        if (gender) where.gender = gender;

        // Yıl ve ay ile doğum tarihi aralığı
        if (year) {
            const y = parseInt(year as string, 10);
            if (!isNaN(y)) {
                let start = new Date(y, 0, 1);
                let end = new Date(y + 1, 0, 1);
                if (month) {
                    const m = parseInt(month as string, 10) - 1;
                    if (!isNaN(m) && m >= 0 && m < 12) {
                        start = new Date(y, m, 1);
                        end = new Date(y, m + 1, 1);
                    }
                }
                where.birthDate = { gte: start, lt: end };
            }
        }

        // Yaş aralığı (ageMin, ageMax)
        // Şu anki tarih - doğum tarihi = yaş
        const now = new Date();
        const currentYear = now.getFullYear();
        if (ageMin || ageMax) {
            let minDate, maxDate;
            if (ageMin) {
                const min = parseInt(ageMin as string, 10);
                if (!isNaN(min)) {
                    // min yaşındaki en genç kişi: doğum tarihi <= bugün - min yıl
                    maxDate = new Date(now);
                    maxDate.setFullYear(currentYear - min);
                }
            }
            if (ageMax) {
                const max = parseInt(ageMax as string, 10);
                if (!isNaN(max)) {
                    // max yaşındaki en yaşlı kişi: doğum tarihi >= bugün - max yıl - 1
                    minDate = new Date(now);
                    minDate.setFullYear(currentYear - max - 1);
                    minDate.setDate(minDate.getDate() + 1); // bir gün ileri
                }
            }
            if (minDate && maxDate) {
                where.birthDate = { gte: minDate, lte: maxDate };
            } else if (minDate) {
                where.birthDate = { gte: minDate };
            } else if (maxDate) {
                where.birthDate = { lte: maxDate };
            }
        }

        const applications = await prisma.application.findMany({
            where,
            orderBy: {
                submittedAt: 'desc',
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
    const { status, adminNotes } = req.body;

    if (status && !Object.values(ApplicationStatus).includes(status)) {
        return res.status(400).json({ error: 'Geçersiz başvuru durumu.' });
    }

    try {
        const updatedApp = await prisma.application.update({
            where: { id },
            data: {
                status,
                adminNotes,
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