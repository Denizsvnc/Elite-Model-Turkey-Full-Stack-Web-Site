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
exports.updateRule = exports.getAllRules = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
// ==========================================
// 1. Tüm Kuralları Listele (Contact, Application vb.)
// ==========================================
const getAllRules = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rules = yield prisma_1.default.notificationRule.findMany();
        res.json(rules);
    }
    catch (error) {
        res.status(500).json({ error: 'Kurallar çekilemedi.' });
    }
});
exports.getAllRules = getAllRules;
// ==========================================
// 2. Kural Güncelle (Slug ile)
// ==========================================
const updateRule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { slug } = req.params; // URL: /api/admin/rules/contact_form
    const { emailEnabled, telegramEnabled, whatsappEnabled, isActive } = req.body;
    try {
        const updatedRule = yield prisma_1.default.notificationRule.update({
            where: { slug: slug },
            data: {
                emailEnabled,
                telegramEnabled,
                whatsappEnabled,
                isActive
            }
        });
        res.json({ success: true, data: updatedRule });
    }
    catch (error) {
        console.error("Kural güncellenemedi:", error);
        res.status(500).json({ error: 'Güncelleme hatası.' });
    }
});
exports.updateRule = updateRule;
//# sourceMappingURL=NotificationRuleController.js.map