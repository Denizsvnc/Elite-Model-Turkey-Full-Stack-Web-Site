/*
  Warnings:

  - You are about to drop the column `iyzicoToken` on the `Payment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[paytrMerchantOid]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ApplicationNotificationRequest_email_idx";

-- DropIndex
DROP INDEX "ApplicationNotificationRequest_isNotified_idx";

-- DropIndex
DROP INDEX "Payment_iyzicoToken_key";

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "iyzicoToken",
ADD COLUMN     "paytrMerchantOid" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Payment_paytrMerchantOid_key" ON "Payment"("paytrMerchantOid");
