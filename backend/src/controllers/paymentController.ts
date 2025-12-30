// backend/src/controllers/paymentController.ts

import { Request, Response } from 'express';
import prisma from '../lib/prisma'; // Zaten oluşturulmuş prisma instance'ını buradan alıyoruz

// YARDIMCI FONKSİYON
const generateRandomString = (): string => {
  // I, O, 0, 1 gibi karıştırılmaya müsait karakterleri çıkardım
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let result = "";
  for (let i = 0; i < 4; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

// API ENDPOINT
export const getUniquePaymentKey = async (req: Request, res: Response) => {
  try {
    let isUnique = false;
    let newKey = "";

    // Benzersiz olana kadar döngüye gir (Genelde ilk seferde bulur)
    while (!isUnique) {
      newKey = generateRandomString();
      
      // Veritabanında varmi
      const existing = await prisma.application.findUnique({
        where: { paymentKey: newKey }
      });

      // yoksa 
      if (!existing) {
        isUnique = true;
      }
    }

    // uniq kodu frontend'e gonder
    return res.status(200).json({ code: newKey });

  } catch (error) {
    console.error("Kod üretme hatası:", error);
    return res.status(500).json({ error: "Kod üretilemedi" });
  }
};