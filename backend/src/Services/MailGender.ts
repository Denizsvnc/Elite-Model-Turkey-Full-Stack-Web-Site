import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { MailOptions, ContactMailData, ApplicationMailData } from "../types/mail.types";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  },
  pool: true, // Bağlantı havuzu kullan
  maxConnections: 5, // Maksimum eşzamanlı bağlantı
  maxMessages: 10, // Her bağlantıda max mesaj
  rateDelta: 1000, // Rate limiting - 1 saniye
  rateLimit: 5 // Saniyede max 5 mesaj
});

export class MailService {
  // Genel mail gönderme fonksiyonu
  static async sendMail(options: MailOptions): Promise<void> {
    try {
      // Timeout ile mail gönder (10 saniye)
      const sendPromise = transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: options.to,
        subject: options.subject,
        text: options.text,
        html: options.html,
      });

      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Mail gönderimi zaman aşımına uğradı')), 10000)
      );

      const info = await Promise.race([sendPromise, timeoutPromise]);
      console.log("✅ Mail başarıyla gönderildi");
    } catch (error) {
      console.error("❌ Mail gönderilemedi:", error instanceof Error ? error.message : error);
      throw error;
    }
  }

  // İletişim formu mesajı için mail gönder
  static async sendContactNotification(data: ContactMailData): Promise<void> {
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

    await this.sendMail({
      to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER!,
      subject: `[İletişim Formu] ${data.subject}`,
      html: htmlContent,
    });
  }

  // Başvuru bildirimi için mail gönder
  static async sendApplicationNotification(data: ApplicationMailData): Promise<void> {
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
          ${data.selfieUrl ? `<div><div style='font-size:12px;'>Selfie</div><img src='${data.selfieUrl}' alt='Selfie' style='max-width:120px;max-height:120px;border-radius:8px;border:1px solid #eee;'/></div>` : ''}
          ${data.profilePhoto ? `<div><div style='font-size:12px;'>Profil</div><img src='${data.profilePhoto}' alt='Profil' style='max-width:120px;max-height:120px;border-radius:8px;border:1px solid #eee;'/></div>` : ''}
          ${data.fullBodyPhoto ? `<div><div style='font-size:12px;'>Vücut</div><img src='${data.fullBodyPhoto}' alt='Vücut' style='max-width:120px;max-height:120px;border-radius:8px;border:1px solid #eee;'/></div>` : ''}
        </div>
        <hr style="border: 1px solid #eee; margin-top: 20px;">
        <p style="color: #999; font-size: 12px;">Başvuru detaylarını admin panelinden inceleyebilirsiniz.</p>
      </div>
    `;

    await this.sendMail({
      to: process.env.APPLICATION_EMAIL || process.env.EMAIL_USER!,
      subject: `[Yeni Başvuru] ${data.fullName}`,
      html: htmlContent,
    });
  }
}

