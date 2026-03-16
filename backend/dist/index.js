"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const validateEnv_1 = require("./config/validateEnv");
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const sliderRoutes_1 = __importDefault(require("./routes/sliderRoutes"));
const coverImageRoutes_1 = __importDefault(require("./routes/coverImageRoutes"));
const successHeroRoutes_1 = __importDefault(require("./routes/successHeroRoutes"));
const successModelReviewRoutes_1 = __importDefault(require("./routes/successModelReviewRoutes"));
const featuredItemRoutes_1 = __importDefault(require("./routes/featuredItemRoutes"));
const newsRoutes_1 = __importDefault(require("./routes/newsRoutes"));
const aboutPageRoutes_1 = __importDefault(require("./routes/aboutPageRoutes"));
const contactInfoRoutes_1 = __importDefault(require("./routes/contactInfoRoutes"));
const faqRoutes_1 = __importDefault(require("./routes/faqRoutes"));
const applicationRoutes_1 = __importDefault(require("./routes/applicationRoutes"));
const contactMessageRoutes_1 = __importDefault(require("./routes/contactMessageRoutes"));
const uploadRoutes_1 = __importDefault(require("./routes/uploadRoutes"));
const feeRoutes_1 = __importDefault(require("./routes/feeRoutes"));
const systemSettingRoutes_1 = __importDefault(require("./routes/systemSettingRoutes"));
const notificationRuleRoutes_1 = __importDefault(require("./routes/notificationRuleRoutes"));
const socialMediaRoutes_1 = __importDefault(require("./routes/socialMediaRoutes"));
const paymentRoutes_1 = __importDefault(require("./routes/paymentRoutes"));
dotenv_1.default.config();
// Validate required environment variables (throws if missing/invalid)
(0, validateEnv_1.validateEnv)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3005;
const corsOrigin = process.env.CORS_ORIGIN || "*";
const corsOptions = corsOrigin === "*"
    ? { origin: "*" }
    : { origin: corsOrigin, credentials: true, optionsSuccessStatus: 200 };
app.use((0, cors_1.default)(corsOptions));
// Manual preflight handler to avoid using wildcard route strings
app.use((req, res, next) => {
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Origin", corsOrigin);
        res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS");
        const reqHeaders = req.header("Access-Control-Request-Headers");
        if (reqHeaders)
            res.header("Access-Control-Allow-Headers", reqHeaders);
        if (corsOptions && corsOptions.credentials)
            res.header("Access-Control-Allow-Credentials", "true");
        return res.sendStatus(200);
    }
    next();
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Serve static uploads
const uploadsDir = path_1.default.resolve(process.cwd(), "src/uploads");
app.use("/uploads", express_1.default.static(uploadsDir));
// Routes
app.use("/api/auth", authRoutes_1.default);
app.use("/api/cover-images", coverImageRoutes_1.default);
app.use("/api/sliders", sliderRoutes_1.default);
app.use("/api/success-heroes", successHeroRoutes_1.default);
app.use("/api/success-model-reviews", successModelReviewRoutes_1.default);
app.use("/api/featured-items", featuredItemRoutes_1.default);
app.use("/api/news", newsRoutes_1.default);
app.use("/api/about", aboutPageRoutes_1.default);
app.use("/api/contact-info", contactInfoRoutes_1.default);
app.use("/api/faqs", faqRoutes_1.default);
app.use("/api/applications", applicationRoutes_1.default);
app.use("/api/contact-messages", contactMessageRoutes_1.default);
app.use("/api/uploads", uploadRoutes_1.default);
app.use("/api/fee", feeRoutes_1.default);
app.use("/api/admin/settings", systemSettingRoutes_1.default);
app.use("/api/admin/rules", notificationRuleRoutes_1.default);
app.use("/api/socials", socialMediaRoutes_1.default);
app.use("/api/payments", paymentRoutes_1.default);
app.get("/", (req, res) => {
    res.send("Elite Model Backend API çalışıyor");
});
app.listen(PORT, () => {
    console.log(`Sunucu şu portda çalışıyor: ${PORT}`);
});
//# sourceMappingURL=index.js.map