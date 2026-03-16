"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadLimiter = exports.contactLimiter = exports.applicationLimiter = exports.loginLimiter = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
exports.loginLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: 'Çok fazla giriş denemesi. 15 dakika sonra tekrar deneyin.',
    standardHeaders: true,
    legacyHeaders: false
});
exports.applicationLimiter = (0, express_rate_limit_1.default)({
    windowMs: 60 * 60 * 1000,
    max: 3,
    message: 'Saatte en fazla 3 başvuru yapabilirsiniz.',
    standardHeaders: true,
    legacyHeaders: false
});
exports.contactLimiter = (0, express_rate_limit_1.default)({
    windowMs: 60 * 60 * 1000,
    max: 5,
    message: 'Çok fazla mesaj gönderdiniz. Lütfen bir süre bekleyin.',
    standardHeaders: true,
    legacyHeaders: false
});
exports.uploadLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 20,
    message: 'Çok fazla dosya yükleme denemesi.',
    standardHeaders: true,
    legacyHeaders: false
});
//# sourceMappingURL=rateLimiter.js.map