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
exports.verifyCode = exports.sendVerificationEmail = exports.deleteApplication = exports.updateApplicationStatus = exports.getApplicationById = exports.getApplications = exports.createApplication = void 0;
const express_validator_1 = require("express-validator");
const prisma_1 = __importDefault(require("../lib/prisma"));
const MailService_1 = require("../Services/MailService");
const IyzicoService_1 = __importDefault(require("../Services/IyzicoService"));
const prisma_2 = require("../generated/prisma");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function generateUniqueApplicationCode() {
    return __awaiter(this, void 0, void 0, function* () {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (let attempt = 0; attempt < 6; attempt++) {
            let code = "#";
            for (let i = 0; i < 6; i++) {
                code += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            const exists = yield prisma_1.default.application.findFirst({
                where: { applicationCode: code },
            });
            if (!exists)
                return code;
        }
        return `#${Date.now().toString().slice(-6)}`;
    });
}
// ==========================================
// 1. Başvuru Oluştur (Public - Kullanıcı Formu)
// ==========================================
const createApplication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // express-validator ile gelen hataları kontrol et
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
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
    status, } = req.body;
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
        const applicationCode = yield generateUniqueApplicationCode();
        // --- 2. TARİH DOĞRULAMASI (KRİTİK DÜZELTME) ---
        // Gelen tarihi işle
        const parsedDate = new Date(birthDate);
        const currentYear = new Date().getFullYear();
        if (isNaN(parsedDate.getTime()) ||
            parsedDate.getFullYear() > currentYear ||
            parsedDate.getFullYear() < 1900) {
            console.warn(`⚠️ Geçersiz Doğum Tarihi Engellendi: ${birthDate}`);
            return res.status(400).json({
                error: "Geçersiz doğum tarihi. Lütfen girdiğiniz yılı kontrol edin.",
            });
        }
        const newApplication = yield prisma_1.default.application.create({
            data: {
                fullName,
                applicationCode,
                birthDate: parsedDate, // Doğrulanmış tarihi kullan
                gender: gender,
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
                status: prisma_2.ApplicationStatus.PENDING_PAYMENT,
                submittedAt: new Date(),
            },
        });
        const feeRecord = yield prisma_1.default.applicationFee.findFirst({
            orderBy: { createdAt: "desc" },
        });
        const amount = feeRecord
            ? feeRecord.amount.toString()
            : process.env.DEFAULT_PRICE || "0";
        const checkoutData = {
            conversationId: `app_${newApplication.id}_${Date.now()}`,
            price: amount,
            paidPrice: amount,
            basketId: `B_${newApplication.id}`,
            paymentGroup: "PRODUCT",
            callbackUrl: `${process.env.BACKEND_URL || "http://localhost:3005"}/api/payments/callback`,
            buyer: {
                id: newApplication.id,
                name: fullName.split(" ")[0] || "Unknown",
                surname: fullName.split(" ").slice(1).join(" ") || "Unknown",
                gsmNumber: phone,
                email: email,
                identityNumber: "11111111111",
                registrationAddress: city,
                ip: req.ip || "127.0.0.1",
                city: city,
                country: "Turkey",
            },
            shippingAddress: {
                contactName: fullName,
                city: city,
                country: "Turkey",
                address: city,
            },
            billingAddress: {
                contactName: fullName,
                city: city,
                country: "Turkey",
                address: city,
            },
            basketItems: [
                {
                    id: "FEE_01",
                    name: "Model Başvuru Ücreti",
                    category1: "Başvuru",
                    itemType: "VIRTUAL",
                    price: amount,
                },
            ],
        };
        const iyzicoResult = yield IyzicoService_1.default.initializeCheckoutForm(checkoutData);
        if (iyzicoResult.status !== "success") {
            throw new Error(iyzicoResult.errorMessage || "Iyzico initialization failed");
        }
        const payment = yield prisma_1.default.payment.create({
            data: {
                applicationId: newApplication.id,
                iyzicoToken: iyzicoResult.token,
                status: "PENDING",
                amount: amount,
                currency: "TRY",
            },
        });
        yield prisma_1.default.application.update({
            where: { id: newApplication.id },
            data: { primaryPaymentId: payment.id },
        });
        return res.status(201).json({
            message: "Başvuru oluşturuldu, ödemeye yönlendiriliyor.",
            applicationId: newApplication.id,
            applicationCode: newApplication.applicationCode,
            checkoutFormContent: iyzicoResult.checkoutFormContent,
            paymentPageUrl: iyzicoResult.paymentPageUrl,
            token: iyzicoResult.token,
        });
    }
    catch (error) {
        console.error("Başvuru oluşturma hatası:", error);
        res
            .status(500)
            .json({ error: "Başvuru alınamadı. Lütfen bilgileri kontrol edin." });
    }
});
exports.createApplication = createApplication;
// ==========================================
// 2. Başvuruları Listele (Admin - Filtreleme Destekli)
// ==========================================
const getApplications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { status, gender, year, month, ageMin, ageMax, page = "1", limit = "20", } = req.query;
    try {
        // Filtreleme için where objesi oluştur
        const where = {};
        if (status) {
            where.status = status;
        }
        else {
            where.status = { in: ["NEW", "PENDING_PAYMENT", "REVIEW", "ACCEPTED"] };
        }
        if (gender)
            where.gender = gender;
        if (year) {
            const y = parseInt(year, 10);
            if (!isNaN(y)) {
                let start = new Date(y, 0, 1);
                let end = new Date(y + 1, 0, 1);
                if (month) {
                    const m = parseInt(month, 10) - 1;
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
                const min = parseInt(ageMin, 10);
                if (!isNaN(min)) {
                    maxDate = new Date(now);
                    maxDate.setFullYear(currentYear - min);
                }
            }
            if (ageMax) {
                const max = parseInt(ageMax, 10);
                if (!isNaN(max)) {
                    minDate = new Date(now);
                    minDate.setFullYear(currentYear - max - 1);
                    minDate.setDate(minDate.getDate() + 1);
                }
            }
            if (minDate && maxDate) {
                where.birthDate = { gte: minDate, lte: maxDate };
            }
            else if (minDate) {
                where.birthDate = { gte: minDate };
            }
            else if (maxDate) {
                where.birthDate = { lte: maxDate };
            }
        }
        // Pagination
        const pageNum = Math.max(1, parseInt(page, 10) || 1);
        const limitNum = Math.max(1, Math.min(100, parseInt(limit, 10) || 20));
        const skip = (pageNum - 1) * limitNum;
        // Toplam kayıt sayısı
        const total = yield prisma_1.default.application.count({ where });
        const lastPage = Math.ceil(total / limitNum);
        // Sadece hafif metadata alanlarını çek
        const applications = yield prisma_1.default.application.findMany({
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
    }
    catch (error) {
        res.status(500).json({ error: "Başvurular çekilemedi." });
    }
});
exports.getApplications = getApplications;
// ==========================================
// 3. Tek Başvuru Detayı (Admin)
// ==========================================
const getApplicationById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const application = yield prisma_1.default.application.findUnique({
            where: { id: id },
        });
        if (!application)
            return res.status(404).json({ error: "Başvuru bulunamadı." });
        res.json(application);
    }
    catch (error) {
        res.status(500).json({ error: "Hata oluştu." });
    }
});
exports.getApplicationById = getApplicationById;
// ==========================================
// 4. Başvuru Durumu Güncelle (Admin - Onay/Red/Not)
// ==========================================
const updateApplicationStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { status, adminNotes } = req.body;
    if (status && !Object.values(prisma_2.ApplicationStatus).includes(status)) {
        return res.status(400).json({ error: "Geçersiz başvuru durumu." });
    }
    try {
        const updatedApp = yield prisma_1.default.application.update({
            where: { id: id },
            data: {
                status,
                adminNotes,
            },
        });
        res.json(updatedApp);
    }
    catch (error) {
        res.status(500).json({ error: "Güncelleme başarısız." });
    }
});
exports.updateApplicationStatus = updateApplicationStatus;
// ==========================================
// 5. Başvuruyu Sil (Admin)
// ==========================================
const deleteApplication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const fs = require("fs");
    const path = require("path");
    try {
        // Önce başvuru kaydını bul
        const application = yield prisma_1.default.application.findUnique({
            where: { id: id },
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
            fs.unlink(absPath, (err) => {
                if (err) {
                    console.error("Görsel silinemedi:", absPath, err.message);
                }
            });
        }
        yield prisma_1.default.application.delete({ where: { id: id } });
        res.json({ message: "Başvuru silindi." });
    }
    catch (error) {
        res.status(500).json({ error: "Silme işlemi başarısız." });
    }
});
exports.deleteApplication = deleteApplication;
const sendVerificationEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body) {
            return res.status(400).json({ error: "İstek gövdesi (body) eksik." });
        }
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ error: "Email adresi gerekli." });
        }
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
        yield prisma_1.default.verificationCode.upsert({
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
        yield MailService_1.MailService.sendVerificationEmail(email, parseInt(verificationCode));
        res.json({ message: "Doğrulama e-postası gönderildi." });
    }
    catch (error) {
        console.error("Doğrulama e-postası gönderim hatası:", error);
        res.status(500).json({ error: "E-posta gönderilemedi." });
    }
});
exports.sendVerificationEmail = sendVerificationEmail;
const verifyCode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, code } = req.body;
        if (!email || !code) {
            return res.status(400).json({ error: "E-posta ve kod gereklidir." });
        }
        const record = yield prisma_1.default.verificationCode.findUnique({
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
        yield prisma_1.default.verificationCode.delete({
            where: { email },
        });
        res.json({ success: true, message: "E-posta başarıyla doğrulandı." });
    }
    catch (error) {
        console.error("Kod doğrulama hatası:", error);
        res.status(500).json({ error: "Doğrulama sırasında hata oluştu." });
    }
});
exports.verifyCode = verifyCode;
//# sourceMappingURL=applicationController.js.map