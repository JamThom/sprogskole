/*
  Warnings:

  - You are about to drop the column `original` on the `Translation` table. All the data in the column will be lost.
  - You are about to drop the column `translated` on the `Translation` table. All the data in the column will be lost.
  - Added the required column `answer` to the `Translation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question` to the `Translation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Translation" DROP COLUMN "original",
DROP COLUMN "translated",
ADD COLUMN     "answer" TEXT NOT NULL,
ADD COLUMN     "question" TEXT NOT NULL;
