import { Request, Response } from "express";
import { validationResult } from "express-validator";
import prisma from "../lib/prisma";
import { NotificationService } from "../Services/NotificationService";
import { MailService } from "../Services/MailService";
import PayTRService from "../Services/PayTRService";
import { ApplicationStatus, Gender, PaymentStatus } from "../generated/prisma";
import dotenv from "dotenv";
dotenv.config();

async function generateUniqueApplicationCode() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (let attempt = 0; attempt < 6; attempt++) {
    let code = "#";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    const exists = await prisma.application.findFirst({
      where: { applicationCode: code },
    });
    if (!exists) return code;
  }
  return `#${Date.now().toString().slice(-6)}`;
}

// ==========================================
// 1. Başvuru Oluştur (Public - Kullanıcı Formu)
// ==========================================
export const createApplication = async (req: Request, res: Response) => {
  // express-validator ile gelen hataları kontrol et
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {
    // Kişisel
    fullName,
    birthDate,
    gender,
    nationality,
    // İletişim
    email,
    phone,
    city,
    // Fiziksel
    heightCm,
    chestCm,
    hipsCm,
    footCm,
    waistCm,
    eyeColor,
    // Görseller
    selfieUrl,
    profilePhoto,
    fullBodyPhoto,
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
    ? selfieUrl.startsWith("/uploads")
      ? selfieUrl
      : `/uploads/Applications/selfie/${selfieUrl}`
    : "";
  const profilePhotoFull = profilePhoto
    ? profilePhoto.startsWith("/uploads")
      ? profilePhoto
      : `/uploads/Applications/profile/${profilePhoto}`
    : "";
  const fullBodyPhotoFull = fullBodyPhoto
    ? fullBodyPhoto.startsWith("/uploads")
      ? fullBodyPhoto
      : `/uploads/Applications/fullbody/${fullBodyPhoto}`
    : "";

  try {
    const applicationCode = await generateUniqueApplicationCode();
    // --- 2. TARİH DOĞRULAMASI (KRİTİK DÜZELTME) ---
    // Gelen tarihi işle
    const parsedDate = new Date(birthDate);
    const currentYear = new Date().getFullYear();

    if (
      isNaN(parsedDate.getTime()) ||
      parsedDate.getFullYear() > currentYear ||
      parsedDate.getFullYear() < 1900
    ) {
      console.warn(`⚠️ Geçersiz Doğum Tarihi Engellendi: ${birthDate}`);
      return res.status(400).json({
        error: "Geçersiz doğum tarihi. Lütfen girdiğiniz yılı kontrol edin.",
      });
    }

    const newApplication = await prisma.application.create({
      data: {
        fullName,
        applicationCode,
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
        status: ApplicationStatus.PENDING_PAYMENT,

        submittedAt: new Date(),
      },
    });

    const feeRecord = await prisma.applicationFee.findFirst({
      orderBy: { createdAt: "desc" },
    });
    const amountStr = feeRecord
      ? feeRecord.amount.toString()
      : process.env.DEFAULT_PRICE || "0";

     const amountKurus = Math.round(parseFloat(amountStr) * 100);

    const backendUrl = process.env.BACKEND_URL || "http://localhost:3005";
 
     const payment = await prisma.payment.create({
      data: {
        applicationId: newApplication.id,
        paytrMerchantOid: `EM_${newApplication.id}_${Date.now()}`,
        status: "PENDING",
        amount: amountStr,
        currency: "TRY",
      },
    });

    await prisma.application.update({
      where: { id: newApplication.id },
      data: { primaryPaymentId: payment.id },
    });

     const paymentLink = await PayTRService.createPaymentLink({
      name: "Model Başvuru Ücreti",
      price: amountKurus,
      callbackUrl: `${backendUrl}/api/payments/callback`,
      callbackId: payment.id, 
    });

    return res.status(201).json({
      message: "Başvuru oluşturuldu, ödemeye yönlendiriliyor.",
      applicationId: newApplication.id,
      applicationCode: newApplication.applicationCode,
      paymentLink,
    });
  } catch (error) {
    console.error("Başvuru hatası:", error);
    res
      .status(500)
      .json({ error: "Başvuru alınamadı. Lütfen bilgileri kontrol edin." });
  }
};


// ==========================================
// 2. Başvuruları Listele (Admin - Filtreleme Destekli)
// ==========================================
export const getApplications = async (req: Request, res: Response) => {
  const {
    status,
    gender,
    year,
    month,
    ageMin,
    ageMax,
    page = "1",
    limit = "20",
  } = req.query;

  try {
    // Filtreleme için where objesi oluştur
    const where: any = {};
    if (status) {
      where.status = status as ApplicationStatus;
    } else {
      where.status = { in: ["NEW", "PENDING_PAYMENT", "REVIEW", "ACCEPTED"] };
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
    const limitNum = Math.max(
      1,
      Math.min(100, parseInt(limit as string, 10) || 20),
    );
    const skip = (pageNum - 1) * limitNum;

    // Toplam kayıt sayısı
    const total = await prisma.application.count({ where });
    const lastPage = Math.ceil(total / limitNum);

    // Sadece hafif metadata alanlarını çek
    const applications = await prisma.application.findMany({
      where,
      orderBy: { submittedAt: "desc" },
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
        heightCm: true,
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
        limit: limitNum,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Başvurular çekilemedi." });
  }
};

// ==========================================
// 3. Tek Başvuru Detayı (Admin)
// ==========================================
export const getApplicationById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const application = await prisma.application.findUnique({
      where: { id: id as string },
    });
    if (!application)
      return res.status(404).json({ error: "Başvuru bulunamadı." });
    res.json(application);
  } catch (error) {
    res.status(500).json({ error: "Hata oluştu." });
  }
};

// ==========================================
// 4. Başvuru Durumu Güncelle (Admin - Onay/Red/Not)
// ==========================================
export const updateApplicationStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status, adminNotes } = req.body;

  if (status && !Object.values(ApplicationStatus).includes(status)) {
    return res.status(400).json({ error: "Geçersiz başvuru durumu." });
  }

  try {
    const updatedApp = await prisma.application.update({
      where: { id: id as string },
      data: {
        status,
        adminNotes,
      },
    });
    res.json(updatedApp);
  } catch (error) {
    res.status(500).json({ error: "Güncelleme başarısız." });
  }
};

// ==========================================
// 5. Başvuruyu Sil (Admin)
// ==========================================
export const deleteApplication = async (req: Request, res: Response) => {
  const { id } = req.params;
  const fs = require("fs");
  const path = require("path");
  try {
    // Önce başvuru kaydını bul
    const application = await prisma.application.findUnique({
      where: { id: id as string },
    });
    if (!application) {
      return res.status(404).json({ error: "Başvuru bulunamadı." });
    }

    // Silinecek dosya yolları
    const files = [
      application.selfieUrl,
      application.profilePhoto,
      application.fullBodyPhoto,
    ]
      .filter(Boolean)
      .filter((filePath) => filePath.startsWith("/uploads"));

    for (const filePath of files) {
      const absPath = path.join(process.cwd(), "src", filePath);
      fs.unlink(absPath, (err: any) => {
        if (err) {
          console.error("Görsel silinemedi:", absPath, err.message);
        }
      });
    }
    await prisma.payment.deleteMany({ where: { applicationId: id as string } });

    await prisma.application.delete({ where: { id: id as string } });
    res.json({ message: "Başvuru silindi." });
  } catch (error) {
    res.status(500).json({ error: "Silme işlemi başarısız." });
  }
};

export const sendVerificationEmail = async (req: Request, res: Response) => {
  try {
    if (!req.body) {
      return res.status(400).json({ error: "İstek gövdesi (body) eksik." });
    }

    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: "Email adresi gerekli." });
    }

    const verificationCode = Math.floor(
      100000 + Math.random() * 900000,
    ).toString();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    await prisma.verificationCode.upsert({
      where: { email },
      update: {
        code: verificationCode,
        expiresAt: expiresAt,
      },
      create: {
        email,
        code: verificationCode,
        expiresAt: expiresAt,
      },
    });

    await MailService.sendVerificationEmail(email, parseInt(verificationCode));

    res.json({ message: "Doğrulama e-postası gönderildi." });
  } catch (error) {
    console.error("Doğrulama e-postası gönderim hatası:", error);
    res.status(500).json({ error: "E-posta gönderilemedi." });
  }
};

export const verifyCode = async (req: Request, res: Response) => {
  try {
    const { email, code } = req.body;

    if (!email || !code) {
      return res.status(400).json({ error: "E-posta ve kod gereklidir." });
    }

    const record = await prisma.verificationCode.findUnique({
      where: { email },
    });

    if (!record) {
      return res.status(400).json({
        error: "Doğrulama kaydı bulunamadı. Lütfen tekrar kod isteyin.",
      });
    }

    if (new Date() > record.expiresAt) {
      return res.status(400).json({ error: "Kodun süresi dolmuş." });
    }

    if (record.code !== code) {
      return res.status(400).json({ error: "Doğrulama kodu hatalı." });
    }

    await prisma.verificationCode.delete({
      where: { email },
    });

    res.json({ success: true, message: "E-posta başarıyla doğrulandı." });
  } catch (error) {
    console.error("Kod doğrulama hatası:", error);
    res.status(500).json({ error: "Doğrulama sırasında hata oluştu." });
  }
};
