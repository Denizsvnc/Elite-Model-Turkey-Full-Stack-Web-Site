import nodemailer from 'nodemailer';
import prisma from '../lib/prisma';

interface EmailOptions {
    to: string;
    subject: string;
    html: string;
}

/**
 * Email gönderme helper fonksiyonu
 * System settings'ten email yapılandırmasını alır ve mail gönderir
 */
export async function sendEmail(options: EmailOptions): Promise<boolean> {
    try {
        // Email ayarlarını database'den çek
        const settings = await prisma.systemSetting.findMany({
            where: {
                group: 'email',
                isActive: true
            }
        });

        const settingsMap = settings.reduce((acc, setting) => {
            acc[setting.key] = setting.value || '';
            return acc;
        }, {} as Record<string, string>);

        // Email gönderme aktif mi?
        if (settingsMap.email_enabled !== 'true') {
            return false;
        }

        // Transporter oluştur
        const transporter = nodemailer.createTransport({
            host: settingsMap.email_smtp_host,
            port: parseInt(settingsMap.email_smtp_port || '587'),
            secure: settingsMap.email_smtp_secure === 'true', // true for 465, false for other ports
            auth: {
                user: settingsMap.email_smtp_user,
                pass: settingsMap.email_smtp_pass
            }
        });

        // Email gönder
        await transporter.sendMail({
            from: `"${settingsMap.email_from_name}" <${settingsMap.email_from_address}>`,
            to: options.to,
            subject: options.subject,
            html: options.html
        });

        return true;

    } catch (error) {
        return false;
    }
}

/**
 * Başvuru açılma bildirimi mail template'i
 */
export function getApplicationOpenedEmailTemplate(fullName: string, language: 'tr' | 'en' | 'de' | 'ru' = 'tr'): string {
    const content = {
        tr: {
            subject: 'Başvurular Açıldı! 🎉',
            greeting: `Merhaba ${fullName},`,
            message: 'Harika haber! The Elite Model Turkey başvuruları artık açık.',
            description: 'Size haber vermemizi istemiştiniz ve bugün başvuruları açtık. Hemen başvurunuzu yapabilirsiniz.',
            cta: 'Başvuru Yap',
            footer: 'Sorularınız için bizimle iletişime geçebilirsiniz.',
            regards: 'Saygılarımızla,<br>The Elite Model Turkey',
            applicationUrl: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/basvuru`
        },
        en: {
            subject: 'Applications Are Now Open! 🎉',
            greeting: `Hello ${fullName},`,
            message: 'Great news! The Elite Model Turkey applications are now open.',
            description: 'You requested to be notified, and today we opened applications. You can apply right now.',
            cta: 'Apply Now',
            footer: 'Feel free to contact us if you have any questions.',
            regards: 'Best Regards,<br>The Elite Model Turkey',
            applicationUrl: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/basvuru`
        },
        de: {
            subject: 'Bewerbungen Sind Jetzt Geöffnet! 🎉',
            greeting: `Hallo ${fullName},`,
            message: 'Tolle Neuigkeiten! Die Bewerbungen für The Elite Model Turkey sind jetzt geöffnet.',
            description: 'Sie haben um Benachrichtigung gebeten, und heute haben wir die Bewerbungen geöffnet. Sie können sich jetzt bewerben.',
            cta: 'Jetzt Bewerben',
            footer: 'Bei Fragen können Sie uns gerne kontaktieren.',
            regards: 'Mit freundlichen Grüßen,<br>The Elite Model Turkey',
            applicationUrl: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/basvuru`
        },
        ru: {
            subject: 'Заявки Теперь Открыты! 🎉',
            greeting: `Здравствуйте, ${fullName}`,
            message: 'Отличные новости! Заявки в The Elite Model Turkey теперь открыты.',
            description: 'Вы просили уведомить вас, и сегодня мы открыли заявки. Вы можете подать заявку прямо сейчас.',
            cta: 'Подать Заявку',
            footer: 'Если у вас есть вопросы, свяжитесь с нами.',
            regards: 'С уважением,<br>The Elite Model Turkey',
            applicationUrl: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/basvuru`
        }
    };

    const t = content[language];

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1e293b; margin: 0; padding: 0; background-color: #f8fafc; }
        .container { max-width: 600px; margin: 40px auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
        .header { background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: white; padding: 40px 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; font-weight: bold; }
        .content { padding: 40px 30px; }
        .content p { margin: 0 0 20px; color: #475569; }
        .cta-button { display: inline-block; background: #1e40af; color: white; padding: 16px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; margin: 20px 0; }
        .cta-button:hover { background: #1e3a8a; }
        .footer { padding: 30px; background: #f1f5f9; text-align: center; color: #64748b; font-size: 14px; }
        .footer a { color: #3b82f6; text-decoration: none; }
        .divider { height: 1px; background: #e2e8f0; margin: 30px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>✨ ${t.subject}</h1>
        </div>
        <div class="content">
            <p><strong>${t.greeting}</strong></p>
            <p style="font-size: 18px; font-weight: 600; color: #1e293b;">${t.message}</p>
            <p>${t.description}</p>
            <div style="text-align: center;">
                <a href="${t.applicationUrl}" class="cta-button">${t.cta}</a>
            </div>
            <div class="divider"></div>
            <p style="font-size: 14px;">${t.footer}</p>
            <p style="font-size: 14px;"><strong>${t.regards}</strong></p>
        </div>
        <div class="footer">
            <p>The Elite Model Turkey<br>
            <a href="${process.env.FRONTEND_URL || 'http://localhost:3000'}">${process.env.FRONTEND_URL || 'http://localhost:3000'}</a></p>
        </div>
    </div>
</body>
</html>
    `;
}
