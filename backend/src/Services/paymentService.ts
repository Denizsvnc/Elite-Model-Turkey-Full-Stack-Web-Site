import imap from 'imap-simple';
import { simpleParser } from 'mailparser';
import prisma from '../lib/prisma';

// TypeScript modül tanımları
declare module 'imap-simple';
declare module 'mailparser';

// --- AYARLAR ---
const imapConfig = {
    imap: {
        user: process.env.EMAIL_USER || '', 
        password: process.env.EMAIL_PASS || '',
        host: 'imap.gmail.com',
        port: 993,
        tls: true,
        authTimeout: 10000,
        tlsOptions: { rejectUnauthorized: false }
    }
};

// eski hali (yedek):
// const DESC_REGEX = /(?:Açıklama:)?\s*([a-zA-ZçğıöşüÇĞİÖŞÜ\s]+)\s-\s(.*?)\s-\s([A-Z0-9]{4})\b/i;

const DESC_REGEX = /(?:Açıklama:)?[\s\u00A0]*([a-zA-ZçğıöşüÇĞİÖŞÜ\s\u00A0]+?)[\s\u00A0]*[-–][\s\u00A0]*(.*?)[\s\u00A0]*[-–][\s\u00A0]*([A-Z0-9]{4})\b/i;
const AMOUNT_REGEX = /([\d\.]+,\d{2})/; 

// Bu fonksiyon artık bir "Servis"tir. Her yerden çağrılabilir.
export const processBankEmailsService = async () => {
    let connection: any = null;
    let processedCount = 0;

    try {
        console.log("📨 Servis Başlatıldı: Mail sunucusuna bağlanılıyor...");
        
        connection = await imap.connect(imapConfig);
        await connection.openBox('INBOX');

        const searchCriteria = ['UNSEEN']; 
        const fetchOptions = { bodies: ['HEADER', 'TEXT'], markSeen: false };
        const messages = await connection.search(searchCriteria, fetchOptions);

        if (messages.length === 0) {
            // Bağlantıyı burada kapatıp dönüyoruz
            connection.end();
            return { success: true, processed: 0, message: "Yeni mail yok." };
        }

        const feeRecord = await prisma.applicationFee.findUnique({ where: { id: 1 } });
        const requiredAmount = Number(feeRecord?.amount || 0);

        for (const item of messages) {
            // ... (Controller'daki döngü mantığının AYNISI buraya gelecek) ...
            
            const all = item.parts.find((part: any) => part.which === 'TEXT');
            const id = item.attributes.uid;
            const idHeader = "Imap-Id: " + id + "\r\n";

            if (!all) continue;

            const parsed = await simpleParser(idHeader + all.body);
            const mailText = parsed.text || ""; 
            
            const descMatch = mailText.match(DESC_REGEX);
            const amountMatch = mailText.match(AMOUNT_REGEX);
            

            if (descMatch && amountMatch) {
                const mailName = descMatch[1].replace(/[\r\n]/g, '').trim();
                const mailKey = descMatch[3].trim();
                const cleanAmount = amountMatch[1].replace(/\./g, '').replace(',', '.');
                const mailAmount = parseFloat(cleanAmount);

                const application = await prisma.application.findUnique({ where: { paymentKey: mailKey } });

                if (application && application.status === 'REVIEW') {
                    const isAmountValid = Math.abs(requiredAmount - mailAmount) < 1.0; 
                    
                    if (isAmountValid) {
                        await prisma.application.update({
                            where: { id: application.id },
                            data: { 
                                status: 'ACCEPTED',
                                paymentAmount: mailAmount,
                                adminNotes: `Otomatik onaylandı. Ref: ${mailKey}, Gönderen: ${mailName}, Tutar: ${mailAmount}`
                            }
                        });
                        processedCount++;
                        try { await connection.addFlags(id, "\\Seen"); } catch (e) {}
                    }
                }
            }
        }
        
        return { success: true, processed: processedCount, message: "İşlem tamamlandı" };

    } catch (error) {
        console.error("Servis Hatası:", error);
        throw error; // Hatayı fırlatıyoruz ki üst katman yakalasın
    } finally {
        if (connection) {
            try { connection.end(); } catch (e) {}
        }
    }
};