Elite Model Turkey Full-Stack Web Site / Elite Model Türkiye Tam Kapsamlı Web Sitesi
English | Türkçe

<a name="installation-en"></a>

🇬🇧 Installation & Setup
Follow these steps to set up and run the project locally.

Prerequisites
Node.js installed

PostgreSQL database created

1. Backend Setup
Navigate to the backend folder and install dependencies:

Bash

cd backend
npm install

Configuration (.env)

Create a .env file in the backend directory and populate it with the following variables:

Ini, TOML

# Database Connection
DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"

# JWT Settings
# Use a random string generator for the secret
JWT_SECRET="YOUR_GENERATED_SECURE_TOKEN"

JWT_EXPIRES_IN="7d"

# App Settings
NODE_ENV="development"

DEBUG=false

PORT=3005

# Email Settings (SMTP / Gmail)
# Note: Use 'App Password' for Gmail, not your login password.
EMAIL_USER="example_sender@mail.com"

EMAIL_PASS="your_gmail_app_password"

# Contact Form Recipient
CONTACT_EMAIL="receiver@mail.com"

# Job Application Recipient
APPLICATION_EMAIL="hr@mail.com"

Database Migration

Run the following commands to generate the Prisma client and push the schema to your database:

Bash

npx prisma generate

npx prisma migrate dev --name init

2. Frontend Setup
3. 
Open a new terminal, navigate to the frontend folder, install dependencies, and start the app:

Bash

cd frontend

npm install

npm run dev

<a name="kurulum-tr"></a>

🇹🇷 Kurulum ve Yapılandırma
Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin.

Ön Hazırlık
Node.js yüklü olmalıdır.

PostgreSQL veritabanı oluşturulmuş olmalıdır.

1. Backend Kurulumu
backend klasörüne gidin ve gerekli paketleri yükleyin:

Bash

cd backend

npm install

Yapılandırma (.env)

backend klasörü içerisinde .env adında bir dosya oluşturun ve aşağıdaki ayarları kendinize göre düzenleyip yapıştırın:

Ini, TOML

# Veritabanı Bağlantısı
DATABASE_URL="postgresql://kullanici:sifre@localhost:5432/veritabani_adi?schema=public"

# JWT Ayarları
# Güvenli bir token oluşturup buraya yapıştırın
JWT_SECRET="OLUSTURULAN_GUVENLI_TOKEN_BURAYA"

JWT_EXPIRES_IN="7d"

# Uygulama Ayarları
NODE_ENV="development"

DEBUG=false

PORT=3005

# Mail Ayarları (Gmail için)
# Not: Gmail için normal şifrenizi değil, 'Uygulama Şifresi'ni (App Password) kullanın.
EMAIL_USER="gonderici@mail.com"
EMAIL_PASS="gmail_uygulama_sifresi"

# İletişim formu mesajlarının gideceği adres
CONTACT_EMAIL="alici@mail.com"

# Başvuruların gideceği adres
APPLICATION_EMAIL="ik@mail.com"
Veritabanı Migrasyonu
Prisma istemcisini oluşturmak ve tabloları veritabanına kaydetmek için sırasıyla şu komutları çalıştırın:

Bash

npx prisma generate

npx prisma migrate dev --name init

2. Frontend Kurulumu
Yeni bir terminal açın, frontend klasörüne gidin, paketleri yükleyin ve projeyi başlatın:

Bash

cd frontend

npm install

npm run dev
