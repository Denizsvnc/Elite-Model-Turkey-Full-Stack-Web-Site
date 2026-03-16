"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFee = exports.getCurrentFee = void 0;
const prisma_1 = __importDefault(require("../lib/prisma")); // Prisma Client yolun (projene göre ayarlı)
// 1. GÜNCEL FİYATI GETİRME (Her zaman ID: 1'i çeker)
const getCurrentFee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // findFirst yerine findUnique kullanıyoruz, çünkü hedef belli (ID: 1)
        const currentFee = yield prisma_1.default.applicationFee.findUnique({
            where: {
                id: 1,
            },
        });
        // Eğer veritabanı sıfırsa (henüz hiç kayıt yoksa) 0
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
    }
    catch (error) {
        console.error("Fiyat getirme hatası:", error);
        return res.status(500).json({
            success: false,
            error: "Sunucu hatası, fiyat getirilemedi."
        });
    }
});
exports.getCurrentFee = getCurrentFee;
// 2. FİYATI GÜNCELLEME VEYA OLUŞTURMA (Upsert Mantığı)
const updateFee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const updatedFee = yield prisma_1.default.applicationFee.upsert({
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
    }
    catch (error) {
        console.error("Fiyat güncelleme hatası:", error);
        return res.status(500).json({
            success: false,
            error: "Sunucu hatası, fiyat güncellenemedi."
        });
    }
});
exports.updateFee = updateFee;
//# sourceMappingURL=feeController.js.map