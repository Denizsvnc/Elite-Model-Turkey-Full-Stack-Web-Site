import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma';
import { AuthRequest } from '../middleware/auth';

// Admin kullanıcı kaydı (sadece SUPERADMIN oluşturabilir)
export const register = async (req: Request, res: Response) => {
    try {
        const { email, password, name, phone, role } = req.body;

        // Email kontrolü
        const existingUser = await prisma.adminUser.findUnique({
            where: { email }
        });

        if (existingUser) {
            return res.status(400).json({ error: 'Bu email zaten kullanılıyor' });
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

        // JWT token oluştur
        const token = jwt.sign(
            {
                id: adminUser.id,
                email: adminUser.email,
                role: adminUser.role
            },
            process.env.JWT_SECRET!
        );

        res.json({
            message: 'Giriş başarılı',
            token,
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

// Profil bilgilerini getir
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

        // Mevcut kullanıcıyı bul
        const adminUser = await prisma.adminUser.findUnique({
            where: { id: req.adminUser!.id }
        });

        if (!adminUser) {
            return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
        }

        // Mevcut şifre kontrolü
        const isPasswordValid = await bcrypt.compare(currentPassword, adminUser.passwordHash);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Mevcut şifre hatalı' });
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
