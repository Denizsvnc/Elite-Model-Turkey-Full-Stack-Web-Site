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
exports.changePassword = exports.getProfile = exports.login = exports.register = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma_1 = __importDefault(require("../lib/prisma"));
// Admin kullanıcı kaydı (sadece SUPERADMIN oluşturabilir)
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, name, phone, role } = req.body;
        console.log("Register request body:", req.body);
        // Email kontrolü
        const existingUser = yield prisma_1.default.adminUser.findUnique({
            where: { email },
        });
        if (existingUser) {
            return res.status(400).json({ error: "Bu email zaten kullanılıyor" });
        }
        // Şifreyi hashle
        const passwordHash = yield bcryptjs_1.default.hash(password, 10);
        // Yeni admin kullanıcı oluştur
        const adminUser = yield prisma_1.default.adminUser.create({
            data: {
                email,
                passwordHash,
                name,
                phone,
                role: role || "ADMIN",
            },
            select: {
                id: true,
                email: true,
                name: true,
                phone: true,
                role: true,
                isActive: true,
            },
        });
        res.status(201).json({
            message: "Admin kullanıcı başarıyla oluşturuldu",
            adminUser,
        });
    }
    catch (error) {
        console.error("Register error:", error);
        res.status(500).json({ error: "Kayıt sırasında bir hata oluştu" });
    }
});
exports.register = register;
// Giriş yapma
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const { email, password } = req.body;
        // // Kullanıcıyı bul
        // const adminUser = await prisma.adminUser.findUnique({
        //   where: { email },
        // });
        // if (!adminUser) {
        //   return res.status(401).json({ error: "Email veya şifre hatalı" });
        // }
        // // Aktif mi kontrol et
        // if (!adminUser.isActive) {
        //   return res.status(403).json({ error: "Hesabınız devre dışı bırakılmış" });
        // }
        // // Şifre kontrolü
        // const isPasswordValid = await bcrypt.compare(
        //   password,
        //   adminUser.passwordHash,
        // );
        // if (!isPasswordValid) {
        //   return res.status(401).json({ error: "Email veya şifre hatalı" });
        // }
        // // JWT token oluştur
        // const token = jwt.sign(
        //   {
        //     id: adminUser.id,
        //     email: adminUser.email,
        //     role: adminUser.role,
        //   },
        //   process.env.JWT_SECRET!,
        // );
        res.json({
            message: "Giriş başarılı",
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30",
            //   adminUser: {
            //     id: adminUser.id,
            //     email: adminUser.email,
            //     name: adminUser.name,
            //     role: adminUser.role,
            //   },
            adminUser: {
                id: 1,
                email: "admin@example.com",
                name: "Admin User",
                role: "SUPERADMIN",
            },
        });
    }
    catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Giriş sırasında bir hata oluştu" });
    }
});
exports.login = login;
// Profil bilgilerini getir
const getProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const adminUser = yield prisma_1.default.adminUser.findUnique({
            where: { id: req.adminUser.id },
            select: {
                id: true,
                email: true,
                name: true,
                phone: true,
                role: true,
                isActive: true,
            },
        });
        if (!adminUser) {
            return res.status(404).json({ error: "Kullanıcı bulunamadı" });
        }
        res.json(adminUser);
    }
    catch (error) {
        console.error("Get profile error:", error);
        res.status(500).json({ error: "Profil bilgileri alınırken hata oluştu" });
    }
});
exports.getProfile = getProfile;
// Şifre değiştir
const changePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { currentPassword, newPassword } = req.body;
        // Mevcut kullanıcıyı bul
        const adminUser = yield prisma_1.default.adminUser.findUnique({
            where: { id: req.adminUser.id },
        });
        if (!adminUser) {
            return res.status(404).json({ error: "Kullanıcı bulunamadı" });
        }
        // Mevcut şifre kontrolü
        const isPasswordValid = yield bcryptjs_1.default.compare(currentPassword, adminUser.passwordHash);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Mevcut şifre hatalı" });
        }
        // Yeni şifreyi hashle
        const newPasswordHash = yield bcryptjs_1.default.hash(newPassword, 10);
        // Şifreyi güncelle
        yield prisma_1.default.adminUser.update({
            where: { id: req.adminUser.id },
            data: { passwordHash: newPasswordHash },
        });
        res.json({ message: "Şifre başarıyla değiştirildi" });
    }
    catch (error) {
        console.error("Change password error:", error);
        res.status(500).json({ error: "Şifre değiştirme sırasında hata oluştu" });
    }
});
exports.changePassword = changePassword;
//# sourceMappingURL=authController.js.map