import prisma from '../src/lib/prisma';
import bcrypt from 'bcryptjs';

async function main() {
    console.log('seed dosyası calistiriliyor...');

    // admin kullanıcısı olustur
    const hashedPassword = await bcrypt.hash('admin123', 10);

    const admin = await prisma.adminUser.upsert({
        where: { email: 'admin@elitemodel.com' },
        update: {},
        create: {
            email: 'admin@elitemodel.com',
            passwordHash: hashedPassword,
            name: 'Super Admin',
            phone: '+90 555 000 0000',
            role: 'SUPERADMIN',
            isActive: true
        }
    });
    console.log('✅ Admin kullanıcısı oluşturuldu:', admin.email);

    //başvuru sayfasi durumu
    await prisma.applicationPage_Status.upsert({
        where: { id: 1 },
        update: {},
        create: {
            id: 1,
            isActive: true
        }
    });
    console.log('✅ Başvuru sayfası durumu ayarlandı');

   // başvuru ücreti
    const fee = await prisma.applicationFee.upsert({
        where: { id: 1 },
        update: {},
        create: {
            id: 1,
            amount: 1000
        }
    });
    console.log('✅ Başvuru ücreti ayarlandı: ₺', fee.amount);

    // bildirim kurallari
    const notificationRules = [
        {
            slug: 'contact_form',
            name: 'İletişim Formu',
            emailEnabled: true,
            telegramEnabled: false,
            whatsappEnabled: false,
            isActive: true
        },
        {
            slug: 'new_application',
            name: 'Yeni Başvuru',
            emailEnabled: true,
            telegramEnabled: false,
            whatsappEnabled: false,
            isActive: true
        },
        {
            slug: 'payment_received',
            name: 'Ödeme Alındı',
            emailEnabled: true,
            telegramEnabled: false,
            whatsappEnabled: false,
            isActive: true
        }
    ];

    for (const rule of notificationRules) {
        await prisma.notificationRule.upsert({
            where: { slug: rule.slug },
            update: {},
            create: rule
        });
    }
    console.log('✅ Bildirim kuralları oluşturuldu');

    // sistem ayarlari
    const systemSettings = [
        // Email Settings
        { key: 'email_enabled', value: 'false', description: 'Email Gönderimi Aktif', group: 'email', isSecret: false },
        { key: 'email_smtp_host', value: 'smtp.gmail.com', description: 'SMTP Host', group: 'email', isSecret: false },
        { key: 'email_smtp_port', value: '587', description: 'SMTP Port', group: 'email', isSecret: false },
        { key: 'email_smtp_secure', value: 'false', description: 'SMTP Secure (SSL)', group: 'email', isSecret: false },
        { key: 'email_smtp_user', value: '', description: 'SMTP Kullanıcı', group: 'email', isSecret: false },
        { key: 'email_smtp_pass', value: '', description: 'SMTP Şifre', group: 'email', isSecret: true },
        { key: 'email_from_name', value: 'The Elite Model Turkey', description: 'Gönderen Adı', group: 'email', isSecret: false },
        { key: 'email_from_address', value: 'noreply@elitemodel.com', description: 'Gönderen Email', group: 'email', isSecret: false },

        // Telegram Settings
        { key: 'telegram_enabled', value: 'false', description: 'Telegram Bildirimleri Aktif', group: 'telegram', isSecret: false },
        { key: 'telegram_bot_token', value: '', description: 'Bot Token', group: 'telegram', isSecret: true },
        { key: 'telegram_chat_id', value: '', description: 'Chat ID', group: 'telegram', isSecret: false },

        // WhatsApp Settings
        { key: 'whatsapp_enabled', value: 'false', description: 'WhatsApp Bildirimleri Aktif', group: 'whatsapp', isSecret: false },
        { key: 'whatsapp_api_url', value: '', description: 'API URL', group: 'whatsapp', isSecret: false },
        { key: 'whatsapp_api_key', value: '', description: 'API Key', group: 'whatsapp', isSecret: true },
        { key: 'whatsapp_phone', value: '', description: 'WhatsApp Numarası', group: 'whatsapp', isSecret: false },

        // Genel Ayarlar
        { key: 'site_name', value: 'Elite Model Turkey', description: 'Site Adı', group: 'general', isSecret: false },
        { key: 'site_description', value: 'Türkiye\'nin en prestijli model ajansı', description: 'Site Açıklaması', group: 'general', isSecret: false },
        { key: 'maintenance_mode', value: 'false', description: 'Bakım Modu', group: 'general', isSecret: false },
    ];

    for (const setting of systemSettings) {
        await prisma.systemSetting.upsert({
            where: { key: setting.key },
            update: {},
            create: {
                ...setting,
                isActive: true
            }
        });
    }
    console.log('✅ Sistem ayarları oluşturuldu');

    // medya ve içerik ayarlari
    const socialMediaLinks = [
        { platform: 'Instagram', name: 'Instagram', url: 'https://instagram.com/elitemodelturkey', iconKey: 'Instagram', isActive: true, order: 1 },
        { platform: 'Facebook', name: 'Facebook', url: 'https://facebook.com/elitemodelturkey', iconKey: 'Facebook', isActive: true, order: 2 },
        { platform: 'Twitter', name: 'Twitter/X', url: 'https://twitter.com/elitemodeltr', iconKey: 'Twitter', isActive: true, order: 3 },
        { platform: 'LinkedIn', name: 'LinkedIn', url: 'https://linkedin.com/company/elite-model-turkey', iconKey: 'LinkedIn', isActive: true, order: 4 },
        { platform: 'YouTube', name: 'YouTube', url: 'https://youtube.com/@elitemodelturkey', iconKey: 'YouTube', isActive: true, order: 5 },
        { platform: 'TikTok', name: 'TikTok', url: 'https://tiktok.com/@elitemodelturkey', iconKey: 'TikTok', isActive: true, order: 6 }
    ];

    for (const social of socialMediaLinks) {
        await prisma.socialMedia.upsert({
            where: { platform: social.platform },
            update: {},
            create: social
        });
    }
    console.log('✅ Sosyal medya linkleri oluşturuldu');

    // ═══════════════════════════════════════════
    // 7. COVER IMAGES (Kapak Görselleri)
    // ═══════════════════════════════════════════
    const coverImages = [
        { type: 'WOMEN' as const, imageUrl: '/uploads/covers/women-cover.jpg', isActive: true, order: 1 },
        { type: 'MEN' as const, imageUrl: '/uploads/covers/men-cover.jpg', isActive: true, order: 2 },
        { type: 'NEW_FACES' as const, imageUrl: '/uploads/covers/new-faces-cover.jpg', isActive: true, order: 3 }
    ];

    for (const cover of coverImages) {
        await prisma.coverImage.upsert({
            where: { type: cover.type },
            update: {},
            create: cover
        });
    }
    console.log('✅ Kapak görselleri oluşturuldu');

    // ═══════════════════════════════════════════
    // 8. İLETİŞİM BİLGİLERİ
    // ═══════════════════════════════════════════
    const existingContact = await prisma.contactInfo.findFirst();
    if (!existingContact) {
        await prisma.contactInfo.create({
            data: {
                address_tr: 'Levent Mah. Büyükdere Cad. No:185 Şişli/İstanbul',
                address_en: 'Levent Mah. Buyukdere Ave. No:185 Sisli/Istanbul, Turkey',
                address_de: 'Levent Mah. Büyükdere Str. Nr:185 Şişli/Istanbul, Türkei',
                address_ru: 'Левент Мах. Бююкдере пр. №185 Шишли/Стамбул, Турция',
                phone: '+90 212 000 00 00',
                email: 'info@elitemodel.com.tr',
                locationUrl: 'https://maps.google.com/?q=41.0794,29.0103',
                isActive: true
            }
        });
    }
    console.log('✅ İletişim bilgileri oluşturuldu');

    // ═══════════════════════════════════════════
    // 9. SSS (FAQ)
    // ═══════════════════════════════════════════
    const faqs = [
        {
            question_tr: 'Başvuru yapmak için yaş sınırı var mı?',
            question_en: 'Is there an age limit to apply?',
            question_de: 'Gibt es eine Altersgrenze für die Bewerbung?',
            question_ru: 'Есть ли возрастное ограничение для подачи заявки?',
            answer_tr: 'Başvuru için minimum yaş 14, maksimum yaş 28\'dir. 18 yaş altı adaylar için veli onayı gerekmektedir.',
            answer_en: 'The minimum age to apply is 14 and the maximum is 28. Parental consent is required for candidates under 18.',
            answer_de: 'Das Mindestalter für eine Bewerbung beträgt 14 Jahre, das Höchstalter 28 Jahre. Für Kandidaten unter 18 Jahren ist die Zustimmung der Eltern erforderlich.',
            answer_ru: 'Минимальный возраст для подачи заявки — 14 лет, максимальный — 28 лет. Для кандидатов младше 18 лет требуется согласие родителей.',
            order: 1,
            isActive: true
        },
        {
            question_tr: 'Başvuru ücreti ne kadar?',
            question_en: 'What is the application fee?',
            question_de: 'Wie hoch ist die Bewerbungsgebühr?',
            question_ru: 'Какова стоимость подачи заявки?',
            answer_tr: 'Başvuru ücreti hakkında güncel bilgiye başvuru sayfamızdan ulaşabilirsiniz.',
            answer_en: 'You can find current information about the application fee on our application page.',
            answer_de: 'Aktuelle Informationen zur Bewerbungsgebühr finden Sie auf unserer Bewerbungsseite.',
            answer_ru: 'Актуальную информацию о стоимости подачи заявки вы можете найти на нашей странице подачи заявки.',
            order: 2,
            isActive: true
        },
        {
            question_tr: 'Başvuru sonucunu ne zaman öğrenebilirim?',
            question_en: 'When will I know the result of my application?',
            question_de: 'Wann erfahre ich das Ergebnis meiner Bewerbung?',
            question_ru: 'Когда я узнаю результат моей заявки?',
            answer_tr: 'Başvurunuz değerlendirme sürecine alındıktan sonra en geç 2 hafta içinde sizinle iletişime geçilecektir.',
            answer_en: 'You will be contacted within 2 weeks after your application is reviewed.',
            answer_de: 'Sie werden innerhalb von 2 Wochen nach Prüfung Ihrer Bewerbung kontaktiert.',
            answer_ru: 'С вами свяжутся в течение 2 недель после рассмотрения вашей заявки.',
            order: 3,
            isActive: true
        },
        {
            question_tr: 'Profesyonel fotoğraf çektirmem gerekiyor mu?',
            question_en: 'Do I need professional photos?',
            question_de: 'Brauche ich professionelle Fotos?',
            question_ru: 'Нужны ли мне профессиональные фотографии?',
            answer_tr: 'Hayır, ilk başvuru için doğal ve makyajsız fotoğraflar yeterlidir. Cep telefonuyla çekilmiş net fotoğraflar kabul edilmektedir.',
            answer_en: 'No, natural and makeup-free photos are sufficient for the first application. Clear photos taken with a mobile phone are accepted.',
            answer_de: 'Nein, natürliche und ungeschminkte Fotos reichen für die Erstbewerbung aus. Klare Handyfotos werden akzeptiert.',
            answer_ru: 'Нет, для первой подачи заявки достаточно натуральных фотографий без макияжа. Принимаются четкие фотографии, сделанные на мобильный телефон.',
            order: 4,
            isActive: true
        },
        {
            question_tr: 'Boy ve kilo kriterleri nelerdir?',
            question_en: 'What are the height and weight criteria?',
            question_de: 'Welche Größen- und Gewichtskriterien gibt es?',
            question_ru: 'Каковы критерии роста и веса?',
            answer_tr: 'Kadın modeller için minimum boy 170 cm, erkek modeller için minimum boy 180 cm önerilmektedir. Ancak her başvuru bireysel olarak değerlendirilir.',
            answer_en: 'A minimum height of 170 cm is recommended for female models and 180 cm for male models. However, each application is evaluated individually.',
            answer_de: 'Für weibliche Models wird eine Mindestgröße von 170 cm empfohlen, für männliche Models 180 cm. Jede Bewerbung wird jedoch individuell bewertet.',
            answer_ru: 'Для моделей-женщин рекомендуется минимальный рост 170 см, для моделей-мужчин — 180 см. Однако каждая заявка рассматривается индивидуально.',
            order: 5,
            isActive: true
        }
    ];

    for (const faq of faqs) {
        const existing = await prisma.fAQ.findFirst({ where: { order: faq.order } });
        if (!existing) {
            await prisma.fAQ.create({ data: faq });
        }
    }
    console.log('✅ SSS (FAQ) oluşturuldu');

    // ═══════════════════════════════════════════
    // 10. HAKKIMIZDA SAYFASI
    // ═══════════════════════════════════════════
    const existingAbout = await prisma.aboutPage.findFirst();
    if (!existingAbout) {
        await prisma.aboutPage.create({
            data: {
                intro_title_tr: 'Elite Model Turkey Hakkında',
                intro_title_en: 'About Elite Model Turkey',
                intro_title_de: 'Über Elite Model Turkey',
                intro_title_ru: 'О Elite Model Turkey',
                intro_text_tr: 'Elite Model Turkey, Türkiye\'nin en prestijli model ajanslarından biri olarak, yetenekli ve tutkulu bireyleri moda dünyasıyla buluşturmaktadır.',
                intro_text_en: 'Elite Model Turkey, as one of Turkey\'s most prestigious model agencies, connects talented and passionate individuals with the fashion world.',
                intro_text_de: 'Elite Model Turkey, eine der renommiertesten Modelagenturen der Türkei, verbindet talentierte und leidenschaftliche Menschen mit der Modewelt.',
                intro_text_ru: 'Elite Model Turkey, одно из самых престижных модельных агентств Турции, объединяет талантливых и увлеченных людей с миром моды.',
                vision_imageUrl: '/uploads/about/vision.jpg',
                vision_title_tr: 'Vizyonumuz',
                vision_title_en: 'Our Vision',
                vision_title_de: 'Unsere Vision',
                vision_title_ru: 'Наше видение',
                vision_slogan_tr: 'Geleceğin yıldızlarını bugünden keşfediyoruz',
                vision_slogan_en: 'Discovering tomorrow\'s stars today',
                vision_slogan_de: 'Wir entdecken die Stars von morgen schon heute',
                vision_slogan_ru: 'Мы открываем звезд завтрашнего дня уже сегодня',
                vision_text_tr: 'Global moda endüstrisinde Türkiye\'yi en iyi şekilde temsil eden, uluslararası standartlarda bir model ajansı olmak.',
                vision_text_en: 'To be an internationally standardized model agency that best represents Turkey in the global fashion industry.',
                vision_text_de: 'Eine international standardisierte Modelagentur zu sein, die die Türkei in der globalen Modebranche bestmöglich vertritt.',
                vision_text_ru: 'Быть модельным агентством международного стандарта, наилучшим образом представляющим Турцию в мировой индустрии моды.',
                mission_imageUrl: '/uploads/about/mission.jpg',
                mission_title_tr: 'Misyonumuz',
                mission_title_en: 'Our Mission',
                mission_title_de: 'Unsere Mission',
                mission_title_ru: 'Наша миссия',
                mission_slogan_tr: 'Her yetenek bir fırsatı hak eder',
                mission_slogan_en: 'Every talent deserves an opportunity',
                mission_slogan_de: 'Jedes Talent verdient eine Chance',
                mission_slogan_ru: 'Каждый талант заслуживает возможности',
                mission_text_tr: 'Genç yetenekleri keşfederek onlara profesyonel eğitim ve uluslararası kariyer fırsatları sunmak.',
                mission_text_en: 'To discover young talents and provide them with professional training and international career opportunities.',
                mission_text_de: 'Junge Talente zu entdecken und ihnen professionelle Ausbildung und internationale Karrieremöglichkeiten zu bieten.',
                mission_text_ru: 'Открывать молодые таланты и предоставлять им профессиональное обучение и международные карьерные возможности.',
                isActive: true
            }
        });
    }
    console.log('✅ Hakkımızda sayfası oluşturuldu');

    // ═══════════════════════════════════════════
    // 11. ANA SAYFA SLIDER
    // ═══════════════════════════════════════════
    const existingSlider = await prisma.homeSlider.findFirst({ where: { key: 'main-slider' } });
    if (!existingSlider) {
        const slider = await prisma.homeSlider.create({
            data: {
                key: 'main-slider',
                name: 'Ana Sayfa Slider',
                isActive: true,
                items: {
                    create: [
                        {
                            title_tr: 'Elite Model Turkey\'e Hoş Geldiniz',
                            title_en: 'Welcome to Elite Model Turkey',
                            title_de: 'Willkommen bei Elite Model Turkey',
                            title_ru: 'Добро пожаловать в Elite Model Turkey',
                            description_tr: 'Türkiye\'nin en prestijli model ajansı',
                            description_en: 'Turkey\'s most prestigious model agency',
                            description_de: 'Die renommierteste Modelagentur der Türkei',
                            description_ru: 'Самое престижное модельное агентство Турции',
                            imageUrl: '/uploads/slider/slide-1.jpg',
                            linkUrl: '/apply',
                            order: 1,
                            isActive: true
                        },
                        {
                            title_tr: 'Kariyerinize Şimdi Başlayın',
                            title_en: 'Start Your Career Now',
                            title_de: 'Starten Sie jetzt Ihre Karriere',
                            title_ru: 'Начните свою карьеру прямо сейчас',
                            description_tr: 'Hemen başvurun ve hayallerinize bir adım daha yaklaşın',
                            description_en: 'Apply now and get one step closer to your dreams',
                            description_de: 'Bewerben Sie sich jetzt und kommen Sie Ihren Träumen einen Schritt näher',
                            description_ru: 'Подайте заявку сейчас и станьте на шаг ближе к своей мечте',
                            imageUrl: '/uploads/slider/slide-2.jpg',
                            linkUrl: '/apply',
                            order: 2,
                            isActive: true
                        },
                        {
                            title_tr: 'Uluslararası Fırsatlar',
                            title_en: 'International Opportunities',
                            title_de: 'Internationale Möglichkeiten',
                            title_ru: 'Международные возможности',
                            description_tr: 'Dünya çapında moda devleriyle çalışma şansı',
                            description_en: 'Chance to work with fashion giants worldwide',
                            description_de: 'Chance, mit weltweiten Modegiganten zu arbeiten',
                            description_ru: 'Шанс работать с мировыми гигантами моды',
                            imageUrl: '/uploads/slider/slide-3.jpg',
                            linkUrl: '/about',
                            order: 3,
                            isActive: true
                        }
                    ]
                }
            }
        });
        console.log('✅ Ana sayfa slider oluşturuldu -', slider.name);
    } else {
        console.log('✅ Ana sayfa slider zaten mevcut');
    }

    // ═══════════════════════════════════════════
    // 12. ÖNE ÇIKAN İÇERİKLER (Featured Items)
    // ═══════════════════════════════════════════
    const existingFeatured = await prisma.featuredItem.findFirst();
    if (!existingFeatured) {
        const featuredItems = [
            {
                imageUrl: '/uploads/featured/featured-1.jpg',
                title_tr: 'Profesyonel Eğitim',
                title_en: 'Professional Training',
                title_de: 'Professionelle Ausbildung',
                title_ru: 'Профессиональное обучение',
                content_tr: 'Alanında uzman eğitmenlerle podyum, fotoğraf çekimi ve kişisel gelişim eğitimleri.',
                content_en: 'Runway, photoshoot and personal development training with expert instructors.',
                content_de: 'Laufsteg-, Fotoshooting- und Persönlichkeitsentwicklungstraining mit erfahrenen Trainern.',
                content_ru: 'Обучение подиуму, фотосъемке и личному развитию с экспертами-инструкторами.',
                order: 1,
                isActive: true
            },
            {
                imageUrl: '/uploads/featured/featured-2.jpg',
                title_tr: 'Uluslararası Kariyer',
                title_en: 'International Career',
                title_de: 'Internationale Karriere',
                title_ru: 'Международная карьера',
                content_tr: 'Dünyanın dört bir yanındaki moda haftalarında ve kampanyalarda yer alma fırsatı.',
                content_en: 'Opportunity to participate in fashion weeks and campaigns around the world.',
                content_de: 'Möglichkeit, an Modewochen und Kampagnen auf der ganzen Welt teilzunehmen.',
                content_ru: 'Возможность участия в неделях моды и кампаниях по всему миру.',
                order: 2,
                isActive: true
            },
            {
                imageUrl: '/uploads/featured/featured-3.jpg',
                title_tr: 'Portfolyo Desteği',
                title_en: 'Portfolio Support',
                title_de: 'Portfolio-Unterstützung',
                title_ru: 'Поддержка портфолио',
                content_tr: 'Profesyonel fotoğrafçılarla çekim ve dijital portfolyo hazırlama desteği.',
                content_en: 'Professional photo shoots and digital portfolio preparation support.',
                content_de: 'Professionelle Fotoshootings und Unterstützung bei der digitalen Portfolio-Erstellung.',
                content_ru: 'Профессиональные фотосессии и поддержка в подготовке цифрового портфолио.',
                order: 3,
                isActive: true
            }
        ];

        for (const item of featuredItems) {
            await prisma.featuredItem.create({ data: item });
        }
    }
    console.log('✅ Öne çıkan içerikler oluşturuldu');

    // ═══════════════════════════════════════════
    // 13. BAŞARI HİKAYELERİ - Hero
    // ═══════════════════════════════════════════
    const existingHero = await prisma.successHero.findFirst();
    if (!existingHero) {
        await prisma.successHero.create({
            data: {
                imageUrl: '/uploads/success/hero.jpg',
                isActive: true,
                title_tr: 'Başarı Hikayeleri',
                title_en: 'Success Stories',
                title_de: 'Erfolgsgeschichten',
                title_ru: 'Истории успеха',
                text_tr: 'Elite Model Turkey ailesinin gurur duyduğu başarı hikayeleri.',
                text_en: 'Success stories that the Elite Model Turkey family is proud of.',
                text_de: 'Erfolgsgeschichten, auf die die Elite Model Turkey Familie stolz ist.',
                text_ru: 'Истории успеха, которыми гордится семья Elite Model Turkey.'
            }
        });
    }
    console.log('✅ Başarı hikayeleri hero oluşturuldu');

    // ═══════════════════════════════════════════
    // 14. BAŞARI HİKAYELERİ - Model Yorumları
    // ═══════════════════════════════════════════
    const existingReview = await prisma.successModelReview.findFirst();
    if (!existingReview) {
        const reviews = [
            {
                imageUrl: '/uploads/success/model-1.jpg',
                isActive: true,
                title_tr: 'Ayşe Y.',
                title_en: 'Ayse Y.',
                title_de: 'Ayse Y.',
                title_ru: 'Айше Й.',
                text_tr: 'Elite Model Turkey sayesinde Milano Moda Haftası\'nda podyuma çıktım. Hayallerimin ötesinde bir deneyimdi.',
                text_en: 'Thanks to Elite Model Turkey, I walked the runway at Milan Fashion Week. It was an experience beyond my dreams.',
                text_de: 'Dank Elite Model Turkey bin ich bei der Mailänder Modewoche über den Laufsteg gelaufen. Es war eine Erfahrung, die meine Träume übertraf.',
                text_ru: 'Благодаря Elite Model Turkey я вышла на подиум Недели моды в Милане. Это был опыт, превзошедший мои мечты.'
            },
            {
                imageUrl: '/uploads/success/model-2.jpg',
                isActive: true,
                title_tr: 'Mehmet K.',
                title_en: 'Mehmet K.',
                title_de: 'Mehmet K.',
                title_ru: 'Мехмет К.',
                text_tr: 'Profesyonel ekip ve sürekli destek sayesinde uluslararası markaların kampanyalarında yer almaya başladım.',
                text_en: 'Thanks to the professional team and constant support, I started appearing in campaigns of international brands.',
                text_de: 'Dank des professionellen Teams und der ständigen Unterstützung begann ich, in Kampagnen internationaler Marken aufzutreten.',
                text_ru: 'Благодаря профессиональной команде и постоянной поддержке я начал участвовать в кампаниях международных брендов.'
            }
        ];

        for (const review of reviews) {
            await prisma.successModelReview.create({ data: review });
        }
    }
    console.log('✅ Model yorumları oluşturuldu');

    // ═══════════════════════════════════════════
    // ÖZET
    // ═══════════════════════════════════════════
    console.log('\n═══════════════════════════════════════════');
    console.log('🎉 Seeding tamamlandı!');
    console.log('═══════════════════════════════════════════');
    console.log('\n📧 Admin Giriş Bilgileri:');
    console.log('   Email   : admin@elitemodel.com');
    console.log('   Şifre   : admin123');
    console.log('   Rol     : SUPERADMIN');
    console.log('\n📋 Oluşturulan Kayıtlar:');
    console.log('   • Admin Kullanıcısı');
    console.log('   • Başvuru Sayfası Durumu');
    console.log('   • Başvuru Ücreti (₺1000)');
    console.log('   • Bildirim Kuralları (3 adet)');
    console.log('   • Sistem Ayarları (18 adet)');
    console.log('   • Sosyal Medya Linkleri (6 adet)');
    console.log('   • Kapak Görselleri (3 adet: WOMEN, MEN, NEW_FACES)');
    console.log('   • İletişim Bilgileri');
    console.log('   • SSS / FAQ (5 adet)');
    console.log('   • Hakkımızda Sayfası');
    console.log('   • Ana Sayfa Slider (3 slayt)');
    console.log('   • Öne Çıkan İçerikler (3 adet)');
    console.log('   • Başarı Hikayeleri Hero');
    console.log('   • Model Yorumları (2 adet)');
    console.log('\n⚠️  Üretim ortamında admin şifresini mutlaka değiştirin!');
    console.log('⚠️  Görsel dosyalarını /uploads klasörüne yüklemeyi unutmayın!\n');
}

main()
    .catch((e) => {
        console.error('❌ Seeding hatası:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
