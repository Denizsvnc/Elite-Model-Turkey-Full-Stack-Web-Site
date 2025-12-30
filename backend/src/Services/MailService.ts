import nodemailer from "nodemailer";
// Önceki adımda oluşturduğumuz settings helper'ını import ediyoruz
import { getEmailSettings } from "../utils/settings"; 
import { MailOptions, ContactMailData, ApplicationMailData } from "../types/mail.types";
import path from 'path';
import { fileToBase64 } from '../utils/fileToBase64';

export class MailService {
  
  // Transporter'ı artık dinamik olarak oluşturuyoruz
  // Çünkü veritabanındaki şifre her an değişebilir.
  private static createTransporter(config: any) {
    return nodemailer.createTransport({
      host: config.email_host || "smtp.gmail.com", // Veritabanından gelen host
      port: parseInt(config.email_port || "587"),  // Veritabanından gelen port
      secure: config.email_port === "465",         // 465 ise SSL, değilse TLS
      auth: {
        user: config.email_user,
        pass: config.email_pass,
      },
      tls: {
        rejectUnauthorized: false
      },
      // performans ayarlari  
      pool: true, 
      maxConnections: 5, 
      maxMessages: 10, 
      rateDelta: 1000, 
      rateLimit: 5 
    });
  }

  // Genel mail gönderme fonksiyonu
  static async sendMail(options: MailOptions): Promise<void> {
    try {
      // 1. Ayarları Veritabanından Çek
      const config = await getEmailSettings();

      // 2. Master Switch Kontrolü (Sistem panelden kapatılmışsa gönderme)
      if (config.email_enable !== 'true') {
        console.warn("🛑 Mail servisi veritabanından pasife alınmış.");
        return;
      }

      // 3. Transporter'ı o anki ayarlarla oluştur
      const transporter = this.createTransporter(config);

      // 4. Maili Gönder (Timeout koruması ile)
      const sendPromise = transporter.sendMail({
        from: `"${config.email_user}" <${config.email_user}>`, // Gönderen
        to: options.to,
        subject: options.subject,
        text: options.text,
        html: options.html,
      });

      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Mail gönderimi zaman aşımına uğradı')), 10000)
      );

      await Promise.race([sendPromise, timeoutPromise]);
      console.log("✅ Mail başarıyla gönderildi");

      // Transporter'ı işi bitince kapatmıyoruz (pool kullandığın için açık kalabilir)
      // Ancak çok sık config değişiyorsa transporter.close() düşünülebilir.
      
    } catch (error) {
      console.error("❌ Mail gönderilemedi:", error instanceof Error ? error.message : error);
      throw error;
    }
  }

  // İletişim formu mesajı için mail gönder
  static async sendContactNotification(data: ContactMailData): Promise<void> {
    // Alıcı adresini veritabanından öğrenmemiz lazım
    const config = await getEmailSettings();
    // Eğer contact_email ayarlı değilse, gönderici adresine (kendine) gönder
    const targetEmail = config.contact_email || config.email_user;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
        <h2 style="color: #333;">Yeni İletişim Mesajı</h2>
        <hr style="border: 1px solid #eee;">
        
        <p><strong>Gönderen:</strong> ${data.fullName}</p>
        <p><strong>E-posta:</strong> ${data.email}</p>
        <p><strong>Konu:</strong> ${data.subject}</p>
        
        <h3 style="color: #555; margin-top: 20px;">Mesaj:</h3>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
        
        <hr style="border: 1px solid #eee; margin-top: 20px;">
        <p style="color: #999; font-size: 12px;">Bu mesaj Elite Model İletişim Formu'ndan gönderilmiştir.</p>
      </div>
    `;

    // Target email zorunlu olduğu için ! koyuyoruz veya kontrol ekleyebilirsin
    if (targetEmail) {
        await this.sendMail({
            to: targetEmail,
            subject: `[İletişim Formu] ${data.subject}`,
            html: htmlContent,
        });
    }
  }

  // Başvuru bildirimi için mail gönder
  static async sendApplicationNotification(data: ApplicationMailData): Promise<void> {
    const config = await getEmailSettings();
    const targetEmail = config.application_email || config.email_user;

    // Görsel path'i /uploads ile başlıyorsa dosyadan base64 oku
    function imgHtml(label: string, url?: string) {
      if (!url) return '';
      let src = url;
      if (url.startsWith('/uploads')) {
        // Sunucu kökünden dosya yolu oluştur
        const absPath = path.join(process.cwd(), 'src', url);
        const base64 = fileToBase64(absPath);
        if (base64) src = base64;
      }
      return `<div><div style='font-size:12px;'>${label}</div><img src='${src}' alt='${label}' style='max-width:120px;max-height:120px;border-radius:8px;border:1px solid #eee;'/></div>`;
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
        <h2 style="color: #333;">Yeni Model Başvurusu</h2>
        <hr style="border: 1px solid #eee;">
        
        <h3 style="color: #555;">Başvuru Sahibi Bilgileri</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Ad Soyad:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>E-posta:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Telefon:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Şehir:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.city}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Cinsiyet:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.gender}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Boy:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.heightCm} cm</td>
          </tr>
        </table>
        <hr style="border: 1px solid #eee; margin-top: 20px;">
        <h3 style="color: #555;">Yüklenen Fotoğraflar</h3>
        <div style="display: flex; gap: 16px; margin-bottom: 16px;">
          ${imgHtml('Selfie', data.selfieUrl)}
          ${imgHtml('Profil', data.profilePhoto)}
          ${imgHtml('Vücut', data.fullBodyPhoto)}
        </div>
        <hr style="border: 1px solid #eee; margin-top: 20px;">
        <p style="color: #999; font-size: 12px;">Başvuru detaylarını admin panelinden inceleyebilirsiniz.</p>
      </div>
    `;

    if (targetEmail) {
        await this.sendMail({
            to: targetEmail,
            subject: `[Yeni Başvuru] ${data.fullName}`,
            html: htmlContent,
        });
    }
  }
}