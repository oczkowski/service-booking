/*
  Warnings:

  - Added the required column `city` to the `Organization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstLineOfAddress` to the `Organization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postCode` to the `Organization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondLineOfAddress` to the `Organization` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Organization" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "firstLineOfAddress" TEXT NOT NULL,
ADD COLUMN     "postCode" TEXT NOT NULL,
ADD COLUMN     "secondLineOfAddress" TEXT NOT NULL;
