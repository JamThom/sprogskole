/*
  Warnings:

  - You are about to drop the column `correct` on the `Answer` table. All the data in the column will be lost.
  - Added the required column `date` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Answer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Answer" DROP COLUMN "correct",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "value" TEXT NOT NULL;
