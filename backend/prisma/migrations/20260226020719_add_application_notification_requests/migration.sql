-- CreateTable
CREATE TABLE "ApplicationPage_Status" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ApplicationPage_Status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApplicationNotificationRequest" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isNotified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ApplicationNotificationRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ApplicationNotificationRequest_email_key" ON "ApplicationNotificationRequest"("email");

-- CreateIndex
CREATE INDEX "ApplicationNotificationRequest_email_idx" ON "ApplicationNotificationRequest"("email");

-- CreateIndex
CREATE INDEX "ApplicationNotificationRequest_isNotified_idx" ON "ApplicationNotificationRequest"("isNotified");
