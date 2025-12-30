import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import cron from 'node-cron'; // YENİ: Zamanlayıcı için eklendi
import axios from 'axios';    // YENİ: API isteği için eklendi
import prisma from './lib/prisma';

// Route Importları
import authRoutes from './routes/authRoutes';
import sliderRoutes from './routes/sliderRoutes';
import coverImageRoutes from './routes/coverImageRoutes';
import successHeroRoutes from './routes/successHeroRoutes';
import successModelReviewRoutes from './routes/successModelReviewRoutes';
import featuredItemRoutes from './routes/featuredItemRoutes';
import newsRoutes from './routes/newsRoutes';
import aboutPageRoutes from './routes/aboutPageRoutes';
import contactInfoRoutes from './routes/contactInfoRoutes';
import faqRoutes from './routes/faqRoutes';
import applicationRoutes from './routes/applicationRoutes';
import contactMessageRoutes from './routes/contactMessageRoutes';
import uploadRoutes from './routes/uploadRoutes';
import feeRoutes from './routes/feeRoutes';
import systemSettingRoutes from './routes/systemSettingRoutes';
import notificationRuleRoutes from './routes/notificationRuleRoutes';
import socialMediaRoutes from './routes/socialMediaRoutes';
import paymentRotes from './routes/paymentRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());

// Serve static uploads
const uploadsDir = path.resolve(process.cwd(), 'src/uploads');
app.use('/uploads', express.static(uploadsDir));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/cover-images', coverImageRoutes);
app.use('/api/sliders', sliderRoutes);
app.use('/api/success-heroes', successHeroRoutes);
app.use('/api/success-model-reviews', successModelReviewRoutes);
app.use('/api/featured-items', featuredItemRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/about', aboutPageRoutes);
app.use('/api/contact-info', contactInfoRoutes);
app.use('/api/faqs', faqRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/contact-messages', contactMessageRoutes);
app.use('/api/uploads', uploadRoutes);
app.use('/api/fee', feeRoutes);
app.use('/api/admin/settings', systemSettingRoutes);
app.use('/api/admin/rules', notificationRuleRoutes);
app.use('/api/socials', socialMediaRoutes);
app.use('/api/payment', paymentRotes);

// Health check api
app.get('/', (req, res) => {
    res.send('Elite Model Backend API çalışıyor');
});

// --- SUNUCU BAŞLATMA VE ROBOT KURULUMU ---
app.listen(PORT, () => {
    console.log(`Sunucu şu portda çalışıyor: ${PORT}`);

    // ============================================================
    // 🤖 AKILLI ÖDEME KONTROL ROBOTU (CRON JOB)
    // ============================================================
    console.log("🧠 Akıllı Robot Devrede: Her 5 dakikada bir bekleyen ödemeleri kontrol edecek.");

    // Cron Zamanlaması: '*/5 * * * *' -> Her 5 dakikada bir çalışır
    cron.schedule('*/5 * * * *', async () => {
        try {
            // 1. ADIM: Bekleyen (REVIEW) başvuru var mı?
            const pendingCount = await prisma.application.count({
                where: {
                    status: 'REVIEW'
                }
            });

            // Eğer bekleyen yoksa Gmail'e bağlanma (Kaynak Tasarrufu)
            if (pendingCount === 0) {
                // Log kirliliği olmaması için burası boş bırakılabilir veya debug için açılabilir
                // console.log("💤 Robot: Bekleyen ödeme yok, uyumaya devam.");
                return; 
            }

            console.log(`🔔 DİKKAT: ${pendingCount} adet bekleyen ödeme var. Mail sunucusu taranıyor...`);

            // 2. ADIM: Kendi API'mizi tetikle
            // Localhost üzerinden check-emails endpoint'ine istek atıyoruz
            const response = await axios.get(`http://localhost:${PORT}/api/payment/check-emails`);
            
            if (response.data.processed > 0) {
                console.log(`✅ ROBOT RAPORU: ${response.data.processed} adet başvuru otomatik onaylandı!`);
            } else {
                console.log("👀 Mail kutusu kontrol edildi, henüz eşleşen ödeme yok.");
            }

        } catch (error: any) {
            // Hata mesajını güvenli yazdırma
            console.error("❌ Robot Hatası:", error.message || error);
        }
    });
});