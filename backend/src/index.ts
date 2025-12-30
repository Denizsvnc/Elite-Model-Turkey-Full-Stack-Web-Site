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
import { processBankEmailsService } from "./Services/paymentService";
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
    console.log("🧠 Odeme Kontrol Robot Devrede: Her 2 dakikada bir bekleyen ödemeleri kontrol edecek. not : daha sonra sureyi uzat");

    // Cron Zamanlaması: '*/5 * * * *' -> Her 5 dakikada bir çalışır
    cron.schedule('*/2 * * * *', async () => {
        try {
            // 1. Bekleyen kontrolü
            const pendingCount = await prisma.application.count({
                where: { status: 'REVIEW' }
            });

            if (pendingCount === 0) return;

            console.log(`🔔 DİKKAT: ${pendingCount} bekleyen ödeme. Servis başlatılıyor...`);

            // 2. API üzerinden mail kontrol endpoint'ini çağır
            const result = await processBankEmailsService();
            
            if (result.processed > 0) {
                console.log(`✅ ROBOT RAPORU: ${result.processed} adet başvuru onaylandı!`);
            } else {
                console.log("👀 Kontrol edildi, henüz ödeme yok.");
            }

        } catch (error: any) {
            console.error("❌ Robot Hatası:", error.message || error);
        }
    });
});