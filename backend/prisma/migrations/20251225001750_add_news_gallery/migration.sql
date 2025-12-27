-- AlterTable
ALTER TABLE "News" ADD COLUMN     "galleryUrls" TEXT[] DEFAULT ARRAY[]::TEXT[];
