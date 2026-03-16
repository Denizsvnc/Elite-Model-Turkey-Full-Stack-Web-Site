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
exports.deleteContactMessage = exports.markMessageAsRead = exports.getMessageById = exports.getContactMessages = exports.createContactMessage = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const NotificationService_1 = require("../Services/NotificationService"); // Yolu klasör yapına göre kontrol et
// ==========================================
// 1. Yeni Mesaj Gönder (Public - İletişim Formu)
// ==========================================
const createContactMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // express-validator ile gelen hataları kontrol et
    const { validationResult } = require('express-validator');
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { fullName, email, subject, message } = req.body;
        if (!fullName || !email || !subject || !message) {
            return res.status(400).json({ error: 'Tüm alanlar zorunludur' });
        }
        // Veritabanına kaydet
        const newMessage = yield prisma_1.default.contactMessage.create({
            data: {
                fullName,
                email,
                subject,
                message,
            },
        });
        // BİLDİRİM ORKESTRASYONU (Mail, Telegram, Whatsapp - Panel ayarlarına göre)
        // Arka planda çalışması ve kullanıcıyı bekletmemesi için await koymadan tetikliyoruz.
        NotificationService_1.NotificationService.send('contact_form', {
            fullName,
            email,
            subject,
            message,
        }).catch(err => console.error('❌ Bildirim gönderme hatası:', err));
        res.status(201).json(newMessage);
    }
    catch (error) {
        console.error("Mesaj gönderme hatası:", error);
        res.status(500).json({ error: 'Mesajınız gönderilemedi.' });
    }
});
exports.createContactMessage = createContactMessage;
// ==========================================
// 2. Tüm Mesajları Listele (Admin)
// ==========================================
const getContactMessages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const messages = yield prisma_1.default.contactMessage.findMany({
            orderBy: {
                createdAt: 'desc', // En son gelen mesaj en üstte
            },
        });
        res.json(messages);
    }
    catch (error) {
        res.status(500).json({ error: 'Mesajlar çekilemedi.' });
    }
});
exports.getContactMessages = getContactMessages;
// ==========================================
// 3. Tek Bir Mesajı Oku (Admin - Detay)
// ==========================================
const getMessageById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const message = yield prisma_1.default.contactMessage.findUnique({
            where: { id: id },
        });
        if (!message) {
            return res.status(404).json({ error: 'Mesaj bulunamadı.' });
        }
        res.json(message);
    }
    catch (error) {
        res.status(500).json({ error: 'Mesaj detayları alınamadı.' });
    }
});
exports.getMessageById = getMessageById;
// ==========================================
// 4. Mesajı "Okundu" Olarak İşaretle (Admin)
// ==========================================
const markMessageAsRead = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { isRead } = req.body; // Frontend'den { "isRead": true } gönderilir
    try {
        const updatedMessage = yield prisma_1.default.contactMessage.update({
            where: { id: id },
            data: {
                isRead: isRead,
            },
        });
        res.json(updatedMessage);
    }
    catch (error) {
        res.status(500).json({ error: 'Durum güncellenemedi.' });
    }
});
exports.markMessageAsRead = markMessageAsRead;
// ==========================================
// 5. Mesajı Sil (Admin - Spam vs.)
// ==========================================
const deleteContactMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma_1.default.contactMessage.delete({
            where: { id: id },
        });
        res.json({ message: 'Mesaj başarıyla silindi.' });
    }
    catch (error) {
        res.status(500).json({ error: 'Silme işlemi başarısız.' });
    }
});
exports.deleteContactMessage = deleteContactMessage;
//# sourceMappingURL=contactMessageController.js.map