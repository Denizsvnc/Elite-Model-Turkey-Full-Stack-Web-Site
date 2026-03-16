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
exports.deleteFAQ = exports.updateFAQ = exports.createFAQ = exports.getFAQById = exports.getFAQs = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
// ==========================================
// 1. Tüm Soru-Cevapları Getir (Sıralı)
// ==========================================
const getFAQs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const faqs = yield prisma_1.default.fAQ.findMany({
            orderBy: {
                order: 'asc', // 1, 2, 3... sırasına göre getir
            },
        });
        res.json(faqs);
    }
    catch (error) {
        res.status(500).json({ error: 'Veriler çekilemedi.' });
    }
});
exports.getFAQs = getFAQs;
// ==========================================
// 2. ID ile Tek Bir Soru Getir
// ==========================================
const getFAQById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const faq = yield prisma_1.default.fAQ.findUnique({
            where: { id: id },
        });
        if (!faq)
            return res.status(404).json({ error: 'Kayıt bulunamadı.' });
        res.json(faq);
    }
    catch (error) {
        res.status(500).json({ error: 'Hata oluştu.' });
    }
});
exports.getFAQById = getFAQById;
// ==========================================
// 3. Yeni Soru Ekle (4 Dil Destekli)
// ==========================================
const createFAQ = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { order, isActive, 
    // Sorular (4 Dil)
    question_tr, question_en, question_de, question_ru, 
    // Cevaplar (4 Dil)
    answer_tr, answer_en, answer_de, answer_ru } = req.body;
    try {
        const newFAQ = yield prisma_1.default.fAQ.create({
            data: {
                order: order || 1, // Gönderilmezse 1 olsun
                isActive: isActive !== undefined ? isActive : true,
                // Zorunlu alanlar
                question_tr, question_en, question_de, question_ru,
                answer_tr, answer_en, answer_de, answer_ru
            },
        });
        res.status(201).json(newFAQ);
    }
    catch (error) {
        console.error("FAQ Ekleme Hatası:", error);
        res.status(500).json({ error: 'Soru oluşturulamadı. Eksik alanları kontrol et.' });
    }
});
exports.createFAQ = createFAQ;
// ==========================================
// 4. Soruyu Güncelle
// ==========================================
const updateFAQ = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body; // Tüm gelen veriyi al
    try {
        const updatedFAQ = yield prisma_1.default.fAQ.update({
            where: { id: id },
            data: data,
        });
        res.json(updatedFAQ);
    }
    catch (error) {
        res.status(500).json({ error: 'Güncelleme başarısız.' });
    }
});
exports.updateFAQ = updateFAQ;
// ==========================================
// 5. Soruyu Sil
// ==========================================
const deleteFAQ = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma_1.default.fAQ.delete({
            where: { id: id },
        });
        res.json({ message: 'Soru başarıyla silindi.' });
    }
    catch (error) {
        res.status(500).json({ error: 'Silme işlemi başarısız.' });
    }
});
exports.deleteFAQ = deleteFAQ;
//# sourceMappingURL=faqController.js.map