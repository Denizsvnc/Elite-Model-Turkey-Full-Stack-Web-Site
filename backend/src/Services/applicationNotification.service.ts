import prisma from '../lib/prisma';

export class ApplicationNotificationService {
    /**
     * Başvuru açılınca bildirim almak isteyen kullanıcı kaydeder
     */
    async createNotificationRequest(fullName: string, phone: string, email: string) {
        // Daha önce kayıt var mı kontrol et
        const existing = await prisma.applicationNotificationRequest.findUnique({
            where: { email }
        });

        if (existing) {
            throw new Error('Bu e-posta adresi zaten kayıtlı.');
        }

        return await prisma.applicationNotificationRequest.create({
            data: {
                fullName,
                phone,
                email,
                isNotified: false
            }
        });
    }

    /**
     * Bildirilmemiş tüm kullanıcıları getir
     */
    async getUnnotifiedRequests() {
        return await prisma.applicationNotificationRequest.findMany({
            where: { isNotified: false }
        });
    }

    /**
     * Kullanıcıyı bildirildi olarak işaretle
     */
    async markAsNotified(email: string) {
        return await prisma.applicationNotificationRequest.update({
            where: { email },
            data: { isNotified: true }
        });
    }

    /**
     * Tüm bekleyen kayıtları bildirildi olarak işaretle
     */
    async markAllAsNotified() {
        return await prisma.applicationNotificationRequest.updateMany({
            where: { isNotified: false },
            data: { isNotified: true }
        });
    }
}
