/*
  Warnings:

  - You are about to drop the column `prifleImageURL` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "prifleImageURL",
ADD COLUMN     "profileImageURL" TEXT;
