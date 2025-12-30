import { Request, Response } from 'express';
import prisma from '../lib/prisma'; // Prisma Client yolun (projene göre ayarlı)

// 1. GÜNCEL FİYATI GETİRME (Her zaman ID: 1'i çeker)
export const getCurrentFee = async (req: Request, res: Response) => {
  try {
    // findFirst yerine findUnique kullanıyoruz, çünkü hedef belli (ID: 1)
    const currentFee = await prisma.applicationFee.findUnique({
      where: {
        id: 1, 
      },
    });

    // Eğer veritabanı sıfırsa (henüz hiç kayıt yoksa) 0 dönelim
    if (!currentFee) {
      return res.status(200).json({
        success: true,
        amount: 0,
        message: "Henüz fiyat belirlenmemiş."
      });
    }

    // Decimal tipini Number'a çevirip gönderiyoruz
    return res.status(200).json({
      success: true,
      amount: currentFee.amount.toNumber(),
      lastUpdated: currentFee.createdAt 
    });

  } catch (error) {
    console.error("Fiyat getirme hatası:", error);
    return res.status(500).json({
      success: false,
      error: "Sunucu hatası, fiyat getirilemedi."
    });
  }
};

// 2. FİYATI GÜNCELLEME VEYA OLUŞTURMA (Upsert Mantığı)
export const updateFee = async (req: Request, res: Response) => {
  try {
    const { amount } = req.body;

    // Validasyon: Gelen veri sayı mı?
    if (amount === undefined || amount === null || isNaN(Number(amount))) {
      return res.status(400).json({
        success: false,
        error: "Lütfen geçerli bir sayısal değer giriniz."
      });
    }

    // UPSERT: Varsa güncelle, yoksa yarat.
    const updatedFee = await prisma.applicationFee.upsert({
      where: {
        id: 1, // KİLİT NOKTA: Hep 1 numaralı ID üzerinde işlem yapıyoruz
      },
      update: {
        amount: Number(amount), // Kayıt varsa sadece fiyatı değiştir
      },
      create: {
        id: 1, // Kayıt yoksa ID'si 1 olan yeni kayıt oluştur
        amount: Number(amount),
      },
    });

    return res.status(200).json({
      success: true,
      message: "Fiyat başarıyla güncellendi.",
      amount: updatedFee.amount.toNumber()
    });

  } catch (error) {
    console.error("Fiyat güncelleme hatası:", error);
    return res.status(500).json({
      success: false,
      error: "Sunucu hatası, fiyat güncellenemedi."
    });
  }
};