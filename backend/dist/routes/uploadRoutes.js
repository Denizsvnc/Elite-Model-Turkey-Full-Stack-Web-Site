"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const prisma_1 = __importDefault(require("../lib/prisma"));
const rateLimiter_1 = require("../middleware/rateLimiter");
const router = (0, express_1.Router)();
const ALLOWED_MIME_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
    "image/webp",
];
const ALLOWED_FOLDERS = ["Applications", "Home", "News", "About", "Success"];
function sanitizeFolder(input) {
    const raw = String(input || "sliders");
    if (raw.includes("..") || raw.includes("~")) {
        throw new Error("Geçersiz klasör yolu");
    }
    const parts = raw.split("/").filter(Boolean);
    const safeParts = parts
        .map((p) => p.replace(/[^a-zA-Z0-9_-]/g, ""))
        .filter((p) => p.length > 0);
    if (safeParts.length === 0) {
        return "sliders";
    }
    const sanitized = safeParts.join("/");
    if (!ALLOWED_FOLDERS.some((folder) => sanitized === folder || sanitized.startsWith(folder + "/"))) {
        throw new Error(`Klasör izin verilen listede değil: ${sanitized}`);
    }
    return sanitized;
}
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        const safeFolder = sanitizeFolder(req.query.folder);
        const now = new Date();
        const datePath = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, "0")}/${String(now.getDate()).padStart(2, "0")}`;
        const folderWithDate = safeFolder === "News" || safeFolder.startsWith("News/")
            ? path_1.default.join(safeFolder, datePath)
            : safeFolder;
        const dest = path_1.default.resolve(process.cwd(), "src/uploads", folderWithDate);
        fs_1.default.mkdirSync(dest, { recursive: true });
        cb(null, dest);
    },
    filename: (_req, file, cb) => {
        const ext = path_1.default.extname(file.originalname) || ".dat";
        const base = path_1.default
            .basename(file.originalname, ext)
            .replace(/[^a-zA-Z0-9_-]/g, "");
        const stamp = Date.now();
        cb(null, `${base}-${stamp}${ext}`);
    },
});
const fileFilter = (req, file, cb) => {
    if (ALLOWED_MIME_TYPES.includes(file.mimetype)) {
        const ext = path_1.default.extname(file.originalname).toLowerCase();
        const allowedExts = [".jpg", ".jpeg", ".png", ".gif", ".webp"];
        if (allowedExts.includes(ext)) {
            cb(null, true);
        }
        else {
            cb(new Error("Geçersiz dosya uzantısı"), false);
        }
    }
    else {
        cb(new Error("Sadece resim dosyaları yüklenebilir"), false);
    }
};
const upload = (0, multer_1.default)({
    storage,
    limits: {
        fileSize: 10 * 1024 * 1024,
        files: 1,
    },
    fileFilter,
});
router.post("/", rateLimiter_1.uploadLimiter, upload.single("file"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const safeFolder = sanitizeFolder(req.query.folder);
    if (!req.file)
        return res.status(400).json({ error: "Dosya bulunamadı" });
    // Haberler için tarih bazlı alt klasör ekle (News/YYYY/MM/DD)
    const now = new Date();
    const datePath = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, "0")}/${String(now.getDate()).padStart(2, "0")}`;
    const folderWithDate = safeFolder === "News" || safeFolder.startsWith("News/")
        ? `${safeFolder}/${datePath}`
        : safeFolder;
    const normalizedFolder = folderWithDate.replace(/\\/g, "/");
    const relativePath = `/uploads/${normalizedFolder}/${req.file.filename}`;
    // Eğer Success/hero klasörüne yükleme yapılıyorsa, eski dosyayı sil
    if (safeFolder === "Success/hero") {
        try {
            const existingHero = yield prisma_1.default.successHero.findFirst();
            if (existingHero &&
                existingHero.imageUrl &&
                existingHero.imageUrl.startsWith("/uploads/")) {
                const oldFilePath = path_1.default.join(process.cwd(), "src", existingHero.imageUrl.replace("/uploads/", "uploads/"));
                if (fs_1.default.existsSync(oldFilePath)) {
                    fs_1.default.unlinkSync(oldFilePath);
                }
            }
        }
        catch (err) {
            console.error("Eski dosya silinirken hata:", err);
        }
    }
    // Eğer Success/models klasörüne yükleme yapılıyorsa, eski dosyayı sil
    if (safeFolder === "Success/models") {
        try {
            const existingModel = yield prisma_1.default.successModelReview.findFirst();
            if (existingModel &&
                existingModel.imageUrl &&
                existingModel.imageUrl.startsWith("/uploads/")) {
                const oldFilePath = path_1.default.join(process.cwd(), "src", existingModel.imageUrl.replace("/uploads/", "uploads/"));
                if (fs_1.default.existsSync(oldFilePath)) {
                    fs_1.default.unlinkSync(oldFilePath);
                }
            }
        }
        catch (err) {
            console.error("Eski dosya silinirken hata:", err);
        }
    }
    // Eğer About/vision klasörüne yükleme yapılıyorsa, eski vision görselini sil
    if (safeFolder === "About/vision") {
        try {
            const about = yield prisma_1.default.aboutPage.findFirst();
            if (about &&
                about.vision_imageUrl &&
                about.vision_imageUrl.startsWith("/uploads/")) {
                const oldFilePath = path_1.default.join(process.cwd(), "src", about.vision_imageUrl.replace("/uploads/", "uploads/"));
                if (fs_1.default.existsSync(oldFilePath)) {
                    fs_1.default.unlinkSync(oldFilePath);
                }
            }
        }
        catch (err) {
            console.error("Eski vision görseli silinirken hata:", err);
        }
    }
    // Eğer About/mission klasörüne yükleme yapılıyorsa, eski mission görselini sil
    if (safeFolder === "About/mission") {
        try {
            const about = yield prisma_1.default.aboutPage.findFirst();
            if (about &&
                about.mission_imageUrl &&
                about.mission_imageUrl.startsWith("/uploads/")) {
                const oldFilePath = path_1.default.join(process.cwd(), "src", about.mission_imageUrl.replace("/uploads/", "uploads/"));
                if (fs_1.default.existsSync(oldFilePath)) {
                    fs_1.default.unlinkSync(oldFilePath);
                }
            }
        }
        catch (err) {
            console.error("Eski mission görseli silinirken hata:", err);
        }
    }
    res.status(201).json({
        fileName: req.file.filename,
        mimeType: req.file.mimetype,
        size: req.file.size,
        url: relativePath,
    });
}));
exports.default = router;
//# sourceMappingURL=uploadRoutes.js.map