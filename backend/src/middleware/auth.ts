import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { getJWTSecret } from '../config/validateEnv';

export interface AuthRequest extends Request {
    adminUser?: {
        id: string;
        email: string;
        role: string;
    };
}

export const authMiddleware = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
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

        const decoded = jwt.verify(token, getJWTSecret()) as {
            id: string;
            email: string;
            role: string;
        };

        req.adminUser = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Geçersiz veya süresi dolmuş token' });
    }
};

// Rol bazlı yetkilendirme middleware
export const roleMiddleware = (...allowedRoles: string[]) => {
    return (req: AuthRequest, res: Response, next: NextFunction) => {
        if (!req.adminUser) {
            return res.status(401).json({ error: 'Kimlik doğrulaması gerekli' });
        }

        if (!allowedRoles.includes(req.adminUser.role)) {
            return res.status(403).json({ error: 'Bu işlem için yetkiniz yok' });
        }

        next();
    };
};
