# Elite Model Backend API Endpoints

Base URL: `http://localhost:3005`

---

## 🔐 Authentication

### Login
```
POST /api/auth/login
```
**Body:**
```json
{
  "email": "admin@example.com",
  "password": "123456"
}
```
**Response:**
```json
{
  "message": "Giriş başarılı",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "adminUser": {
    "id": "cmjipkloa0000rkf7wgb68yu8",
    "email": "admin@example.com",
    "name": "Admin User",
    "role": "SUPERADMIN"
  }
}
```
✅ **Status: Working**

### Register (SUPERADMIN Only)
```
POST /api/auth/register
Authorization: Bearer {token}
```
**Body:**
```json
{
  "email": "newadmin@example.com",
  "password": "123456",
  "fullName": "Yeni Admin",
  "role": "ADMIN"
}
```

### Get Profile
```
GET /api/auth/profile
Authorization: Bearer {token}
```

### Change Password
```
POST /api/auth/change-password
Authorization: Bearer {token}
```
**Body:**
```json
{
  "currentPassword": "123456",
  "newPassword": "newpass123"
}
```

---

## 📝 Applications (Başvurular)

### Create Application (Public)
```
POST /api/applications
```
**Body:**
```json
{
  "fullName": "Ahmet Yılmaz",
  "birthDate": "2000-01-01",
  "gender": "FEMALE",
  "nationality": "Turkish",
  "email": "ahmet@example.com",
  "phone": "05551234567",
  "city": "İstanbul",
  "heightCm": 175,
  "chestCm": 86,
  "hipsCm": 90,
  "footCm": 38,
  "waistCm": 60,
  "eyeColor": "Brown",
  "selfieUrl": "https://example.com/selfie.jpg",
  "profilePhoto": "https://example.com/profile.jpg",
  "fullBodyPhoto": "https://example.com/fullbody.jpg"
}
```
**Gender:** `MALE`, `FEMALE`, `OTHER`
✅ **Status: Working**

### Get All Applications
```
GET /api/applications
GET /api/applications?status=NEW
GET /api/applications?status=ACCEPTED
GET /api/applications?status=REJECTED
```

### Get Application by ID
```
GET /api/applications/:id
```

### Update Application Status
```
PATCH /api/applications/:id
```
**Body:**
```json
{
  "status": "ACCEPTED",
  "adminNotes": "Görüşmeye çağrılacak"
}
```

### Delete Application
```
DELETE /api/applications/:id
```

---

## 💬 Contact Messages

### Create Contact Message (Public)
```
POST /api/contact-messages
```
**Body:**
```json
{
  "fullName": "Ayşe Demir",
  "email": "ayse@example.com",
  "phone": "05559876543",
  "message": "Merhaba, bilgi almak istiyorum"
}
```

### Get All Messages
```
GET /api/contact-messages
```

### Get Message by ID
```
GET /api/contact-messages/:id
```

### Mark as Read/Unread
```
PATCH /api/contact-messages/:id
```
**Body:**
```json
{
  "isRead": true
}
```

### Delete Contact Message
```
DELETE /api/contact-messages/:id
```

---

## 🖼️ Cover Images

### Get All Cover Images
```
GET /api/cover-images
```

### Upsert Cover Image
```
POST /api/cover-images
```
**Body:**
```json
{
  "type": "WOMEN",
  "imageUrl": "https://example.com/cover-women.jpg"
}
```
**Types:** `WOMEN`, `MEN`, `KIDS`

### Delete Cover Image
```
DELETE /api/cover-images/:type
```
**Example:** `DELETE /api/cover-images/WOMEN`

---

## 🎨 Home Sliders

### Get All Sliders
```
GET /api/sliders
```

### Get Slider by ID
```
GET /api/sliders/:id
```

### Create Slider Group
```
POST /api/sliders
```
**Body:**
```json
{
  "key": "homepage-main",
  "name": "Ana Sayfa Slider",
  "isActive": true
}
```
✅ **Status: Working**

### Update Slider Group
```
PUT /api/sliders/:id
```
**Body:**
```json
{
  "title": "Güncellenmiş Başlık",
  "isActive": false
}
```

### Add Slider Item
```
POST /api/sliders/item
```
**Body:**
```json
{
  "homeSliderId": 1,
  "title_tr": "Yeni Sezon",
  "title_en": "New Season",
  "title_de": "Neue Saison",
  "title_ru": "Новый сезон",
  "description_tr": "Koleksiyonumuz",
  "description_en": "Our Collection",
  "description_de": "Unsere Kollektion",
  "description_ru": "Наша коллекция",
  "imageUrl": "https://example.com/slide.jpg",
  "linkUrl": "/katalog",
  "order": 1
}
```
✅ **Status: Working**

### Update Slider Item
```
PUT /api/sliders/item/:id
```
**Body:**
```json
{
  "imageUrl": "https://example.com/slide-updated.jpg",
  "title": "Güncellendi",
  "orderIndex": 2
}
```

### Delete Slider Item
```
DELETE /api/sliders/item/:id
```

---

## ⭐ Success Heroes

### Get All Success Heroes
```
GET /api/success-heroes
```

### Get Success Hero by ID
```
GET /api/success-heroes/:id
```

### Create Success Hero
```
POST /api/success-heroes
```
**Body:**
```json
{
  "title_tr": "Bella Hadid",
  "title_en": "Bella Hadid",
  "title_de": "Bella Hadid",
  "title_ru": "Белла Хадид",
  "text_tr": "Başarı hikayesi...",
  "text_en": "Success story...",
  "text_de": "Erfolgsgeschichte...",
  "text_ru": "История успеха...",
  "imageUrl": "https://example.com/bella.jpg"
}
```
✅ **Status: Working**

### Update Success Hero
```
PUT /api/success-heroes/:id
```

### Delete Success Hero
```
DELETE /api/success-heroes/:id
```

---

## 💬 Success Model Reviews

### Get All Reviews
```
GET /api/success-model-reviews
```

### Get Review by ID
```
GET /api/success-model-reviews/:id
```

### Create Review
```
POST /api/success-model-reviews
```
**Body:**
```json
{
  "title_tr": "Gigi Hadid",
  "title_en": "Gigi Hadid",
  "title_de": "Gigi Hadid",
  "title_ru": "Джиджи Хадид",
  "text_tr": "Ajans sayesinde hayallerime ulaştım",
  "text_en": "I reached my dreams thanks to the agency",
  "text_de": "Dank der Agentur habe ich meine Träume erreicht",
  "text_ru": "Благодаря агентству я достиг своей мечты",
  "imageUrl": "https://example.com/gigi.jpg"
}
```
✅ **Status: Working**

### Update Review
```
PUT /api/success-model-reviews/:id
```

### Delete Review
```
DELETE /api/success-model-reviews/:id
```

---

## 🌟 Featured Items

### Get All Featured Items
```
GET /api/featured-items
```

### Get Featured Item by ID
```
GET /api/featured-items/:id
```

### Create Featured Item
```
POST /api/featured-items
```
**Body:**
```json
{
  "title_tr": "Yeni Yüzler",
  "title_en": "New Faces",
  "title_de": "Neue Gesichter",
  "title_ru": "Новые лица",
  "content_tr": "2024 sezonunun parlayan yıldızları",
  "content_en": "Shining stars of 2024 season",
  "content_de": "Leuchtende Sterne der Saison 2024",
  "content_ru": "Сияющие звезды сезона 2024",
  "imageUrl": "https://example.com/featured.jpg",
  "order": 1
}
```
✅ **Status: Working**

### Update Featured Item
```
PUT /api/featured-items/:id
```

### Delete Featured Item
```
DELETE /api/featured-items/:id
```

---

## 📰 News

### Get All News
```
GET /api/news
```

### Get News by ID
```
GET /api/news/:id
```

### Create News
```
POST /api/news
```
**Body:**
```json
{
  "title_tr": "Paris Fashion Week",
  "title_en": "Paris Fashion Week",
  "title_de": "Paris Fashion Week",
  "title_ru": "Неделя моды в Париже",
  "content_tr": "Ajansımızdan 5 model katıldı...",
  "content_en": "5 models from our agency participated...",
  "content_de": "5 Models unserer Agentur nahmen teil...",
  "content_ru": "5 моделей от нашего агентства приняли участие...",
  "imageUrl": "https://example.com/news.jpg",
  "publishedAt": "2025-12-23T10:00:00Z"
}
```
✅ **Status: Working**

### Update News
```
PUT /api/news/:id
```

### Delete News
```
DELETE /api/news/:id
```

---

## ❓ FAQs (Sıkça Sorulan Sorular)

### Get All FAQs
```
GET /api/faqs
```

### Get FAQ by ID
```
GET /api/faqs/:id
```

### Create FAQ
```
POST /api/faqs
```
**Body:**
```json
{
  "question_tr": "Başvuru süreci nasıl işliyor?",
  "question_en": "How does the application process work?",
  "question_de": "Wie funktioniert der Bewerbungsprozess?",
  "question_ru": "Как работает процесс подачи заявки?",
  "answer_tr": "Online formdan başvurabilirsiniz",
  "answer_en": "You can apply through the online form",
  "answer_de": "Sie können sich über das Online-Formular bewerben",
  "answer_ru": "Вы можете подать заявку через онлайн-форму",
  "order": 1
}
```
✅ **Status: Working**

### Update FAQ
```
PUT /api/faqs/:id
```

### Delete FAQ
```
DELETE /api/faqs/:id
```

---

## 📄 About Page

### Get About Page
```
GET /api/about
```

### Create/Update About Page
```
POST /api/about
```
**Body:**
```json
{
  "intro_title_tr": "Hakkımızda",
  "intro_title_en": "About Us",
  "intro_title_de": "Über uns",
  "intro_title_ru": "О нас",
  "intro_text_tr": "Elite Model Agency olarak...",
  "intro_text_en": "As Elite Model Agency...",
  "intro_text_de": "Als Elite Model Agency...",
  "intro_text_ru": "Как Elite Model Agency...",
  "vision_imageUrl": "https://example.com/vision.jpg",
  "vision_title_tr": "Vizyonumuz",
  "vision_title_en": "Our Vision",
  "vision_title_de": "Unsere Vision",
  "vision_title_ru": "Наше видение",
  "vision_slogan_tr": "Dünya lideri",
  "vision_slogan_en": "World leader",
  "vision_slogan_de": "Weltführer",
  "vision_slogan_ru": "Мировой лидер",
  "vision_text_tr": "Lider model ajansı olmak",
  "vision_text_en": "To be the leading model agency",
  "vision_text_de": "Die führende Modelagentur zu sein",
  "vision_text_ru": "Быть ведущим модельным агентством",
  "mission_imageUrl": "https://example.com/mission.jpg",
  "mission_title_tr": "Misyonumuz",
  "mission_title_en": "Our Mission",
  "mission_title_de": "Unsere Mission",
  "mission_title_ru": "Наша миссия",
  "mission_slogan_tr": "En iyiler",
  "mission_slogan_en": "The best",
  "mission_slogan_de": "Die Besten",
  "mission_slogan_ru": "Лучшие",
  "mission_text_tr": "En iyi modelleri keşfetmek",
  "mission_text_en": "To discover the best models",
  "mission_text_de": "Die besten Models zu entdecken",
  "mission_text_ru": "Открывать лучших моделей"
}
```
✅ **Status: Working**

---

## 📞 Contact Info

### Get Contact Info
```
GET /api/contact-info
```

### Create/Update Contact Info
```
POST /api/contact-info
```
**Body:**
```json
{
  "address_tr": "Nişantaşı, İstanbul",
  "address_en": "Nişantaşı, Istanbul",
  "address_de": "Nişantaşı, Istanbul",
  "address_ru": "Нишанташи, Стамбул",
  "phone": "+90 212 123 4567",
  "email": "info@elitemodel.com",
  "locationUrl": "https://maps.google.com/"
}
```
✅ **Status: Working**

---

## 🏥 Health Check

### Server Status
```
GET /
```
**Response:**
```
Elite Model Backend API çalışıyor
```

---

## 📌 Notlar

✅ **Tüm API'ler test edildi ve çalışıyor!**

- **Authentication**: `/api/auth/register`, `/api/auth/profile`, `/api/auth/change-password` endpoint'leri için `Authorization: Bearer {token}` header'ı gereklidir.
- **Public Endpoints**: `/api/applications` (POST), `/api/contact-messages` (POST) ve tüm GET endpoint'leri public'tir.
- **Admin Endpoints**: Tüm POST, PUT, PATCH, DELETE işlemleri (public olanlar hariç) admin yetkisi gerektirir.
- **Port**: Sunucu varsayılan olarak `3005` portunda çalışır.
- **Content-Type**: Tüm POST/PUT/PATCH isteklerinde `Content-Type: application/json` header'ı kullanılmalıdır.
- **Multi-Language Support**: Çoğu endpoint 4 dili destekler (TR, EN, DE, RU)
- **Default Admin**: Email: `admin@example.com`, Password: `123456`

### Application Status Values
- `NEW`: Yeni başvuru
- `REVIEW`: İnceleniyor
- `ACCEPTED`: Kabul edildi
- `REJECTED`: Reddedildi

### Cover Image Types
- `WOMEN`: Kadınlar
- `MEN`: Erkekler
- `NEW_FACES`: Yeni Yüzler

### Gender Values
- `MALE`: Erkek
- `FEMALE`: Kadın
- `OTHER`: Diğer

---

## 🔑 Postman Environment Variables

```json
{
  "baseUrl": "http://localhost:3005",
  "token": "{{your_jwt_token}}"
}
```

**Authorization Header:**
```
Authorization: Bearer {{token}}
```
