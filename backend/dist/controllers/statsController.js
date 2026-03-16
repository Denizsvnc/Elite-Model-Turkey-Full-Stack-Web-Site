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
exports.getDashboardStats = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
// ==========================================
// Dashboard İstatistiklerini Getir
// ==========================================
const getDashboardStats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Toplam başvuru sayısı
        const totalApplications = yield prisma_1.default.application.count();
        // Bekleyen başvuru sayısı (REVIEW durumunda)
        const pendingApplications = yield prisma_1.default.application.count({
            where: { status: 'REVIEW' }
        });
        // Aktif modeller (ACCEPTED durumunda)
        const activeModels = yield prisma_1.default.application.count({
            where: { status: 'ACCEPTED' }
        });
        // Toplam mesaj sayısı
        const totalMessages = yield prisma_1.default.contactMessage.count();
        // Okunmamış mesaj sayısı
        const unreadMessages = yield prisma_1.default.contactMessage.count({
            where: { isRead: false }
        });
        res.json({
            totalApplications,
            pendingApplications,
            activeModels,
            totalMessages,
            unreadMessages
        });
    }
    catch (error) {
        console.error('Stats fetch error:', error);
        res.status(500).json({ error: 'İstatistikler alınamadı.' });
    }
});
exports.getDashboardStats = getDashboardStats;
//# sourceMappingURL=statsController.js.map