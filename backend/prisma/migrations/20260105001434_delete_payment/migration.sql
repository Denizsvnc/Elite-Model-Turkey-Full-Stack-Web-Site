/*
  Warnings:

  - You are about to drop the column `paymentKey` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `paymentMethod` on the `Application` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Application_paymentKey_key";

-- AlterTable
ALTER TABLE "Application" DROP COLUMN "paymentKey",
DROP COLUMN "paymentMethod";

-- DropEnum
DROP TYPE "PaymentMethod";

-- CreateIndex
CREATE INDEX "Application_status_idx" ON "Application"("status");

-- CreateIndex
CREATE INDEX "Application_submittedAt_idx" ON "Application"("submittedAt");
