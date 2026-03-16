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
exports.roleMiddleware = exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateEnv_1 = require("../config/validateEnv");
const authMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let token = req.cookies.token;
        if (!token) {
            const authHeader = req.headers.authorization;
            if (authHeader && authHeader.startsWith('Bearer ')) {
                token = authHeader.split(' ')[1];
            }
        }
        if (!token) {
            return res.status(401).json({ error: 'Token bulunamadı' });
        }
        const decoded = jsonwebtoken_1.default.verify(token, (0, validateEnv_1.getJWTSecret)());
        req.adminUser = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({ error: 'Geçersiz veya süresi dolmuş token' });
    }
});
exports.authMiddleware = authMiddleware;
// Rol bazlı yetkilendirme middleware
const roleMiddleware = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.adminUser) {
            return res.status(401).json({ error: 'Kimlik doğrulaması gerekli' });
        }
        if (!allowedRoles.includes(req.adminUser.role)) {
            return res.status(403).json({ error: 'Bu işlem için yetkiniz yok' });
        }
        next();
    };
};
exports.roleMiddleware = roleMiddleware;
//# sourceMappingURL=auth.js.map