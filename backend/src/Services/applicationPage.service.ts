import prisma from "../lib/prisma";
import {
  sendEmail,
  getApplicationOpenedEmailTemplate,
} from "../utils/emailHelper";
import { ApplicationNotificationService } from "./applicationNotification.service";

export class ApplicationPageService {
  private notificationService = new ApplicationNotificationService();

  async getStatus() {
    let status = await prisma.applicationPage_Status.findUnique({
      where: { id: 1 },
    });

    if (!status) {
      status = await prisma.applicationPage_Status.create({
        data: {
          id: 1,
          isActive: true,
        },
      });
    }

    return status;
  }

  async updateStatus(isActive: boolean) {
    // Önce mevcut durumu kontrol et
    const currentStatus = await this.getStatus();
    const wasInactive = !currentStatus.isActive;

    // Durumu güncelle
    const updatedStatus = await prisma.applicationPage_Status.upsert({
      where: { id: 1 },
      update: { isActive },
      create: {
        id: 1,
        isActive,
      },
    });

    // Eğer kapalıdan açığa geçiş yapıldıysa ve aktif yapıldıysa
    if (wasInactive && isActive) {
      // Bekleyen tüm kullanıcılara mail gönder (await ile hemen çalıştır)
      await this.sendNotificationsToWaitingUsers();
    }

    return updatedStatus;
  }

  /**
   * Başvuruları bekleyen tüm kullanıcılara mail gönder (async, arka planda)
   */
  private async sendNotificationsToWaitingUsers() {
    try {
      const waitingUsers =
        await this.notificationService.getUnnotifiedRequests();

      // Her kullanıcıya mail gönder
      for (const user of waitingUsers) {
        try {
          // Dil tahmin et (email domain'ine göre basit bir mantık)
          let language: "tr" | "en" | "de" | "ru" = "en";
          if (user.email.endsWith(".tr")) language = "tr";
          else if (user.email.endsWith(".de")) language = "de";
          else if (user.email.endsWith(".ru")) language = "ru";

          const emailHtml = getApplicationOpenedEmailTemplate(
            user.fullName,
            language,
          );

          const subject =
            language === "tr"
              ? "Başvurular Açıldı! 🎉"
              : language === "de"
                ? "Bewerbungen Sind Jetzt Geöffnet! 🎉"
                : language === "ru"
                  ? "Заявки Теперь Открыты! 🎉"
                  : "Applications Are Now Open! 🎉";

          const sent = await sendEmail({
            to: user.email,
            subject,
            html: emailHtml,
          });

          if (sent) {
            // Mail gönderildi olarak işaretle
            await this.notificationService.markAsNotified(user.email);
          }
        } catch (error) {
          // Mail gönderme hatası - sessizce devam et
        }
      }
    } catch (error) {
      // Toplu bildirim gönderme hatası - sessizce devam et
    }
  }
}
