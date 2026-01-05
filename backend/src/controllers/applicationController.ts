import { Request, Response } from 'express';
import prisma from '../lib/prisma';
import { ApplicationStatus, Gender } from '../../generated/prisma'; // Enum importu
import { customAlphabet } from 'nanoid';
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
       
    }: {
        fullName: string;
        birthDate: string;
        gender: string;
        nationality: string;
        email: string;
        phone: string;
        city: string;
        heightCm: string | number;
        chestCm: string | number;
        hipsCm: string | number;
        footCm: string | number;
        waistCm: string | number;
        eyeColor: string;
        selfieUrl?: string;
        profilePhoto?: string;
        fullBodyPhoto?: string;
        status?: string;
       
    } = req.body;

    // --- 1. GÖRSEL URL OPTİMİZASYONU ---
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
        // --- 2. TARİH DOĞRULAMASI (KRİTİK DÜZELTME) ---
        // Gelen tarihi işle
        const parsedDate = new Date(birthDate);
        const currentYear = new Date().getFullYear();

        // Tarih geçersizse (Invalid Date) veya Yıl çok uçuksa (Örn: 2100'den büyük veya 1900'den küçük)
        if (isNaN(parsedDate.getTime()) || parsedDate.getFullYear() > currentYear || parsedDate.getFullYear() < 1900) {
            console.warn(`⚠️ Geçersiz Doğum Tarihi Engellendi: ${birthDate}`);
            return res.status(400).json({ 
                error: 'Geçersiz doğum tarihi. Lütfen girdiğiniz yılı kontrol edin.' 
            });
        }


     
      

        const newApplication = await prisma.application.create({
            data: {
                fullName,
                birthDate: parsedDate, // Doğrulanmış tarihi kullan
                gender: gender as Gender,
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
                status: status && Object.values(ApplicationStatus).includes(status as ApplicationStatus) ? status as ApplicationStatus : ApplicationStatus.NEW,
               
                submittedAt: new Date(), // Her zaman backend'de setle
            },
        });

        // --- 4. BİLDİRİM GÖNDERİMİ ---
        // İşlem başarılı olduktan sonra arka planda bildirimi tetikle
        NotificationService.send('application_form', {
            fullName,
            email,
            phone,
            city,
            gender,
            heightCm: Number(heightCm),
            selfieUrl: selfieUrlFull,
        }).catch(err => console.error('❌ Başvuru bildirim hatası:', err));

        // Başarılı yanıt
        res.status(201).json(newApplication);

    } catch (error) {
        console.error("Başvuru oluşturma hatası:", error);
        // Hata detayını güvenli bir şekilde logla ama kullanıcıya genel mesaj dön
        res.status(500).json({ error: 'Başvuru alınamadı. Lütfen bilgileri kontrol edin.' });
    }
};

// ==========================================
// 2. Başvuruları Listele (Admin - Filtreleme Destekli)
// ==========================================
export const getApplications = async (req: Request, res: Response) => {
    const { status, gender, year, month, ageMin, ageMax, page = '1', limit = '20' } = req.query;

    try {
        // Filtreleme için where objesi oluştur
        const where: any = {};
        if (status) {
            where.status = status as ApplicationStatus;
        } else {
            where.status = { in: ['NEW', 'ACCEPTED'] };
        }
        if (gender) where.gender = gender;
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
        const now = new Date();
        const currentYear = now.getFullYear();
        if (ageMin || ageMax) {
            let minDate, maxDate;
            if (ageMin) {
                const min = parseInt(ageMin as string, 10);
                if (!isNaN(min)) {
                    maxDate = new Date(now);
                    maxDate.setFullYear(currentYear - min);
                }
            }
            if (ageMax) {
                const max = parseInt(ageMax as string, 10);
                if (!isNaN(max)) {
                    minDate = new Date(now);
                    minDate.setFullYear(currentYear - max - 1);
                    minDate.setDate(minDate.getDate() + 1);
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

        // Pagination
        const pageNum = Math.max(1, parseInt(page as string, 10) || 1);
        const limitNum = Math.max(1, Math.min(100, parseInt(limit as string, 10) || 20));
        const skip = (pageNum - 1) * limitNum;

        // Toplam kayıt sayısı
        const total = await prisma.application.count({ where });
        const lastPage = Math.ceil(total / limitNum);

        // Sadece hafif metadata alanlarını çek
        const applications = await prisma.application.findMany({
            where,
            orderBy: { submittedAt: 'desc' },
            skip,
            take: limitNum,
            select: {
                id: true,
                fullName: true,
                status: true,
                submittedAt: true,
                birthDate: true,
                gender: true,
                city: true,
                email: true,
                phone: true,
                selfieUrl: true,
                profilePhoto: true,
                fullBodyPhoto: true,
                chestCm: true,
                hipsCm: true,
                footCm: true,
                waistCm: true,
                eyeColor: true,
                nationality: true,
            },
        });

        res.json({
            data: applications,
            meta: {
                total,
                page: pageNum,
                lastPage,
                limit: limitNum
            }
        });
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