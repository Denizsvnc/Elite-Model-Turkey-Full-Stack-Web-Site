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
exports.ApplicationNotificationService = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
class ApplicationNotificationService {
    /**
     * Başvuru açılınca bildirim almak isteyen kullanıcı kaydeder
     */
    createNotificationRequest(fullName, phone, email) {
        return __awaiter(this, void 0, void 0, function* () {
            // Daha önce kayıt var mı kontrol et
            const existing = yield prisma_1.default.applicationNotificationRequest.findUnique({
                where: { email },
            });
            if (existing) {
                throw new Error("Bu e-posta adresi zaten kayıtlı.");
            }
            return yield prisma_1.default.applicationNotificationRequest.create({
                data: {
                    fullName,
                    phone,
                    email,
                    isNotified: false,
                },
            });
        });
    }
    /**
     * Bildirilmemiş tüm kullanıcıları getir
     */
    getUnnotifiedRequests() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.applicationNotificationRequest.findMany({
                where: { isNotified: false },
            });
        });
    }
    /**
     * Kullanıcıyı bildirildi olarak işaretle
     */
    markAsNotified(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.applicationNotificationRequest.update({
                where: { email },
                data: { isNotified: true },
            });
        });
    }
    /**
     * Tüm bekleyen kayıtları bildirildi olarak işaretle
     */
    markAllAsNotified() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.applicationNotificationRequest.updateMany({
                where: { isNotified: false },
                data: { isNotified: true },
            });
        });
    }
}
exports.ApplicationNotificationService = ApplicationNotificationService;
//# sourceMappingURL=applicationNotification.service.js.map