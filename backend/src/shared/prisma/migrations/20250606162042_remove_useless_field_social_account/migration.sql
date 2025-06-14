/*
  Warnings:

  - You are about to drop the column `socialAccountId` on the `SocialAccount` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "SocialAccount_socialAccountId_idx";

-- AlterTable
ALTER TABLE "SocialAccount" DROP COLUMN "socialAccountId";
