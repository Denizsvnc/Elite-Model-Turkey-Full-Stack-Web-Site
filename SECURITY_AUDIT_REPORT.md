# 🔒 GÜVENLİK DENETİM RAPORU
## Elite Model Turkey - Siber Güvenlik Analizi
**Tarih:** 26 Şubat 2026  
**Denetim Kapsamı:** Full-Stack Uygulama (React/TypeScript + Node.js/Express/Prisma)

---

## 📊 YÖNETİCİ ÖZETİ

| Önem Derecesi | Adet | Durum |
|---------------|------|-------|
| 🚨 **KRİTİK** | 5 | **Acil Müdahale Gerekli** |
| ⚠️ **YÜKSEK** | 5 | **1 Hafta İçinde Düzelt** |
| 🔶 **ORTA** | 7 | **1 Ay İçinde Düzelt** |
| 🔵 **DÜŞÜK** | 6 | **En İyi Uygulamalar** |

**Toplam Tespit Edilen Sorun:** 23

---

## 🚨 KRİTİK SEVİYE GÜVENLIK AÇIKLARI (Acil Eylem Gerekli)

### 1. JWT Token'ları Süresiz Geçerli ❌
**Dosya:** [backend/src/controllers/authController.ts](backend/src/controllers/authController.ts#L78-L87)

**Sorun:** JWT token'ları son kullanma tarihi olmadan oluşturuluyor.

```typescript
// MEVCUT KOD (GÜVENSİZ)
const token = jwt.sign(
    {
        id: adminUser.id,
        email: adminUser.email,
        role: adminUser.role
    },
    process.env.JWT_SECRET!
);
```

**Güvenlik Riski:**
- ❌ Çalınan token'lar sonsuza kadar geçerli kalıyor
- ❌ Otomatik oturum zaman aşımı yok
- ❌ Tehlikeye giren token'lar doğal olarak sona eremiyor

**Önerilen Çözüm:**
```typescript
// GÜVENLİ KOD
const token = jwt.sign(
    {
        id: adminUser.id,
        email: adminUser.email,
        role: adminUser.role
    },
    process.env.JWT_SECRET!,
    { expiresIn: '8h' } // 8 saat sonra otomatik sona erer
);
```

**Etki:** ⭐⭐⭐⭐⭐ (Kritik)

---

### 2. JWT_SECRET Doğrulaması Eksik ❌
**Dosyalar:** 
- [backend/src/controllers/authController.ts](backend/src/controllers/authController.ts#L86)
- [backend/src/middleware/auth.ts](backend/src/middleware/auth.ts#L24)

**Sorun:** `process.env.JWT_SECRET!` tanımlı olup olmadığı kontrol edilmeden kullanılıyor.

**Güvenlik Riski:**
- ❌ JWT_SECRET tanımlı değilse token'lar `undefined` ile imzalanır
- ❌ Tüm token'lar geçersiz veya tahmin edilebilir hale gelir
- ❌ Uygulama çökmesi veya güvenlik atlatma

**Önerilen Çözüm:**
```typescript
// server.ts veya config dosyasında
if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET ortam değişkeni tanımlanmamış!');
}

// Veya güvenli getter fonksiyonu
const getJWTSecret = (): string => {
    const secret = process.env.JWT_SECRET;
    if (!secret || secret.length < 32) {
        throw new Error('JWT_SECRET tanımlı değil veya çok kısa (min 32 karakter)');
    }
    return secret;
};
```

**Etki:** ⭐⭐⭐⭐⭐ (Kritik)

---

### 3. Varsayılan Admin Şifresi Zayıf ve Açıkta ❌
**Dosya:** [backend/prisma/seed.ts](backend/prisma/seed.ts#L8)

**Sorun:** Varsayılan admin şifresi `admin123` ve kodda görünür durumda.

```typescript
// GÜVENSİZ - Halka açık
const hashedPassword = await bcrypt.hash('admin123', 10);
```

**Güvenlik Riski:**
- ❌ Saldırganlar şifre değiştirilmemişse admin erişimi elde edebilir
- ❌ Varsayılan kimlik bilgileri yaygın saldırı hedefidir
- ❌ Kritik sistem ele geçirme riski

**Önerilen Çözüm:**
```typescript
// GÜVENLİ - Rastgele şifre oluştur
import crypto from 'crypto';

const randomPassword = crypto.randomBytes(16).toString('hex');
const hashedPassword = await bcrypt.hash(randomPassword, 10);

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('🔐 YÖNETİCİ ŞİFRESİ (GÜVENLİ YERDE SAKLAYIN):');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`   ${randomPassword}`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

// + İlk giriş sonrası şifre değiştirme zorunluluğu ekle
```

**Etki:** ⭐⭐⭐⭐⭐ (Kritik)

---

### 4. Sabit Kodlanmış Admin Kimlik Bilgileri ❌
**Dosya:** [backend/update-admin.ts](backend/update-admin.ts#L6-L8)

**Sorun:** Script içinde kimlik bilgileri sabitlenmiş.

```typescript
// GÜVENSİZ - VERSİYON KONTROLÜNDE
const newEmail = 'admin@com';
const newPassword = '123'; // ÇOK ZAYIF!
```

**Güvenlik Riski:**
- ❌ Aşırı zayıf şifre ('123')
- ❌ Kimlik bilgileri Git'te saklanıyor
- ❌ Yetkisiz erişim potansiyeli

**Önerilen Çözüm:**
```bash
# Bu dosyayı sil veya .gitignore'a ekle
echo "update-admin.ts" >> .gitignore

# Ortam değişkenleri kullan
ADMIN_EMAIL=admin@example.com ADMIN_PASSWORD=strong_password npm run update-admin
```

```typescript
// update-admin.ts - GÜVENLİ VERSIYONU
const newEmail = process.env.ADMIN_EMAIL;
const newPassword = process.env.ADMIN_PASSWORD;

if (!newEmail || !newPassword) {
    throw new Error('ADMIN_EMAIL ve ADMIN_PASSWORD ortam değişkenleri gerekli');
}
```

**Etki:** ⭐⭐⭐⭐⭐ (Kritik)

---

### 5. Dosya Yükleme Tip Doğrulaması Eksik ❌
**Dosya:** [backend/src/routes/uploadRoutes.ts](backend/src/routes/uploadRoutes.ts#L43-L48)

**Sorun:** Multer dosya boyutunu sınırlarken, MIME tipi backend'de doğrulanmıyor.

```typescript
// MEVCUT KOD - ZAYIF
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Sadece boyut kontrolü
});
```

**Güvenlik Riski:**
- ❌ Kullanıcılar çalıştırılabilir dosyalar yükleyebilir (.php, .exe, .jsp)
- ❌ Web shell yükleme potansiyeli
- ❌ Sunucu ele geçirme olasılığı

**Önerilen Çözüm:**
```typescript
// GÜVENLİ KOD
const fileFilter = (req: any, file: any, cb: any) => {
    // Sadece resim dosyalarına izin ver
    const allowedMimeTypes = [
        'image/jpeg',
        'image/jpg', 
        'image/png', 
        'image/gif', 
        'image/webp'
    ];
    
    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Geçersiz dosya tipi. Sadece resim dosyaları yüklenebilir.'), false);
    }
};

const upload = multer({
    storage,
    limits: { 
        fileSize: 10 * 1024 * 1024, // 10MB
        files: 1 // Tek seferde 1 dosya
    },
    fileFilter: fileFilter
});
```

**Ek Güvenlik Katmanları:**
```typescript
// Dosya uzantısı doğrulaması
const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
const ext = path.extname(file.originalname).toLowerCase();
if (!allowedExtensions.includes(ext)) {
    return cb(new Error('Geçersiz dosya uzantısı'));
}

// Dosya imzası kontrolü (magic bytes)
const fileBuffer = fs.readFileSync(file.path);
const fileType = await FileType.fromBuffer(fileBuffer);
if (!fileType || !allowedMimeTypes.includes(fileType.mime)) {
    return cb(new Error('Dosya içeriği geçersiz'));
}
```

**Etki:** ⭐⭐⭐⭐⭐ (Kritik)

---

## ⚠️ YÜKSEK ÖNCELİKLİ SORUNLAR

### 6. Kimlik Doğrulama Endpoint'lerinde Rate Limiting Yok ⚠️
**Dosya:** [backend/src/index.ts](backend/src/index.ts)

**Sorun:** API'de rate limiting middleware yoksu veya yapılandırılmamış.

**Güvenlik Riski:**
- ❌ Login endpoint'ine brute force saldırıları
- ❌ API kötüye kullanımı ve DoS
- ❌ Hesap numaralandırma (account enumeration)

**Önerilen Çözüm:**
```bash
npm install express-rate-limit
```

```typescript
import rateLimit from 'express-rate-limit';

// Login için özel limiter
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 dakika
    max: 5, // Pencere başına 5 deneme
    message: 'Çok fazla giriş denemesi. Lütfen 15 dakika sonra tekrar deneyin.',
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
        res.status(429).json({
            error: 'Çok fazla istek',
            retryAfter: 15 * 60 // saniye
        });
    }
});

// Başvuru formu için limiter
const applicationLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 saat
    max: 3, // Saatte 3 başvuru
    message: 'Saatte en fazla 3 başvuru yapabilirsiniz.'
});

// İletişim formu için limiter
const contactLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 saat
    max: 5, // Saatte 5 mesaj
    message: 'Çok fazla mesaj gönderdiniz. Lütfen bir süre bekleyin.'
});

// Dosya yükleme için limiter
const uploadLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 dakika
    max: 10, // 15 dakikada 10 dosya
    message: 'Çok fazla dosya yükleme denemesi.'
});

// Route'lara uygula
router.post('/api/auth/login', loginLimiter, authController.login);
router.post('/api/applications', applicationLimiter, applicationController.create);
router.post('/api/contact', contactLimiter, contactController.create);
router.post('/api/uploads', uploadLimiter, uploadController.upload);
```

**Etki:** ⭐⭐⭐⭐ (Yüksek)

---

### 7. Şifre Değişiminde Güç Doğrulaması Yok ⚠️
**Dosya:** [backend/src/controllers/authController.ts](backend/src/controllers/authController.ts#L132-L135)

**Sorun:** Şifre değiştirilirken güç kontrolü yapılmıyor.

```typescript
// MEVCUT KOD - ZAYIF
const { currentPassword, newPassword } = req.body;
// Doğrudan kabul ediliyor
```

**Güvenlik Riski:**
- ❌ Zayıf şifrelere izin veriliyor
- ❌ Karmaşıklık gereksinimleri yok
- ❌ Güvenlik politikası ihlali

**Önerilen Çözüm:**
```typescript
// GÜVENLİ KOD
import { body, validationResult } from 'express-validator';

// Şifre güç regex'i
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Validator middleware
export const changePasswordValidators = [
    body('newPassword')
        .isLength({ min: 8 }).withMessage('Şifre en az 8 karakter olmalı')
        .matches(passwordRegex).withMessage(
            'Şifre en az 1 büyük harf, 1 küçük harf, 1 rakam ve 1 özel karakter içermeli (@$!%*?&)'
        )
        .custom((value, { req }) => {
            // Şifre email içermemeli
            if (req.user && value.toLowerCase().includes(req.user.email.split('@')[0].toLowerCase())) {
                throw new Error('Şifre email adresinizi içeremez');
            }
            return true;
        })
];

// Controller'da
async changePassword(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    const { currentPassword, newPassword } = req.body;
    
    // Yeni şifre eski şifre ile aynı olmamalı
    if (currentPassword === newPassword) {
        return res.status(400).json({ 
            error: 'Yeni şifre eski şifre ile aynı olamaz' 
        });
    }
    
    // ... mevcut kod devam eder
}
```

**Ek İyileştirme:**
```typescript
// Yaygın şifreleri engelle
const commonPasswords = ['12345678', 'password', 'admin123', 'qwerty123'];
if (commonPasswords.includes(newPassword.toLowerCase())) {
    return res.status(400).json({ 
        error: 'Bu şifre çok yaygın. Daha güçlü bir şifre seçin.' 
    });
}
```

**Etki:** ⭐⭐⭐⭐ (Yüksek)

---

### 8. Token'lar LocalStorage'da Saklanıyor (XSS Riski) ⚠️
**Dosya:** [frontend/src/admin/Login.tsx](frontend/src/admin/Login.tsx#L37-L38)

**Sorun:** JWT token'ları localStorage'da saklanıyor, bu XSS saldırılarına karşı savunmasız.

```typescript
// MEVCUT KOD - GÜVENSİZ
localStorage.setItem('token', response.data.token);
localStorage.setItem('user', JSON.stringify(response.data.user));
```

**Güvenlik Riski:**
- ❌ XSS saldırısı token'ları çalabilir
- ❌ Token'lar tarayıcı oturumları arasında kalıcı
- ❌ Otomatik temizleme yok
- ❌ JavaScript ile erişilebilir

**Önerilen Çözüm - httpOnly Cookies:**

**Backend:**
```typescript
// authController.ts
async login(req: Request, res: Response) {
    // ... kimlik doğrulama
    
    const token = jwt.sign(
        { id: adminUser.id, email: adminUser.email, role: adminUser.role },
        getJWTSecret(),
        { expiresIn: '8h' }
    );
    
    // Token'ı httpOnly cookie olarak gönder
    res.cookie('token', token, {
        httpOnly: true, // JavaScript ile erişilemez
        secure: process.env.NODE_ENV === 'production', // Sadece HTTPS
        sameSite: 'strict', // CSRF koruması
        maxAge: 8 * 60 * 60 * 1000, // 8 saat
        path: '/'
    });
    
    // Token'ı yanıtta gönderme, sadece user bilgisi
    res.json({
        success: true,
        user: {
            id: adminUser.id,
            email: adminUser.email,
            role: adminUser.role
        }
    });
}

async logout(req: Request, res: Response) {
    // Cookie'yi temizle
    res.clearCookie('token');
    res.json({ success: true, message: 'Çıkış başarılı' });
}
```

**Middleware:**
```typescript
// auth.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Cookie'den token al
        const token = req.cookies.token;
        
        if (!token) {
            return res.status(401).json({ error: 'Kimlik doğrulama gerekli' });
        }
        
        const decoded = jwt.verify(token, getJWTSecret());
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Geçersiz token' });
    }
};
```

**Backend - Cookie Parser:**
```bash
npm install cookie-parser
```

```typescript
// index.ts
import cookieParser from 'cookie-parser';

app.use(cookieParser());
```

**Frontend - Axios Config:**
```typescript
// services/api.ts
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
    withCredentials: true, // Cookie'leri otomatik gönder
    headers: {
        'Content-Type': 'application/json'
    }
});

// Interceptor - localStorage'dan token göndermeyi kaldır
api.interceptors.request.use(
    (config) => {
        // Token otomatik olarak cookie ile gönderilir
        // Authorization header'ına gerek yok
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 401 durumunda logout
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Cookie geçersiz veya yok, login sayfasına yönlendir
            window.location.href = '/admin/login';
        }
        return Promise.reject(error);
    }
);

export default api;
```

**Frontend - Login Component:**
```typescript
// Login.tsx - GÜVENLİ VERSIYONU
const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const response = await api.post('/api/auth/login', formData);
        
        // Token artık localStorage'a kaydedilmiyor!
        // Cookie olarak otomatik kaydedildi
        
        // Sadece user bilgisini localStorage'a kaydet (hassas değil)
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        navigate('/admin/dashboard');
    } catch (error) {
        setError('Giriş başarısız');
    }
};
```

**Etki:** ⭐⭐⭐⭐ (Yüksek)

---

### 9. CORS Yapılandırması Güvenlik Açığı ⚠️
**Dosya:** [backend/src/index.ts](backend/src/index.ts#L36-L47)

**Sorun:** CORS origin kontrolü, origin header'ı olmayan isteklere izin veriyor.

```typescript
// MEVCUT KOD - ZAYIF
origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true); // !origin olsa bile izin veriyor
    } else {
        callback(new Error('Not allowed by CORS'));
    }
}
```

**Güvenlik Riski:**
- ❌ Sunucu-sunucu istekleri CORS'u atlıyor
- ❌ Postman/curl gibi araçlar kısıtlama olmadan erişebilir
- ❌ CSRF güvenlik açığı

**Önerilen Çözüm:**
```typescript
// GÜVENLİ KOD
const corsOptions = {
    origin: (origin: string | undefined, callback: any) => {
        // Tarayıcı istekleri için origin kontrolü
        if (origin && allowedOrigins.includes(origin)) {
            callback(null, true);
        } 
        // Development ortamında origin olmayan isteklere izin ver
        else if (!origin && process.env.NODE_ENV === 'development') {
            console.warn('⚠️  Origin header olmayan istek algılandı (Development)');
            callback(null, true);
        } 
        // Production'da origin olmayan istekleri reddet
        else {
            callback(new Error('CORS politikası tarafından engellendi'));
        }
    },
    credentials: true, // Cookie desteği
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    maxAge: 86400 // Preflight cache 24 saat
};

app.use(cors(corsOptions));
```

**Ek Güvenlik - CSRF Token:**
```typescript
// CSRF koruması ekle
import csrf from 'csurf';

const csrfProtection = csrf({ 
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
    } 
});

// State değiştiren işlemlerde CSRF kontrolü
router.post('/api/applications', csrfProtection, applicationController.create);
router.post('/api/contact', csrfProtection, contactController.create);
router.delete('/api/applications/:id', csrfProtection, applicationController.delete);
```

**Etki:** ⭐⭐⭐⭐ (Yüksek)

---

### 10. Dosya Yüklemede Path Traversal Riski ⚠️
**Dosya:** [backend/src/routes/uploadRoutes.ts](backend/src/routes/uploadRoutes.ts#L11-L17)

**Sorun:** Klasör temizleniyor ama ek doğrulama önerilir.

```typescript
// MEVCUT KOD - İYİLEŞTİRİLEBİLİR
function sanitizeFolder(input: unknown): string {
  const raw = String(input || 'sliders');
  const parts = raw.split('/').filter(Boolean);
  const safeParts = parts
    .map(p => p.replace(/[^a-zA-Z0-9_-]/g, ''))
    .filter(p => p.length > 0);
  return safeParts.length ? safeParts.join('/') : 'sliders';
}
```

**Güvenlik Riski:**
- ❌ Regex atlatılırsa dizin geçişi (directory traversal)
- ❌ Amaçlanan dizinler dışında dosya sistemi erişimi

**Önerilen Çözüm:**
```typescript
// GÜVENLİ KOD
import path from 'path';

// İzin verilen klasörler whitelist
const ALLOWED_UPLOAD_FOLDERS = [
    'Applications/selfie',
    'Applications/profile',
    'Applications/fullbody',
    'Home/slider',
    'News/gallery',
    'About/team',
    'Success/photos'
];

function sanitizeFolder(input: unknown): string {
    const raw = String(input || 'sliders');
    
    // Path traversal denemelerini engelle
    if (raw.includes('..') || raw.includes('~') || raw.includes('//')) {
        throw new Error('Geçersiz klasör yolu');
    }
    
    // Mutlak path kontrolü
    if (path.isAbsolute(raw)) {
        throw new Error('Mutlak path kullanılamaz');
    }
    
    // Temizle
    const parts = raw.split('/').filter(Boolean);
    const safeParts = parts
        .map(p => p.replace(/[^a-zA-Z0-9_-]/g, ''))
        .filter(p => p.length > 0);
    
    if (safeParts.length === 0) {
        return 'sliders';
    }
    
    const sanitized = safeParts.join('/');
    
    // Whitelist kontrolü
    const isAllowed = ALLOWED_UPLOAD_FOLDERS.some(allowed => 
        sanitized === allowed || sanitized.startsWith(allowed + '/')
    );
    
    if (!isAllowed) {
        throw new Error(`Klasör izin verilen listede değil: ${sanitized}`);
    }
    
    return sanitized;
}

// Dosya kaydederken de kontrol
router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const folder = sanitizeFolder(req.query.folder);
        const uploadDir = path.join(process.cwd(), 'src', 'uploads', folder);
        const uploadsRoot = path.join(process.cwd(), 'src', 'uploads');
        
        // Path traversal son kontrolü
        if (!uploadDir.startsWith(uploadsRoot)) {
            throw new Error('Güvenlik ihlali: Uploads dizini dışına çıkış denemesi');
        }
        
        // ... devamı
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
```

**Etki:** ⭐⭐⭐⭐ (Yüksek)

---

## 🔶 ORTA ÖNCELİKLİ SORUNLAR

### 11. Helmet Güvenlik Header'ları Eksik 🔶
**Dosya:** [backend/src/index.ts](backend/src/index.ts)

**Sorun:** Güvenlik header'larını ekleyen helmet middleware yüklü değil.

**Eksik Header'lar:**
- ❌ `X-Frame-Options` (clickjacking koruması)
- ❌ `X-Content-Type-Options` (MIME sniffing koruması)
- ❌ `Strict-Transport-Security` (HTTPS zorunluluğu)
- ❌ `X-Powered-By` gizleme
- ❌ `Content-Security-Policy`

**Önerilen Çözüm:**
```bash
npm install helmet
```

```typescript
// index.ts
import helmet from 'helmet';

// Helmet'i CORS'tan önce ekle
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            imgSrc: ["'self'", "data:", "https:", "blob:"],
            scriptSrc: ["'self'"],
            connectSrc: ["'self'", process.env.FRONTEND_URL || "http://localhost:3000"],
            frameSrc: ["'none'"],
            objectSrc: ["'none'"],
            upgradeInsecureRequests: process.env.NODE_ENV === 'production' ? [] : null,
        }
    },
    crossOriginEmbedderPolicy: false, // Esneklik için
    hsts: {
        maxAge: 31536000, // 1 yıl
        includeSubDomains: true,
        preload: true
    },
    frameguard: {
        action: 'deny' // Clickjacking koruması
    },
    noSniff: true, // MIME sniffing engelle
    xssFilter: true, // XSS filtresi
    referrerPolicy: {
        policy: 'strict-origin-when-cross-origin'
    }
}));

// X-Powered-By header'ını gizle
app.disable('x-powered-by');
```

**Etki:** ⭐⭐⭐ (Orta)

---

### 12. Hata Mesajlarında Hassas Bilgi Sızıntısı 🔶
**Dosya:** [backend/src/controllers/authController.ts](backend/src/controllers/authController.ts#L13-L18)

**Sorun:** Hata mesajı email'in veritabanında olup olmadığını ele veriyor.

```typescript
// MEVCUT KOD - BİLGİ SIZINTISI
if (existingUser) {
    return res.status(400).json({ error: 'Bu email zaten kullanılıyor' });
}

// Login'de
if (!adminUser) {
    return res.status(401).json({ error: 'Email bulunamadı' });
}
if (!validPassword) {
    return res.status(401).json({ error: 'Şifre hatalı' });
}
```

**Güvenlik Riski:**
- ❌ Hesap numaralandırma (account enumeration)
- ❌ Kullanıcı bilgi ifşası
- ❌ Hedefli saldırılar için bilgi toplama

**Önerilen Çözüm:**
```typescript
// GÜVENLİ KOD - GENERİK MESAJLAR

// Register
if (existingUser) {
    return res.status(400).json({ 
        error: 'Kayıt işlemi başarısız. Lütfen bilgilerinizi kontrol edin.' 
    });
}

// Login - Email ve şifre hatası için aynı mesaj
if (!adminUser || !validPassword) {
    return res.status(401).json({ 
        error: 'Email veya şifre hatalı' // Hangisinin hatalı olduğunu belirtme
    });
}

// Forgot Password
// Email'in sistemde olup olmadığını açığa vurma
return res.status(200).json({ 
    message: 'Eğer bu email sistemde kayıtlıysa, şifre sıfırlama linki gönderilecektir.' 
});
```

**Zamanlama Saldırısı Koruması:**
```typescript
// Yanıt süresini sabitlemek için delay ekle
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async login(req: Request, res: Response) {
    const startTime = Date.now();
    
    // ... kimlik doğrulama
    
    // Minimum 500ms yanıt süresi (timing attack'i önler)
    const elapsed = Date.now() - startTime;
    if (elapsed < 500) {
        await delay(500 - elapsed);
    }
    
    return res.json({ ... });
}
```

**Etki:** ⭐⭐⭐ (Orta)

---

### 13. CSRF Koruması Yok 🔶

**Sorun:** State değiştiren işlemler için CSRF token'ı kullanılmıyor.

**Güvenlik Riski:**
- ❌ Cross-Site Request Forgery saldırıları
- ❌ Kullanıcı adına yetkisiz işlemler

**Önerilen Çözüm:**
```bash
npm install csurf
```

```typescript
// index.ts
import csrf from 'csurf';

// CSRF koruması middleware
const csrfProtection = csrf({ 
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
    } 
});

// CSRF token endpoint'i
app.get('/api/csrf-token', csrfProtection, (req, res) => {
    res.json({ csrfToken: req.csrfToken() });
});

// State değiştiren işlemlere uygula
app.use('/api/applications', csrfProtection);
app.use('/api/contact', csrfProtection);
app.use('/api/admin/*', csrfProtection); // Tüm admin işlemleri
```

**Frontend:**
```typescript
// CSRF token'ı al ve her istekte gönder
const getCsrfToken = async () => {
    const response = await api.get('/api/csrf-token');
    return response.data.csrfToken;
};

// Axios interceptor
api.interceptors.request.use(async (config) => {
    if (['post', 'put', 'delete', 'patch'].includes(config.method?.toLowerCase() || '')) {
        const csrfToken = await getCsrfToken();
        config.headers['X-CSRF-Token'] = csrfToken;
    }
    return config;
});
```

**Etki:** ⭐⭐⭐ (Orta)

---

### 14. Frontend Dosya Doğrulaması Atlatılabilir 🔶
**Dosya:** [frontend/src/pages/ApplicationForm.tsx](frontend/src/pages/ApplicationForm.tsx#L257-L269)

**Sorun:** Frontend'deki dosya kontrolü backend'de tekrarlanmıyor.

```typescript
// APPLICATION FORM - SADECE FRONTEND KONTROLÜ
if (file.size > 5 * 1024 * 1024) {
    alert('Dosya boyutu 5MB\'dan küçük olmalıdır');
    return; // Atlatılabilir
}

if (!file.type.startsWith('image/')) {
    alert('Sadece resim dosyaları yüklenebilir');
    return; // Atlatılabilir
}
```

**Güvenlik Riski:**
- ❌ Saldırganlar client-side kontrolleri atlayabilir
- ❌ Geçersiz dosyalar sunucuya ulaşabilir
- ❌ Depolama alanı kötüye kullanımı

**Çözüm:** ✅ Konu #5'te backend doğrulaması eklendi.

**Etki:** ⭐⭐⭐ (Orta) - Backend'de düzeltilmeli

---

### 15. İsim Doğrulama Regex'i Zayıf 🔶
**Dosya:** [frontend/src/pages/ApplicationForm.tsx](frontend/src/pages/ApplicationForm.tsx#L127-L133)

**Sorun:** Frontend ve backend validasyonu tutarsız.

```typescript
// FRONTEND
if (!value || !/^[a-zA-ZğüşöçıİĞÜŞÖÇ\s]+$/.test(value)) {
    return 'Geçerli bir ad soyad giriniz (sadece harfler)';
}

// BACKEND - Doğrulama yok!
```

**Güvenlik Riski:**
- ❌ Frontend/backend tutarsızlığı
- ❌ Güvensiz render edilirse injection potansiyeli
- ❌ Veri kalitesi sorunları

**Önerilen Çözüm:**
```bash
# Backend'e validator ekle
npm install express-validator
```

```typescript
// Backend - applicationController.ts
import { body, validationResult } from 'express-validator';

export const applicationValidators = [
    body('fullName')
        .trim()
        .notEmpty().withMessage('Ad soyad gerekli')
        .isLength({ min: 3, max: 100 }).withMessage('Ad soyad 3-100 karakter arası olmalı')
        .matches(/^[a-zA-ZğüşöçıİĞÜŞÖÇ\s]+$/).withMessage('Ad soyad sadece harf içerebilir')
        .customSanitizer(value => value.replace(/\s+/g, ' ')), // Çift boşlukları temizle
    
    body('email')
        .trim()
        .isEmail().withMessage('Geçerli bir email giriniz')
        .normalizeEmail(),
    
    body('phone')
        .trim()
        .matches(/^\+?[0-9\s\-()]+$/).withMessage('Geçerli bir telefon numarası giriniz')
        .isLength({ min: 10, max: 20 }).withMessage('Telefon numarası 10-20 karakter arası olmalı'),
    
    body('heightCm')
        .isInt({ min: 140, max: 220 }).withMessage('Boy 140-220 cm arası olmalı'),
    
    body('birthDate')
        .isISO8601().withMessage('Geçerli bir tarih giriniz')
        .custom((value) => {
            const age = new Date().getFullYear() - new Date(value).getFullYear();
            if (age < 16 || age > 30) {
                throw new Error('Yaş 16-30 arası olmalı');
            }
            return true;
        })
];

// Route'ta uygula
router.post('/api/applications', 
    applicationValidators, 
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    applicationController.create
);
```

**Etki:** ⭐⭐⭐ (Orta)

---

### 16. Güvenli Cookie Ayarları Eksik 🔶

**Sorun:** Session cookie'leri kullanılıyorsa güvenlik bayrakları eksik olabilir.

**Önerilen Çözüm:**
```bash
npm install express-session
```

```typescript
import session from 'express-session';

app.use(session({
    secret: process.env.SESSION_SECRET || crypto.randomBytes(32).toString('hex'),
    name: 'sessionId', // Varsayılan 'connect.sid' yerine özel isim
    cookie: {
        secure: process.env.NODE_ENV === 'production', // Sadece HTTPS
        httpOnly: true, // JavaScript erişimini engelle
        sameSite: 'strict', // CSRF koruması
        maxAge: 8 * 60 * 60 * 1000, // 8 saat
        domain: process.env.COOKIE_DOMAIN // Production için set et
    },
    resave: false,
    saveUninitialized: false,
    rolling: true // Her istekte cookie yenilenir
}));
```

**Etki:** ⭐⭐⭐ (Orta)

---

### 17. Doğrulanmamış Dosya Silme 🔶
**Dosya:** [backend/src/controllers/applicationController.ts](backend/src/controllers/applicationController.ts#L289-L302)

**Sorun:** Veritabanından gelen dosya yolları doğrudan silme için kullanılıyor.

```typescript
// MEVCUT KOD
const files = [application.selfieUrl, application.profilePhoto, application.fullBodyPhoto]
    .filter(Boolean)
    .filter((filePath) => filePath.startsWith('/uploads'));

for (const filePath of files) {
    const absPath = path.join(process.cwd(), 'src', filePath);
    fs.unlink(absPath, (err: any) => { // Path traversal riski
```

**Güvenlik Riski:**
- ❌ Veritabanı tehlikeye girerse keyfi dosya silme
- ❌ Path traversal zayıflık varsa risk

**Önerilen Çözüm:**
```typescript
// GÜVENLİ KOD
const deleteApplicationFiles = async (application: Application) => {
    const files = [
        application.selfieUrl, 
        application.profilePhoto, 
        application.fullBodyPhoto
    ].filter(Boolean);
    
    const uploadsDir = path.resolve(process.cwd(), 'src', 'uploads');
    
    for (const filePath of files) {
        try {
            // Sadece /uploads ile başlayan dosyalar
            if (!filePath.startsWith('/uploads')) {
                console.warn(`Atlanan geçersiz path: ${filePath}`);
                continue;
            }
            
            // Path traversal kontrolü
            if (filePath.includes('..') || filePath.includes('~')) {
                console.error(`Güvenlik ihlali tespit edildi: ${filePath}`);
                continue;
            }
            
            // Mutlak path'i çöz
            const absPath = path.resolve(
                process.cwd(), 
                'src', 
                filePath.replace(/^\//, '')
            );
            
            // uploads dizini içinde olduğunu doğrula
            if (!absPath.startsWith(uploadsDir)) {
                console.error(`Path uploads dizini dışında: ${absPath}`);
                continue;
            }
            
            // Dosya var mı kontrol et
            if (!fs.existsSync(absPath)) {
                console.warn(`Dosya bulunamadı: ${absPath}`);
                continue;
            }
            
            // Şimdi güvenli bir şekilde sil
            await fs.promises.unlink(absPath);
            console.log(`Dosya silindi: ${absPath}`);
            
        } catch (error) {
            console.error(`Dosya silme hatası: ${filePath}`, error);
            // Hatayı logla ama işleme devam et
        }
    }
};
```

**Etki:** ⭐⭐⭐ (Orta)

---

## 🔵 DÜŞÜK ÖNCELİKLİ / EN İYİ UYGULAMALAR

### 18. Request Body Boyut Limiti Eksik 🔵

**Önerilen Çözüm:**
```typescript
// index.ts
app.use(express.json({ 
    limit: '1mb' // API istekleri için
}));

app.use(express.urlencoded({ 
    extended: true, 
    limit: '1mb' 
}));

// Dosya yükleme için ayrı limit (zaten mevcut)
```

**Etki:** ⭐⭐ (Düşük)

---

### 19. Production'da Console Logging 🔵

**Sorun:** Tüm controller'larda `console.error()` kullanılıyor.

**Önerilen Çözüm:**
```bash
npm install winston
```

```typescript
// logger.ts
import winston from 'winston';

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.errors({ stack: true }),
        winston.format.json()
    ),
    defaultMeta: { service: 'elite-model-api' },
    transports: [
        // Hataları ayrı dosyaya yaz
        new winston.transports.File({ 
            filename: 'logs/error.log', 
            level: 'error',
            maxsize: 5242880, // 5MB
            maxFiles: 5
        }),
        // Tüm logları birleşik dosyaya yaz
        new winston.transports.File({ 
            filename: 'logs/combined.log',
            maxsize: 5242880,
            maxFiles: 5
        })
    ]
});

// Development'ta console'a da yaz
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
        )
    }));
}

export default logger;
```

**Kullanım:**
```typescript
// Controller'larda
import logger from '../utils/logger';

// console.error yerine
logger.error('Başvuru oluşturma hatası', { error, userId: req.user?.id });

// console.log yerine
logger.info('Başvuru oluşturuldu', { applicationId: newApp.id });
```

**Etki:** ⭐⭐ (Düşük)

---

### 20. API Versiyonlama Yok 🔵

**Önerilen Çözüm:**
```typescript
// routes/index.ts
import express from 'express';
const router = express.Router();

// API v1
import authRoutes from './authRoutes';
import applicationRoutes from './applicationRoutes';
import contactRoutes from './contactRoutes';

router.use('/v1/auth', authRoutes);
router.use('/v1/applications', applicationRoutes);
router.use('/v1/contact', contactRoutes);
router.use('/v1/uploads', uploadRoutes);

// Gelecekte v2 eklenebilir
// router.use('/v2/applications', applicationsV2Routes);

export default router;

// index.ts'de
app.use('/api', router);
```

**Frontend:**
```typescript
// api.ts
const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL + '/api/v1' || 'http://localhost:5000/api/v1'
});
```

**Etki:** ⭐⭐ (Düşük)

---

### 21. Content Security Policy 🔵

✅ Helmet ile kapsanıyor (Konu #11)

---

### 22. Admin Rol Doğrulaması Genel Değil 🔵
**Dosya:** [backend/src/middleware/auth.ts](backend/src/middleware/auth.ts#L41-L46)

**Önerilen İyileştirme:**
```typescript
// Daha detaylı yetki kontrolü
export const requirePermission = (permission: string) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = req.user;
            
            // Permission tablosunu kontrol et
            const hasPermission = await prisma.permission.findFirst({
                where: {
                    role: user.role,
                    permission: permission,
                    isActive: true
                }
            });
            
            if (!hasPermission) {
                return res.status(403).json({ error: 'Bu işlem için yetkiniz yok' });
            }
            
            next();
        } catch (error) {
            return res.status(500).json({ error: 'Yetki kontrolü hatası' });
        }
    };
};

// Kullanım
router.delete('/applications/:id', 
    authenticate, 
    requirePermission('DELETE_APPLICATION'),
    applicationController.delete
);
```

**Etki:** ⭐⭐ (Düşük)

---

### 23. Hesap Kilitleme Mekanizması Yok 🔵

**Önerilen Çözüm:**
```typescript
// Prisma schema'ya ekle
model AdminUser {
    id              String    @id @default(uuid())
    email           String    @unique
    password        String
    failedAttempts  Int       @default(0)
    lockedUntil     DateTime?
    lastLoginAt     DateTime?
    // ... diğer alanlar
}

// authController.ts
async login(req: Request, res: Response) {
    const { email, password } = req.body;
    
    const adminUser = await prisma.adminUser.findUnique({ where: { email } });
    
    if (!adminUser) {
        return res.status(401).json({ error: 'Email veya şifre hatalı' });
    }
    
    // Hesap kilitli mi kontrol et
    if (adminUser.lockedUntil && adminUser.lockedUntil > new Date()) {
        const remainingMinutes = Math.ceil(
            (adminUser.lockedUntil.getTime() - Date.now()) / 60000
        );
        return res.status(423).json({ 
            error: `Hesabınız ${remainingMinutes} dakika boyunca kilitlendi. Çok fazla başarısız deneme.` 
        });
    }
    
    const validPassword = await bcrypt.compare(password, adminUser.password);
    
    if (!validPassword) {
        // Başarısız deneme sayısını artır
        const newFailedAttempts = adminUser.failedAttempts + 1;
        
        // 5 denemeden sonra 30 dakika kilitle
        if (newFailedAttempts >= 5) {
            await prisma.adminUser.update({
                where: { id: adminUser.id },
                data: {
                    failedAttempts: newFailedAttempts,
                    lockedUntil: new Date(Date.now() + 30 * 60 * 1000) // 30 dakika
                }
            });
            
            logger.warn('Hesap kilitlendi', { 
                email: adminUser.email, 
                attempts: newFailedAttempts 
            });
            
            return res.status(423).json({ 
                error: 'Çok fazla başarısız deneme. Hesabınız 30 dakika kilitlendi.' 
            });
        }
        
        // Başarısız denemeyi kaydet
        await prisma.adminUser.update({
            where: { id: adminUser.id },
            data: { failedAttempts: newFailedAttempts }
        });
        
        return res.status(401).json({ 
            error: `Email veya şifre hatalı. ${5 - newFailedAttempts} deneme hakkınız kaldı.` 
        });
    }
    
    // Başarılı giriş - sayaçları sıfırla
    await prisma.adminUser.update({
        where: { id: adminUser.id },
        data: {
            failedAttempts: 0,
            lockedUntil: null,
            lastLoginAt: new Date()
        }
    });
    
    // Token oluştur ve gönder
    // ...
}
```

**Etki:** ⭐⭐ (Düşük)

---

## 📋 EK ÖNERİLER

### 24. Ortam Değişkenleri Doğrulaması ✅

```typescript
// config/validateEnv.ts
const requiredEnvVars = [
    'DATABASE_URL',
    'JWT_SECRET',
    'CORS_ORIGIN',
    'PORT'
];

export const validateEnv = () => {
    const missing = requiredEnvVars.filter(varName => !process.env[varName]);
    
    if (missing.length > 0) {
        throw new Error(
            `❌ Eksik ortam değişkenleri: ${missing.join(', ')}\\n` +
            '    .env dosyasını kontrol edin.'
        );
    }
    
    // JWT_SECRET uzunluk kontrolü
    if (process.env.JWT_SECRET && process.env.JWT_SECRET.length < 32) {
        throw new Error('JWT_SECRET en az 32 karakter olmalı');
    }
    
    console.log('✅ Ortam değişkenleri doğrulandı');
};

// index.ts'de
import { validateEnv } from './config/validateEnv';

validateEnv(); // Uygulama başlamadan kontrol et
```

**Durum:** ✅ `.env` dosyası `.gitignore`'da

---

### 25. Veritabanı Güvenliği

✅ **İyi:** Prisma ORM kullanılıyor (SQL injection koruması)  
✅ **İyi:** Raw SQL sorgusu bulunamadı

**Ek Öneri:**
```typescript
// Hassas verileri loglardan sakla
const sanitizeUser = (user: AdminUser) => {
    const { password, ...safeUser } = user;
    return safeUser;
};

logger.info('Kullanıcı oluşturuldu', sanitizeUser(newUser));
```

---

### 26. XSS Koruması

✅ **İyi:** `dangerouslySetInnerHTML` kullanımı yok  
✅ **İyi:** React varsayılan olarak çıktıları escape ediyor

**Ek Öneri:**
```bash
npm install dompurify
```

```typescript
// Kullanıcıdan gelen HTML içeriği render edilecekse
import DOMPurify from 'dompurify';

const cleanHTML = DOMPurify.sanitize(dirtyHTML);
```

---

### 27. Bağımlılık Güvenlik Denetimi 🔵

**Düzenli çalıştırın:**
```bash
# NPM audit
npm audit
npm audit fix

# Yarn kullanıyorsanız
yarn audit

# Automated scanning
npm install -g npm-check-updates
ncu -u
```

**GitHub Dependabot veya Snyk entegrasyonu öneririz.**

---

## 🎯 ÖNCELİK EYLEM PLANI

### 🚨 ACİL (Bu Hafta):
1. ✅ JWT token'larına expiration ekle (#1)
2. ✅ JWT_SECRET doğrulaması ekle (#2)
3. ✅ Varsayılan admin şifresini güvenli hale getir (#3, #4)
4. ✅ Dosya yükleme tip doğrulaması ekle (#5)
5. ✅ Rate limiting uygula (#6)

**Tahmini Süre:** 4-6 saat

---

### ⚠️ KISA VADELİ (Bu Ay):
6. ✅ Şifre güç validasyonu ekle (#7)
7. ✅ Token'ları httpOnly cookie'lere taşı (#8)
8. ✅ CORS yapılandırmasını düzelt (#9)
9. ✅ Helmet security headers ekle (#11)
10. ✅ Hata mesajlarını genericleştir (#12)

**Tahmini Süre:** 8-12 saat

---

### 🔶 ORTA VADELİ (2 Ay İçinde):
11. ✅ CSRF koruması ekle (#13)
12. ✅ Hesap kilitleme mekanizması (#23)
13. ✅ Winston logging kütüphanesi (#19)
14. ✅ API versiyonlama (#20)
15. ✅ Backend input validation (#15)

**Tahmini Süre:** 12-16 saat

---

## 📁 GÜVENLİK CHECKLIST

### Hemen Yapılacaklar:
- [ ] JWT expiration ekle
- [ ] JWT_SECRET kontrolü
- [ ] Admin şifresini değiştir
- [ ] Dosya upload MIME validation
- [ ] Rate limiting (login, forms, uploads)

### Bu Ay:
- [ ] Şifre politikası (min 8 char, complexity)
- [ ] httpOnly cookies
- [ ] CORS düzeltme
- [ ] Helmet kurup yapılandır
- [ ] Generic error messages

### Gelecek Ay:
- [ ] CSRF protection
- [ ] Account lockout
- [ ] Winston logger
- [ ] API versioning
- [ ] Full input validation (express-validator)
- [ ] Path traversal extra checks

### Best Practices:
- [ ] Request body size limits
- [ ] Automated dependency scanning
- [ ] Regular npm audit
- [ ] Environment variable validation

---

## 📞 DESTEK VE KAYNAKLAR

### Güvenlik Kaynakları:
- **OWASP Top 10:** https://owasp.org/www-project-top-ten/
- **Node.js Security:** https://nodejs.org/en/docs/guides/security/
- **Express Security:** https://expressjs.com/en/advanced/best-practice-security.html

### Tarama Araçları:
- **npm audit** - Bağımlılık güvenlik taraması
- **Snyk** - Automated vulnerability scanning
- **OWASP ZAP** - Web uygulama güvenlik testi
- **Burp Suite** - Professional security testing

---

## 📊 RAPOR ÖZETİ

**Toplam Tespit:** 23 güvenlik sorunu

| Kategori | Tespit |
|----------|--------|
| Kimlik Doğrulama | 5 |
| Dosya Yükleme | 3 |
| Input Validation | 4 |
| API Güvenliği | 4 |
| En İyi Uygulamalar | 7 |

**Tahmini Düzeltme Süresi:** 24-34 saat

**Kritik Öncelik:** İlk 10 madde (Kritik + Yüksek)

---

**Hazırlayan:** AI Security Audit Agent  
**Tarih:** 26 Şubat 2026  
**Versiyon:** 1.0  
**Durum:** Aktif İzleme Gerekli

---

> ⚠️ **NOT:** Bu rapor tam kapsamlı bir penetrasyon testi değildir. Production'a geçmeden önce profesyonel bir güvenlik denetimi öneririz.
