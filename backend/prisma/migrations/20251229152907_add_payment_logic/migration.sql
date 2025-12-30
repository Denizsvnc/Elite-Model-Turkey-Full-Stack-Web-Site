/*
  Warnings:

  - A unique constraint covering the columns `[paymentKey]` on the table `Application` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('IBAN', 'CREDIT_CARD');

-- AlterTable
ALTER TABLE "Application" ADD COLUMN     "paymentAmount" DECIMAL(10,2),
ADD COLUMN     "paymentKey" TEXT,
ADD COLUMN     "paymentMethod" "PaymentMethod" NOT NULL DEFAULT 'IBAN';

-- CreateIndex
CREATE UNIQUE INDEX "Application_paymentKey_key" ON "Application"("paymentKey");
