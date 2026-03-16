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
exports.ApplicationPageService = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const emailHelper_1 = require("../utils/emailHelper");
const applicationNotification_service_1 = require("./applicationNotification.service");
class ApplicationPageService {
    constructor() {
        this.notificationService = new applicationNotification_service_1.ApplicationNotificationService();
    }
    getStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            let status = yield prisma_1.default.applicationPage_Status.findUnique({
                where: { id: 1 },
            });
            if (!status) {
                status = yield prisma_1.default.applicationPage_Status.create({
                    data: {
                        id: 1,
                        isActive: true,
                    },
                });
            }
            return status;
        });
    }
    updateStatus(isActive) {
        return __awaiter(this, void 0, void 0, function* () {
            // Önce mevcut durumu kontrol et
            const currentStatus = yield this.getStatus();
            const wasInactive = !currentStatus.isActive;
            // Durumu güncelle
            const updatedStatus = yield prisma_1.default.applicationPage_Status.upsert({
                where: { id: 1 },
                update: { isActive },
                create: {
                    id: 1,
                    isActive,
                },
            });
            // Eğer kapalıdan açığa geçiş yapıldıysa ve aktif yapıldıysa
            if (wasInactive && isActive) {
                // Bekleyen tüm kullanıcılara mail gönder (await ile hemen çalıştır)
                yield this.sendNotificationsToWaitingUsers();
            }
            return updatedStatus;
        });
    }
    /**
     * Başvuruları bekleyen tüm kullanıcılara mail gönder (async, arka planda)
     */
    sendNotificationsToWaitingUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const waitingUsers = yield this.notificationService.getUnnotifiedRequests();
                // Her kullanıcıya mail gönder
                for (const user of waitingUsers) {
                    try {
                        // Dil tahmin et (email domain'ine göre basit bir mantık)
                        let language = "en";
                        if (user.email.endsWith(".tr"))
                            language = "tr";
                        else if (user.email.endsWith(".de"))
                            language = "de";
                        else if (user.email.endsWith(".ru"))
                            language = "ru";
                        const emailHtml = (0, emailHelper_1.getApplicationOpenedEmailTemplate)(user.fullName, language);
                        const subject = language === "tr"
                            ? "Başvurular Açıldı! 🎉"
                            : language === "de"
                                ? "Bewerbungen Sind Jetzt Geöffnet! 🎉"
                                : language === "ru"
                                    ? "Заявки Теперь Открыты! 🎉"
                                    : "Applications Are Now Open! 🎉";
                        const sent = yield (0, emailHelper_1.sendEmail)({
                            to: user.email,
                            subject,
                            html: emailHtml,
                        });
                        if (sent) {
                            // Mail gönderildi olarak işaretle
                            yield this.notificationService.markAsNotified(user.email);
                        }
                    }
                    catch (error) {
                        // Mail gönderme hatası - sessizce devam et
                    }
                }
            }
            catch (error) {
                // Toplu bildirim gönderme hatası - sessizce devam et
            }
        });
    }
}
exports.ApplicationPageService = ApplicationPageService;
//# sourceMappingURL=applicationPage.service.js.map