/*
  Warnings:

  - Added the required column `paymentFrequency` to the `Subscription` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."PaymentFrequency" AS ENUM ('MONTHLY', 'ANNUALY');

-- AlterTable
ALTER TABLE "public"."Subscription" ADD COLUMN     "paymentFrequency" "public"."PaymentFrequency" NOT NULL;
