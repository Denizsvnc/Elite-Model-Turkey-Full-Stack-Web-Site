import nodemailer from "nodemailer";
// Önceki adımda oluşturduğumuz settings helper'ını import ediyoruz
import { getEmailSettings } from "../utils/settings";
import {
  MailOptions,
  ContactMailData,
  ApplicationMailData,
} from "../types/mail.types";
import path from "path";
import { fileToBase64 } from "../utils/fileToBase64";

export class MailService {
  // Transporter'ı artık dinamik olarak oluşturuyoruz
  // Çünkü veritabanındaki şifre her an değişebilir.
  private static createTransporter(config: any) {
    return nodemailer.createTransport({
      host: config.email_host || process.env.EMAIL_HOST || "smtp.gmail.com",
      port: parseInt(config.email_port || process.env.EMAIL_PORT || "587"),
      secure: (config.email_port || process.env.EMAIL_PORT) === "465",
      auth: {
        user: config.email_user || process.env.EMAIL_USER,
        pass: config.email_pass || process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
      pool: true,
      maxConnections: 5,
      maxMessages: 10,
      rateDelta: 1000,
      rateLimit: 5,
    });
  }

  // Genel mail gönderme fonksiyonu
  static async sendMail(options: MailOptions): Promise<void> {
    try {
      // 1. Ayarları Veritabanından Çek
      const config = await getEmailSettings();

      // 2. Master Switch Kontrolü (Sistem panelden kapatılmışsa gönderme)
      // if (config.email_enable !== 'true') {
      //   console.warn("🛑 Mail servisi veritabanından pasife alınmış.");
      //   return;
      // }

      // 3. Transporter'ı o anki ayarlarla oluştur
      const transporter = this.createTransporter(config);

      const fromUser = config.email_user || process.env.EMAIL_USER;

      // 4. Maili Gönder (Timeout koruması ile)
      const sendPromise = transporter.sendMail({
        from: `"${fromUser}" <${fromUser}>`,
        to: options.to,
        subject: options.subject,
        text: options.text,
        html: options.html,
      });

      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(
          () => reject(new Error("Mail gönderimi zaman aşımına uğradı")),
          10000,
        ),
      );

      await Promise.race([sendPromise, timeoutPromise]);
      console.log("✅ Mail başarıyla gönderildi");

      // Transporter'ı işi bitince kapatmıyoruz (pool kullandığın için açık kalabilir)
      // Ancak çok sık config değişiyorsa transporter.close() düşünülebilir.
    } catch (error) {
      console.error(
        "❌ Mail gönderilemedi:",
        error instanceof Error ? error.message : error,
      );
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
  static async sendApplicationNotification(
    data: ApplicationMailData,
  ): Promise<void> {
    const config = await getEmailSettings();
    const targetEmail = config.application_email || config.email_user;

    // Görsel path'i /uploads ile başlıyorsa dosyadan base64 oku
    function imgHtml(label: string, url?: string) {
      if (!url) return "";
      let src = url;
      if (url.startsWith("/uploads")) {
        // Sunucu kökünden dosya yolu oluştur
        const absPath = path.join(process.cwd(), "src", url);
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
          ${imgHtml("Selfie", data.selfieUrl)}
          ${imgHtml("Profil", data.profilePhoto)}
          ${imgHtml("Vücut", data.fullBodyPhoto)}
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

  static async sendVerificationEmail(email: string, verificationCode: number) {
    const targetEmail = email;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; color: #333;">
        <h2 style="color: #007bff; text-align: center;">E-posta Doğrulama</h2>
        <hr style="border: 1px solid #eee; margin: 20px 0;">
        <p>Başvurunuz da kullandığınız e-posta adresini doğrulamak için aşağıdaki 6 haneli kodu kullanın:</p>
        
        <div style="background: #f8f9fa; border: 1px dashed #007bff; padding: 20px; text-align: center; margin: 20px 0; border-radius: 8px;">
          <span style="font-size: 32px; font-weight: bold; letter-spacing: 10px; color: #007bff;">${verificationCode}</span>
        </div>

        <p style="font-size: 14px; color: #666;">Bu kod kısa bir süre için geçerlidir. Eğer bu isteği siz yapmadıysanız, lütfen bu e-postayı dikkate almayın.</p>
        
        <hr style="border: 1px solid #eee; margin-top: 30px;">
        <p style="color: #999; font-size: 12px; text-align: center;">Bu e-posta otomatik olarak oluşturulmuştur.</p>
      </div>
    `;

    if (targetEmail) {
      await this.sendMail({
        to: targetEmail,
        subject: "E-posta Doğrulama",
        html: htmlContent,
      });
    }
  }
  static async sendConfirmApplicationEmail(
    email: string,
    aplicationCode: string,
    fullName: string,
    phone: string,
  ) {
    const targetEmail = email;

    const htmlContent = `
   <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; color: #333;">
        <h2 style="color: #28a745; text-align: center;">Başvurunuz Alındı!</h2>
        <hr style="border: 1px solid #eee; margin: 20px 0;">
        <p>Merhaba ${fullName},</p>
        <p>Elite Model Türkiye'ye yaptığınız başvuru başarıyla alındı. Başvurunuzun detayları aşağıdaki gibidir:</p>
         <h3 style="color: orange; text-align: center;">Başvuru kodunuz : ${aplicationCode}</h3>
        <ul style="list-style: none; padding: 0;">
          <li><strong>Ad Soyad:</strong> ${fullName}</li>
          <li><strong>E-posta:</strong> ${targetEmail}</li>
          <li><strong>Telefon:</strong> ${phone}</li>
       
        </ul>
        <p>Başvurunuzun değerlendirme süreci başlayacak ve en kısa sürede sizinle iletişime geçilecektir.</p>
        <p style="font-size: 14px; color: #666;">Bu e-posta otomatik olarak oluşturulmuştur. Lütfen bu e-postaya yanıt vermeyin.</p>
        <hr style="border: 1px solid #eee; margin-top: 30px;">
        <p style="color: #999; font-size: 12px; text-align: center;">Elite Model Türkiye - Tüm Hakları Saklıdır.</p>
      </div>
    `;

    if (targetEmail) {
      await this.sendMail({
        to: targetEmail,
        subject: "Başvurunuz Alındı - Elite Model Türkiye",
        html: htmlContent,
      });
    }
  }
}
