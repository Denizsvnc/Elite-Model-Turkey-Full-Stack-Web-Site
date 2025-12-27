-- CreateEnum
CREATE TYPE "AdminRole" AS ENUM ('SUPERADMIN', 'ADMIN', 'MODERATOR', 'SUPPORT');

-- CreateEnum
CREATE TYPE "CoverType" AS ENUM ('WOMEN', 'MEN', 'NEW_FACES');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('NEW', 'REVIEW', 'REJECTED', 'ACCEPTED');

-- CreateTable
CREATE TABLE "AdminUser" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "name" TEXT,
    "phone" TEXT,
    "role" "AdminRole" NOT NULL DEFAULT 'ADMIN',
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "AdminUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HomeSlider" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HomeSlider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HomeSliderItem" (
    "id" SERIAL NOT NULL,
    "homeSliderId" INTEGER NOT NULL,
    "title_tr" TEXT,
    "title_en" TEXT,
    "title_de" TEXT,
    "title_ru" TEXT,
    "description_tr" TEXT,
    "description_en" TEXT,
    "description_de" TEXT,
    "description_ru" TEXT,
    "imageUrl" TEXT NOT NULL,
    "linkUrl" TEXT,
    "order" INTEGER NOT NULL DEFAULT 1,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HomeSliderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoverImage" (
    "id" TEXT NOT NULL,
    "type" "CoverType" NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "order" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CoverImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SuccessHero" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "title_tr" TEXT NOT NULL,
    "title_en" TEXT NOT NULL,
    "title_de" TEXT NOT NULL,
    "title_ru" TEXT NOT NULL,
    "text_tr" TEXT NOT NULL,
    "text_en" TEXT NOT NULL,
    "text_de" TEXT NOT NULL,
    "text_ru" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SuccessHero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SuccessModelReview" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "title_tr" TEXT NOT NULL,
    "title_en" TEXT NOT NULL,
    "title_de" TEXT NOT NULL,
    "title_ru" TEXT NOT NULL,
    "text_tr" TEXT NOT NULL,
    "text_en" TEXT NOT NULL,
    "text_de" TEXT NOT NULL,
    "text_ru" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SuccessModelReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeaturedItem" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "title_tr" TEXT NOT NULL,
    "title_en" TEXT NOT NULL,
    "title_de" TEXT NOT NULL,
    "title_ru" TEXT NOT NULL,
    "content_tr" TEXT NOT NULL,
    "content_en" TEXT NOT NULL,
    "content_de" TEXT NOT NULL,
    "content_ru" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeaturedItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "News" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "title_tr" TEXT NOT NULL,
    "title_en" TEXT NOT NULL,
    "title_de" TEXT NOT NULL,
    "title_ru" TEXT NOT NULL,
    "content_tr" TEXT NOT NULL,
    "content_en" TEXT NOT NULL,
    "content_de" TEXT NOT NULL,
    "content_ru" TEXT NOT NULL,
    "publishedAt" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AboutPage" (
    "id" TEXT NOT NULL,
    "intro_title_tr" TEXT NOT NULL,
    "intro_title_en" TEXT NOT NULL,
    "intro_title_de" TEXT NOT NULL,
    "intro_title_ru" TEXT NOT NULL,
    "intro_text_tr" TEXT NOT NULL,
    "intro_text_en" TEXT NOT NULL,
    "intro_text_de" TEXT NOT NULL,
    "intro_text_ru" TEXT NOT NULL,
    "vision_imageUrl" TEXT NOT NULL,
    "vision_title_tr" TEXT NOT NULL,
    "vision_title_en" TEXT NOT NULL,
    "vision_title_de" TEXT NOT NULL,
    "vision_title_ru" TEXT NOT NULL,
    "vision_slogan_tr" TEXT NOT NULL,
    "vision_slogan_en" TEXT NOT NULL,
    "vision_slogan_de" TEXT NOT NULL,
    "vision_slogan_ru" TEXT NOT NULL,
    "vision_text_tr" TEXT NOT NULL,
    "vision_text_en" TEXT NOT NULL,
    "vision_text_de" TEXT NOT NULL,
    "vision_text_ru" TEXT NOT NULL,
    "mission_imageUrl" TEXT NOT NULL,
    "mission_title_tr" TEXT NOT NULL,
    "mission_title_en" TEXT NOT NULL,
    "mission_title_de" TEXT NOT NULL,
    "mission_title_ru" TEXT NOT NULL,
    "mission_slogan_tr" TEXT NOT NULL,
    "mission_slogan_en" TEXT NOT NULL,
    "mission_slogan_de" TEXT NOT NULL,
    "mission_slogan_ru" TEXT NOT NULL,
    "mission_text_tr" TEXT NOT NULL,
    "mission_text_en" TEXT NOT NULL,
    "mission_text_de" TEXT NOT NULL,
    "mission_text_ru" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AboutPage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactInfo" (
    "id" TEXT NOT NULL,
    "address_tr" TEXT NOT NULL,
    "address_en" TEXT NOT NULL,
    "address_de" TEXT NOT NULL,
    "address_ru" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "locationUrl" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContactInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FAQ" (
    "id" TEXT NOT NULL,
    "question_tr" TEXT NOT NULL,
    "question_en" TEXT NOT NULL,
    "question_de" TEXT NOT NULL,
    "question_ru" TEXT NOT NULL,
    "answer_tr" TEXT NOT NULL,
    "answer_en" TEXT NOT NULL,
    "answer_de" TEXT NOT NULL,
    "answer_ru" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 1,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FAQ_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "gender" "Gender" NOT NULL,
    "nationality" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "heightCm" INTEGER NOT NULL,
    "chestCm" INTEGER NOT NULL,
    "hipsCm" INTEGER NOT NULL,
    "footCm" INTEGER NOT NULL,
    "waistCm" INTEGER NOT NULL,
    "eyeColor" TEXT NOT NULL,
    "selfieUrl" TEXT NOT NULL,
    "profilePhoto" TEXT NOT NULL,
    "fullBodyPhoto" TEXT NOT NULL,
    "status" "ApplicationStatus" NOT NULL DEFAULT 'NEW',
    "adminNotes" TEXT,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactMessage" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContactMessage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AdminUser_email_key" ON "AdminUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "HomeSlider_key_key" ON "HomeSlider"("key");

-- CreateIndex
CREATE INDEX "HomeSliderItem_homeSliderId_idx" ON "HomeSliderItem"("homeSliderId");

-- CreateIndex
CREATE UNIQUE INDEX "HomeSliderItem_homeSliderId_order_key" ON "HomeSliderItem"("homeSliderId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "CoverImage_type_key" ON "CoverImage"("type");

-- AddForeignKey
ALTER TABLE "HomeSliderItem" ADD CONSTRAINT "HomeSliderItem_homeSliderId_fkey" FOREIGN KEY ("homeSliderId") REFERENCES "HomeSlider"("id") ON DELETE CASCADE ON UPDATE CASCADE;
