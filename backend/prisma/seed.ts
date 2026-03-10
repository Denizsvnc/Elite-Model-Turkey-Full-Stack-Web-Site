import prisma from "../src/lib/prisma";
import bcrypt from "bcryptjs";

async function main() {
  console.log("🌱 Seeding database...");

  // 1. Admin Kullanıcısı Oluştur
  const hashedPassword = await bcrypt.hash("admin123", 10);

  const admin = await prisma.adminUser.upsert({
    where: { email: "admin@elitemodel.com" },
    update: {},
    create: {
      email: "admin@elitemodel.com",
      passwordHash: hashedPassword,
      name: "Super Admin",
      phone: "+90 555 000 0000",
      role: "SUPERADMIN",
      isActive: true,
    },
  });

  console.log("✅ Admin kullanıcısı oluşturuldu:", admin.email);

  // 2. Başvuru Sayfası Durumu
  const appPageStatus = await prisma.applicationPage_Status.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      isActive: true,
      updatedAt: new Date(),
    },
  });

  console.log("✅ Başvuru sayfası durumu ayarlandı");

  // 3. Başvuru Ücreti
  const fee = await prisma.applicationFee.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      amount: 1000,
    },
  });

  console.log("✅ Başvuru ücreti ayarlandı: ₺", fee.amount);

  // 4. Bildirim Kuralları
  const notificationRules = [
    {
      slug: "contact_form",
      name: "İletişim Formu",
      emailEnabled: true,
      telegramEnabled: false,
      whatsappEnabled: false,
      isActive: true,
    },
    {
      slug: "new_application",
      name: "Yeni Başvuru",
      emailEnabled: true,
      telegramEnabled: false,
      whatsappEnabled: false,
      isActive: true,
    },
  ];

  for (const rule of notificationRules) {
    await prisma.notificationRule.upsert({
      where: { slug: rule.slug },
      update: {},
      create: rule,
    });
  }

  console.log("✅ Bildirim kuralları oluşturuldu");

  // 5. Sistem Ayarları
  const systemSettings = [
    // Email Settings
    {
      key: "email_enabled",
      value: "false",
      description: "Email Gönderimi Aktif",
      group: "email",
      isSecret: false,
    },
    {
      key: "email_smtp_host",
      value: "smtp.gmail.com",
      description: "SMTP Host",
      group: "email",
      isSecret: false,
    },
    {
      key: "email_smtp_port",
      value: "587",
      description: "SMTP Port",
      group: "email",
      isSecret: false,
    },
    {
      key: "email_smtp_secure",
      value: "false",
      description: "SMTP Secure (SSL)",
      group: "email",
      isSecret: false,
    },
    {
      key: "email_smtp_user",
      value: "",
      description: "SMTP Kullanıcı",
      group: "email",
      isSecret: false,
    },
    {
      key: "email_smtp_pass",
      value: "",
      description: "SMTP Şifre",
      group: "email",
      isSecret: true,
    },
    {
      key: "email_from_name",
      value: "The Elite Model Turkey",
      description: "Gönderen Adı",
      group: "email",
      isSecret: false,
    },
    {
      key: "email_from_address",
      value: "noreply@elitemodel.com",
      description: "Gönderen Email",
      group: "email",
      isSecret: false,
    },

    // Telegram Settings
    {
      key: "telegram_enabled",
      value: "false",
      description: "Telegram Bildirimleri Aktif",
      group: "telegram",
      isSecret: false,
    },
    {
      key: "telegram_bot_token",
      value: "",
      description: "Bot Token",
      group: "telegram",
      isSecret: true,
    },
    {
      key: "telegram_chat_id",
      value: "",
      description: "Chat ID",
      group: "telegram",
      isSecret: false,
    },

    // WhatsApp Settings
    {
      key: "whatsapp_enabled",
      value: "false",
      description: "WhatsApp Bildirimleri Aktif",
      group: "whatsapp",
      isSecret: false,
    },
    {
      key: "whatsapp_api_url",
      value: "",
      description: "API URL",
      group: "whatsapp",
      isSecret: false,
    },
    {
      key: "whatsapp_api_key",
      value: "",
      description: "API Key",
      group: "whatsapp",
      isSecret: true,
    },
    {
      key: "whatsapp_phone",
      value: "",
      description: "WhatsApp Numarası",
      group: "whatsapp",
      isSecret: false,
    },
  ];

  for (const setting of systemSettings) {
    await prisma.systemSetting.upsert({
      where: { key: setting.key },
      update: {},
      create: {
        ...setting,
        isActive: true,
      },
    });
  }

  console.log("✅ Sistem ayarları oluşturuldu");

  // 6. Sosyal Medya Linkleri (Örnek)
  const socialMediaLinks = [
    {
      platform: "Instagram",
      name: "Instagram",
      url: "https://instagram.com/elitemodelturkey",
      iconKey: "Instagram",
      isActive: true,
      order: 1,
    },
    {
      platform: "Facebook",
      name: "Facebook",
      url: "https://facebook.com/elitemodelturkey",
      iconKey: "Facebook",
      isActive: true,
      order: 2,
    },
    {
      platform: "Twitter",
      name: "Twitter/X",
      url: "https://twitter.com/elitemodeltr",
      iconKey: "Twitter",
      isActive: true,
      order: 3,
    },
    {
      platform: "LinkedIn",
      name: "LinkedIn",
      url: "https://linkedin.com/company/elite-model-turkey",
      iconKey: "LinkedIn",
      isActive: true,
      order: 4,
    },
  ];

  for (const social of socialMediaLinks) {
    await prisma.socialMedia.upsert({
      where: { platform: social.platform },
      update: {},
      create: social,
    });
  }

  console.log("✅ Sosyal medya linkleri oluşturuldu");

  console.log("\n🎉 Seeding tamamlandı!");
  console.log("\n📧 Admin Giriş Bilgileri:");
  console.log("   Email: admin@elitemodel.com");
  console.log("   Şifre: admin123");
  console.log("\n⚠️  Üretim ortamında şifreyi mutlaka değiştirin!\n");
}

main()
  .catch((e) => {
    console.error("❌ Seeding hatası:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
