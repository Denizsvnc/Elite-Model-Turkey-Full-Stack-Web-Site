/*
  Warnings:

  - A unique constraint covering the columns `[primaryPaymentId]` on the table `Application` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Application" ADD COLUMN     "primaryPaymentId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Application_primaryPaymentId_key" ON "Application"("primaryPaymentId");

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_primaryPaymentId_fkey" FOREIGN KEY ("primaryPaymentId") REFERENCES "Payment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
