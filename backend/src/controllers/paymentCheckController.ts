import { Request, Response } from 'express';
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

// --- GÜNCELLENMİŞ REGEX DESENLERİ ---

// 1. AÇIKLAMA FORMATI: 
// Eski sorunu çözen Regex. "Açıklama:" kelimesini ve tarihleri görmezden gelir.
// Sadece tire (-) ile ayrılmış Ad Soyad, Başvuru Adı ve Key'i alır.
const DESC_REGEX = /(?:Açıklama:)?\s*([a-zA-ZçğıöşüÇĞİÖŞÜ\s]+)\s-\s(.*?)\s-\s([A-Z0-9]{4})\b/i;

// 2. TUTAR FORMATI
const AMOUNT_REGEX = /([\d\.]+,\d{2})/; 

export const checkBankEmails = async (req: Request, res: Response) => {
    let connection: any = null; // Bağlantıyı dışarıda tanımla

    try {
        console.log("📨 Mail sunucusuna bağlanılıyor...", process.env.EMAIL_USER);
        
        connection = await imap.connect(imapConfig);
        await connection.openBox('INBOX');

        const searchCriteria = ['UNSEEN']; 
        const fetchOptions = {
            bodies: ['HEADER', 'TEXT'],
            markSeen: false 
        };

        const messages = await connection.search(searchCriteria, fetchOptions);

        if (messages.length === 0) {
            connection.end();
            return res.status(200).json({ message: "Yeni mail yok." });
        }

        let processedCount = 0;

        // --- ADIM 1: GÜNCEL BAŞVURU ÜCRETİNİ ÇEK ---
        const feeRecord = await prisma.applicationFee.findUnique({ where: { id: 1 } });

        if (!feeRecord) {
            console.error("❌ HATA: ApplicationFee tablosunda ID:1 kaydı bulunamadı!");
            connection.end();
            return res.status(500).json({ error: "Sistem ücret bilgisine erişemedi." });
        }

        const requiredAmount = Number(feeRecord.amount);
        console.log(`ℹ️ Beklenen Başvuru Ücreti: ${requiredAmount} TL`);

        // --- MAİLLERİ TARA ---
        for (const item of messages) {
            const all = item.parts.find((part: any) => part.which === 'TEXT');
            const id = item.attributes.uid;
            const idHeader = "Imap-Id: " + id + "\r\n";

            if (!all) continue;

            const parsed = await simpleParser(idHeader + all.body);
            const mailText = parsed.text || ""; 
            
            // Regex ile tara
            const descMatch = mailText.match(DESC_REGEX);
            const amountMatch = mailText.match(AMOUNT_REGEX);

            if (descMatch && amountMatch) {
                // Regex Grupları: [1]=AdSoyad, [2]=BaşvuruAdı, [3]=Key
                const mailName = descMatch[1].replace(/[\r\n]/g, '').trim(); // Satır sonlarını temizle
                const mailKey = descMatch[3].trim();
                
                // Tutarı parse et
                const cleanAmount = amountMatch[1].replace(/\./g, '').replace(',', '.');
                const mailAmount = parseFloat(cleanAmount);

                console.log(`🔍 İnceleniyor: ${mailName} | Key: ${mailKey} | Tutar: ${mailAmount}`);

                // --- ADIM 2: KEY İLE BAŞVURUYU BUL ---
                const application = await prisma.application.findUnique({
                    where: { paymentKey: mailKey }
                });

                if (application && application.status === 'REVIEW') {
                    
                    // --- ADIM 3: DOĞRULAMA ---
                    const isAmountValid = Math.abs(requiredAmount - mailAmount) < 1.0; 
                    const dbName = application.fullName.trim().toLowerCase();
                    const parsedMailName = mailName.toLowerCase();
                    
                    // İsim kontrolü (Opsiyonel ama log için iyi)
                    // "Deniz Sevinç" içinde "deniz sevinç" geçiyor mu diye bakar
                    const isNameValid = parsedMailName.includes(dbName);

                    if (!isAmountValid) {
                        console.log(`⚠️ Tutar Uyuşmazlığı: Beklenen ${requiredAmount}, Gelen ${mailAmount}`);
                        continue;
                    }

                    if (!isNameValid) {
                        console.log(`⚠️ İsim Tam Eşleşmedi: DB[${dbName}] vs Mail[${parsedMailName}] (Key doğru olduğu için devam ediliyor)`);
                    }

                    // --- ADIM 4: ONAYLA ---
                    if (isAmountValid) {
                        // 1. Veritabanını Güncelle
                        await prisma.application.update({
                            where: { id: application.id },
                            data: { 
                                status: 'ACCEPTED',
                                paymentAmount: mailAmount,
                                adminNotes: `Otomatik onaylandı. Ref: ${mailKey}, Gönderen: ${mailName}, Tutar: ${mailAmount}`
                            }
                        });

                        console.log(`✅ ONAYLANDI: ${application.fullName} (${mailKey})`);
                        processedCount++;

                        // 2. Maili "Okundu" Yap (HATA ÇIKARSA SİSTEM ÇÖKMESİN)
                        try {
                            await connection.addFlags(id, "\\Seen");
                        } catch (flagError) {
                            console.warn(`⚠️ UYARI: DB güncellendi ama mail 'okundu' yapılamadı. ID: ${id}`);
                            // Buradaki hata akışı bozmasın diye yutuyoruz.
                        }
                    }
                }
            }
        }

        return res.status(200).json({ 
            success: true, 
            processed: processedCount,
            message: `${processedCount} başvuru başarıyla onaylandı.`
        });

    } catch (error) {
        console.error("Ödeme Kontrol Hatası:", error);
        return res.status(500).json({ error: "İşlem sırasında hata oluştu." });
    } finally {
        // --- BAĞLANTIYI GÜVENLİ KAPAT ---
        if (connection) {
            try {
                connection.end();
            } catch (err) {
                console.log("Bağlantı kapatılırken önemsiz hata:", err);
            }
        }
    }
};