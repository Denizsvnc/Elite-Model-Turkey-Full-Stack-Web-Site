-- CreateTable
CREATE TABLE "ApplicationFee" (
    "id" SERIAL NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ApplicationFee_pkey" PRIMARY KEY ("id")
);
