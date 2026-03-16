import prisma from '../lib/prisma';
import { MailService } from './MailService';
import { TelegramService } from './TelegramService';
import { WhatsappService } from './WhatsappService';

// Gelebilecek veri tipleri (Mail, Telegram vb. ortak tipleri)
interface NotificationData {
  // Ortak alanlar
  fullName: string;
  email?: string;
  
  // Mail'e özel
  subject?: string;
  message?: string;      // İletişim mesajı
  html?: string;         // Özel HTML şablonu gerekirse

  // Başvuruya özel
  phone?: string;
  city?: string;
  gender?: string;
  heightCm?: number;
  selfieUrl?: string;    // Fotoğraflar
}

export class NotificationService {

  /**
   * Merkezi Bildirim Gönderici
   * @param eventSlug 'contact_form' | 'application_form'
   * @param data Formdan gelen veriler
   */
  static async send(eventSlug: string, data: NotificationData) {
    try {
      // 1. Kuralı Veritabanından Çek
      const rule = await prisma.notificationRule.findUnique({
        where: { slug: eventSlug }
      });

      // Kural yoksa veya pasifse hiçbir şey yapma
      if (!rule || !rule.isActive) {
        console.warn(`⚠️ Bildirim kuralı bulunamadı veya pasif: ${eventSlug}`);
        return;
      }

      console.log(`📢 Bildirim Tetiklendi: ${rule.name}`);

      // --- KOMBİNASYON MANTIĞI ---

      // 1. E-MAIL Kanalı
      if (rule.emailEnabled) {
        // Hangi olay olduğuna göre doğru Mail fonksiyonunu çağır
        if (eventSlug === 'contact_form') {
           await MailService.sendContactNotification({
             fullName: data.fullName,
             email: data.email!,
             subject: data.subject || 'Konu Yok',
             message: data.message || ''
           });
        } 
        else if (eventSlug === 'application_form') {
           await MailService.sendApplicationNotification({
             fullName: data.fullName,
             email: data.email!,
             phone: data.phone!,
             city: data.city!,
             gender: data.gender!,
             heightCm: data.heightCm!,
             selfieUrl: data.selfieUrl
             // Diğer foto alanları eklenebilir...
           });
        }
      }

      // 2. TELEGRAM Kanalı
      if (rule.telegramEnabled) {
        let text = '';
        
        if (eventSlug === 'contact_form') {
          text = `📩 <b>Yeni İletişim Mesajı</b>\n\n👤 <b>Kimden:</b> ${data.fullName}\n📧 <b>Email:</b> ${data.email}\n📝 <b>Konu:</b> ${data.subject}\n\n"${data.message}"`;
          await TelegramService.sendMessage(text);
        } 
        else if (eventSlug === 'application_form') {
          text = `📋 <b>Yeni Başvuru!</b>\n\n👤 ${data.fullName}\n📍 ${data.city}\n📏 ${data.heightCm}cm`;
          
          // Eğer selfie varsa resimli at, yoksa yazılı at
          if (data.selfieUrl) {
            await TelegramService.sendPhoto({
              mediaUrl: data.selfieUrl,
              caption: text
            });
          } else {
            await TelegramService.sendMessage(text);
          }
        }
      }

      // 3. WHATSAPP Kanali
      if (rule.whatsappEnabled) {
        let wpMessage = '';

        if (eventSlug === 'contact_form') {
          wpMessage = `🔔 *Yeni İletişim Mesajı*\n\n👤 *Kimden:* ${data.fullName}\n💬 *Mesaj:* ${data.message}`;
        } 
        else if (eventSlug === 'application_form') {
          wpMessage = `🚀 *Yeni Başvuru*\n\n👤 ${data.fullName}\n📱 ${data.phone}`;
        }

        // WhatsApp servisine gönder
        await WhatsappService.sendMessage(wpMessage);
      }

    } catch (error) {
      console.error("❌ NotificationService Hatası:", error);
      // Hata olsa bile kullanıcıya "Başarısız" dememek için throw etmeyebiliriz
      // veya loglayıp geçeriz.
    }
  }
}