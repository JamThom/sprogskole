/*
  Warnings:

  - Added the required column `lastUpdated` to the `Classroom` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Classroom" ADD COLUMN     "lastUpdated" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_id_fkey" FOREIGN KEY ("id") REFERENCES "Classroom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
