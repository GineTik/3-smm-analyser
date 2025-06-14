/*
  Warnings:

  - You are about to drop the column `profileUrlFormat` on the `SocialNetwork` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "SocialNetwork" DROP COLUMN "profileUrlFormat";

-- Insert social networks with explicit IDs
INSERT INTO "SocialNetwork" ("id", "name") VALUES 
  (1, 'Twitter'),
  (2, 'Facebook'),
  (3, 'Instagram');

