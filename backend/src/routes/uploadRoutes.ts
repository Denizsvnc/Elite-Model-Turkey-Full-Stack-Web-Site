import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import prisma from '../lib/prisma';

const router = Router();

// Sanitize nested upload path like "Home/sliders"
function sanitizeFolder(input: unknown): string {
  const raw = String(input || 'sliders');
  const parts = raw.split('/').filter(Boolean);
  const safeParts = parts
    .map(p => p.replace(/[^a-zA-Z0-9_-]/g, ''))
    .filter(p => p.length > 0);
  return safeParts.length ? safeParts.join('/') : 'sliders';
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const safeFolder = sanitizeFolder(req.query.folder);
    // Haberler için tarih bazlı alt klasör ekle (News/YYYY/MM/DD)
    const now = new Date();
    const datePath = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')}`;
    const folderWithDate = safeFolder === 'News' || safeFolder.startsWith('News/')
      ? path.join(safeFolder, datePath)
      : safeFolder;

    const dest = path.resolve(process.cwd(), 'src/uploads', folderWithDate);
    fs.mkdirSync(dest, { recursive: true });
    cb(null, dest);
  },
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname) || '.dat';
    const base = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9_-]/g, '');
    const stamp = Date.now();
    cb(null, `${base}-${stamp}${ext}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
});

// POST /api/uploads?folder=Home/sliders
router.post('/', upload.single('file'), async (req, res) => {
  const safeFolder = sanitizeFolder(req.query.folder);
  if (!req.file) return res.status(400).json({ error: 'Dosya bulunamadı' });

  // Haberler için tarih bazlı alt klasör ekle (News/YYYY/MM/DD)
  const now = new Date();
  const datePath = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')}`;
  const folderWithDate = safeFolder === 'News' || safeFolder.startsWith('News/')
    ? `${safeFolder}/${datePath}`
    : safeFolder;

  const normalizedFolder = folderWithDate.replace(/\\/g, '/');
  const relativePath = `/uploads/${normalizedFolder}/${req.file.filename}`;

  // Eğer Success/hero klasörüne yükleme yapılıyorsa, eski dosyayı sil
  if (safeFolder === 'Success/hero') {
    try {
      const existingHero = await prisma.successHero.findFirst();
      if (existingHero && existingHero.imageUrl && existingHero.imageUrl.startsWith('/uploads/')) {
        const oldFilePath = path.join(process.cwd(), 'src', existingHero.imageUrl.replace('/uploads/', 'uploads/'));
        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
        }
      }
    } catch (err) {
      console.error('Eski dosya silinirken hata:', err);
    }
  }

  // Eğer Success/models klasörüne yükleme yapılıyorsa, eski dosyayı sil
  if (safeFolder === 'Success/models') {
    try {
      const existingModel = await prisma.successModelReview.findFirst();
      if (existingModel && existingModel.imageUrl && existingModel.imageUrl.startsWith('/uploads/')) {
        const oldFilePath = path.join(process.cwd(), 'src', existingModel.imageUrl.replace('/uploads/', 'uploads/'));
        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
        }
      }
    } catch (err) {
      console.error('Eski dosya silinirken hata:', err);
    }
  }

  // Eğer About/vision klasörüne yükleme yapılıyorsa, eski vision görselini sil
  if (safeFolder === 'About/vision') {
    try {
      const about = await prisma.aboutPage.findFirst();
      if (about && about.vision_imageUrl && about.vision_imageUrl.startsWith('/uploads/')) {
        const oldFilePath = path.join(process.cwd(), 'src', about.vision_imageUrl.replace('/uploads/', 'uploads/'));
        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
        }
      }
    } catch (err) {
      console.error('Eski vision görseli silinirken hata:', err);
    }
  }

  // Eğer About/mission klasörüne yükleme yapılıyorsa, eski mission görselini sil
  if (safeFolder === 'About/mission') {
    try {
      const about = await prisma.aboutPage.findFirst();
      if (about && about.mission_imageUrl && about.mission_imageUrl.startsWith('/uploads/')) {
        const oldFilePath = path.join(process.cwd(), 'src', about.mission_imageUrl.replace('/uploads/', 'uploads/'));
        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
        }
      }
    } catch (err) {
      console.error('Eski mission görseli silinirken hata:', err);
    }
  }

  res.status(201).json({
    fileName: req.file.filename,
    mimeType: req.file.mimetype,
    size: req.file.size,
    url: relativePath,
  });
});

export default router;
