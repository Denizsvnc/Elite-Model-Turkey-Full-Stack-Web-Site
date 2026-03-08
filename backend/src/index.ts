import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import cron from "node-cron";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser";
import prisma from "./lib/prisma";
import { validateEnv } from "./config/validateEnv";

dotenv.config();
validateEnv();

import authRoutes from "./routes/authRoutes";
import sliderRoutes from "./routes/sliderRoutes";
import coverImageRoutes from "./routes/coverImageRoutes";
import successHeroRoutes from "./routes/successHeroRoutes";
import successModelReviewRoutes from "./routes/successModelReviewRoutes";
import featuredItemRoutes from "./routes/featuredItemRoutes";
import newsRoutes from "./routes/newsRoutes";
import aboutPageRoutes from "./routes/aboutPageRoutes";
import contactInfoRoutes from "./routes/contactInfoRoutes";
import faqRoutes from "./routes/faqRoutes";
import applicationRoutes from "./routes/applicationRoutes";
import contactMessageRoutes from "./routes/contactMessageRoutes";
import uploadRoutes from "./routes/uploadRoutes";
import feeRoutes from "./routes/feeRoutes";
import systemSettingRoutes from "./routes/systemSettingRoutes";
import notificationRuleRoutes from "./routes/notificationRuleRoutes";
import socialMediaRoutes from "./routes/socialMediaRoutes";
import paymentRoutes from "./routes/paymentRoutes";
import statsRoutes from "./routes/statsRoutes";
import applicationPageRoutes from "./routes/applicationPage.routes";
import applicationNotificationRoutes from "./routes/applicationNotificationRoutes";
import {
  loginLimiter,
  applicationLimiter,
  contactLimiter,
  uploadLimiter,
} from "./middleware/rateLimiter";

const app = express();
const PORT = process.env.PORT || 3005;

const allowedOrigins = [
  process.env.CORS_ORIGIN,
  process.env.FRONTEND_URL,
  "http://localhost:3000",
  "http://localhost:5173",
].filter((v, i, a) => v && a.indexOf(v) === i) as string[];


app.use("/api/payments", paymentRoutes);

app.use(
  cors({
    origin: (origin, callback) => {
      if (origin && allowedOrigins.includes(origin)) {
        callback(null, true);
      } else if (!origin && process.env.NODE_ENV === "development") {
        callback(null, true);
      } else {
        callback(new Error("CORS politikası tarafından engellendi"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    maxAge: 86400,
  }),
);

app.use(express.json());

const uploadsDir = path.resolve(process.cwd(), "src/uploads");
app.use("/uploads", express.static(uploadsDir));

app.disable("x-powered-by");

app.use(
  helmet({
    contentSecurityPolicy:
      process.env.NODE_ENV === "production"
        ? {
            directives: {
              defaultSrc: ["'self'"],
              styleSrc: [
                "'self'",
                "'unsafe-inline'",
                "https://fonts.googleapis.com",
              ],
              fontSrc: ["'self'", "https://fonts.gstatic.com"],
              imgSrc: ["'self'", "data:", "https:", "http:", "blob:"],
              scriptSrc: ["'self'"],
              connectSrc: ["'self'", ...allowedOrigins],
              frameSrc: ["'none'"],
              objectSrc: ["'none'"],
            },
          }
        : false,
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy:
      process.env.NODE_ENV === "production"
        ? { policy: "cross-origin" }
        : false,
    hsts:
      process.env.NODE_ENV === "production"
        ? {
            maxAge: 31536000,
            includeSubDomains: true,
            preload: true,
          }
        : false,
  }),
);

app.use(cookieParser());
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/cover-images", coverImageRoutes);
app.use("/api/sliders", sliderRoutes);
app.use("/api/success-heroes", successHeroRoutes);
app.use("/api/success-model-reviews", successModelReviewRoutes);
app.use("/api/featured-items", featuredItemRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/about", aboutPageRoutes);
app.use("/api/contact-info", contactInfoRoutes);
app.use("/api/faqs", faqRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/application-page", applicationPageRoutes);
app.use("/api/application-notifications", applicationNotificationRoutes);
app.use("/api/contact-messages", contactMessageRoutes);
app.use("/api/uploads", uploadRoutes);
app.use("/api/fee", feeRoutes);
app.use("/api/admin/settings", systemSettingRoutes);
app.use("/api/admin/rules", notificationRuleRoutes);
app.use("/api/socials", socialMediaRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Elite Model Backend API çalışıyor");
});

app.listen(PORT, () => {
  console.log(`Sunucu şu portda çalışıyor: ${PORT}`);
});
