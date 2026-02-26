import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma';
import { AuthRequest } from '../middleware/auth';
import { getJWTSecret } from '../config/validateEnv';

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Admin kullanıcı kaydı (sadece SUPERADMIN oluşturabilir)
export const register = async (req: Request, res: Response) => {
    try {
        const { email, password, name, phone, role } = req.body;

        // Email kontrolü
        const existingUser = await prisma.adminUser.findUnique({
            where: { email }
        });

        if (existingUser) {
            return res.status(400).json({ error: 'Kayıt işlemi başarısız. Lütfen bilgilerinizi kontrol edin.' });
        }

        // Şifreyi hashle
        const passwordHash = await bcrypt.hash(password, 10);

        // Yeni admin kullanıcı oluştur
        const adminUser = await prisma.adminUser.create({
            data: {
                email,
                passwordHash,
                name,
                phone,
                role: role || 'ADMIN'
            },
            select: {
                id: true,
                email: true,
                name: true,
                phone: true,
                role: true,
                isActive: true
            }
        });

        res.status(201).json({
            message: 'Admin kullanıcı başarıyla oluşturuldu',
            adminUser
        });
    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ error: 'Kayıt sırasında bir hata oluştu' });
    }
};

// Giriş yapma
export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        // Kullanıcıyı bul
        const adminUser = await prisma.adminUser.findUnique({
            where: { email }
        });

        if (!adminUser) {
            return res.status(401).json({ error: 'Email veya şifre hatalı' });
        }

        // Aktif mi kontrol et
        if (!adminUser.isActive) {
            return res.status(403).json({ error: 'Hesabınız devre dışı bırakılmış' });
        }

        // Şifre kontrolü
        const isPasswordValid = await bcrypt.compare(password, adminUser.passwordHash);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Email veya şifre hatalı' });
        }

        const token = jwt.sign(
            {
                id: adminUser.id,
                email: adminUser.email,
                role: adminUser.role
            },
            getJWTSecret(),
            { expiresIn: '8h' }
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 8 * 60 * 60 * 1000,
            path: '/'
        });

        res.json({
            message: 'Giriş başarılı',
            adminUser: {
                id: adminUser.id,
                email: adminUser.email,
                name: adminUser.name,
                role: adminUser.role
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Giriş sırasında bir hata oluştu' });
    }
};

export const logout = async (req: Request, res: Response) => {
    try {
        res.clearCookie('token', { path: '/' });
        res.json({ message: 'Çıkış başarılı' });
    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({ error: 'Çıkış sırasında bir hata oluştu' });
    }
};

export const getProfile = async (req: AuthRequest, res: Response) => {
    try {
        const adminUser = await prisma.adminUser.findUnique({
            where: { id: req.adminUser!.id },
            select: {
                id: true,
                email: true,
                name: true,
                phone: true,
                role: true,
                isActive: true
            }
        });

        if (!adminUser) {
            return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
        }

        res.json(adminUser);
    } catch (error) {
        console.error('Get profile error:', error);
        res.status(500).json({ error: 'Profil bilgileri alınırken hata oluştu' });
    }
};

// Şifre değiştir
export const changePassword = async (req: AuthRequest, res: Response) => {
    try {
        const { currentPassword, newPassword } = req.body;

        if (!PASSWORD_REGEX.test(newPassword)) {
            return res.status(400).json({ 
                error: 'Şifre en az 8 karakter, 1 büyük harf, 1 küçük harf, 1 rakam ve 1 özel karakter (@$!%*?&) içermelidir' 
            });
        }

        const adminUser = await prisma.adminUser.findUnique({
            where: { id: req.adminUser!.id }
        });

        if (!adminUser) {
            return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
        }

        const isPasswordValid = await bcrypt.compare(currentPassword, adminUser.passwordHash);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Mevcut şifre hatalı' });
        }

        if (currentPassword === newPassword) {
            return res.status(400).json({ error: 'Yeni şifre eski şifre ile aynı olamaz' });
        }

        // Yeni şifreyi hashle
        const newPasswordHash = await bcrypt.hash(newPassword, 10);

        // Şifreyi güncelle
        await prisma.adminUser.update({
            where: { id: req.adminUser!.id },
            data: { passwordHash: newPasswordHash }
        });

        res.json({ message: 'Şifre başarıyla değiştirildi' });
    } catch (error) {
        console.error('Change password error:', error);
        res.status(500).json({ error: 'Şifre değiştirme sırasında hata oluştu' });
    }
};
