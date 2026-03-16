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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUnnotifiedRequests = exports.createNotificationRequest = void 0;
const applicationNotification_service_1 = require("../Services/applicationNotification.service");
const service = new applicationNotification_service_1.ApplicationNotificationService();
/**
 * Bildirim talebi oluştur
 */
const createNotificationRequest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullName, phone, email } = req.body;
        // Validasyon
        if (!fullName || !phone || !email) {
            return res.status(400).json({
                success: false,
                message: 'Tüm alanlar zorunludur.'
            });
        }
        // Email formatı kontrolü
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Geçersiz e-posta adresi.'
            });
        }
        const request = yield service.createNotificationRequest(fullName, phone, email);
        return res.status(201).json({
            success: true,
            message: 'Bildirim talebiniz kaydedildi. Başvurular açıldığında size e-posta göndereceğiz.',
            data: request
        });
    }
    catch (error) {
        console.error('Bildirim talebi oluşturma hatası:', error);
        if (error.message === 'Bu e-posta adresi zaten kayıtlı.') {
            return res.status(409).json({
                success: false,
                message: error.message
            });
        }
        return res.status(500).json({
            success: false,
            message: 'Bir hata oluştu. Lütfen tekrar deneyin.'
        });
    }
});
exports.createNotificationRequest = createNotificationRequest;
/**
 * Tüm bildirilmemiş talepleri getir (Admin)
 */
const getUnnotifiedRequests = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const requests = yield service.getUnnotifiedRequests();
        return res.status(200).json({
            success: true,
            data: requests
        });
    }
    catch (error) {
        console.error('Bildirim talepleri getirme hatası:', error);
        return res.status(500).json({
            success: false,
            message: 'Bir hata oluştu.'
        });
    }
});
exports.getUnnotifiedRequests = getUnnotifiedRequests;
//# sourceMappingURL=applicationNotificationController.js.map