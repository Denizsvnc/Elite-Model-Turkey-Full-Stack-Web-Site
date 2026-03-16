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
exports.upsertContactInfo = exports.getContactInfo = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
// ==========================================
// 1. İletişim Bilgilerini Getir
// ==========================================
const getContactInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Sadece ilk kaydı getiriyoruz
        const contact = yield prisma_1.default.contactInfo.findFirst();
        // Eğer henüz kayıt yoksa null dönebiliriz, frontend bunu kontrol eder
        res.json(contact);
    }
    catch (error) {
        res.status(500).json({ error: 'İletişim bilgileri çekilemedi.' });
    }
});
exports.getContactInfo = getContactInfo;
// ==========================================
// 2. İletişim Bilgilerini Kaydet veya Güncelle
// ==========================================
const upsertContactInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { 
    // Adresler
    address_tr, address_en, address_de, address_ru, 
    // İletişim
    phone, email, locationUrl, isActive } = req.body;
    try {
        // Mevcut kayıt var mı?
        const existingContact = yield prisma_1.default.contactInfo.findFirst();
        let result;
        if (existingContact) {
            // --- GÜNCELLEME ---
            result = yield prisma_1.default.contactInfo.update({
                where: { id: existingContact.id },
                data: {
                    address_tr, address_en, address_de, address_ru,
                    phone, email, locationUrl,
                    isActive
                },
            });
        }
        else {
            // --- OLUŞTURMA ---
            result = yield prisma_1.default.contactInfo.create({
                data: {
                    address_tr, address_en, address_de, address_ru,
                    phone, email, locationUrl,
                    isActive: isActive !== undefined ? isActive : true
                },
            });
        }
        res.json(result);
    }
    catch (error) {
        console.error("İletişim bilgisi kayıt hatası:", error);
        res.status(500).json({ error: 'İşlem başarısız.' });
    }
});
exports.upsertContactInfo = upsertContactInfo;
//# sourceMappingURL=contactInfoController.js.map