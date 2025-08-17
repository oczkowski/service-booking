/*
  Warnings:

  - You are about to drop the column `isCancelled` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `isBooked` on the `BookableSlot` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Business` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the `BusinessCustomerOnBusiness` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `organizationId` to the `Business` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."SubscriptionLevel" AS ENUM ('SMALL', 'MEDIUM', 'LARGE', 'ENTERPRISE');

-- CreateEnum
CREATE TYPE "public"."OrganizationRole" AS ENUM ('OWNER', 'ADMIN', 'MANAGER', 'STAFF');

-- AlterEnum
ALTER TYPE "public"."Status" ADD VALUE 'CANCELLED';

-- DropForeignKey
ALTER TABLE "public"."BusinessCustomerOnBusiness" DROP CONSTRAINT "BusinessCustomerOnBusiness_businessId_fkey";

-- DropForeignKey
ALTER TABLE "public"."BusinessCustomerOnBusiness" DROP CONSTRAINT "BusinessCustomerOnBusiness_userId_fkey";

-- AlterTable
ALTER TABLE "public"."Appointment" DROP COLUMN "isCancelled";

-- AlterTable
ALTER TABLE "public"."BookableSlot" DROP COLUMN "isBooked";

-- AlterTable
ALTER TABLE "public"."Business" DROP COLUMN "type",
ADD COLUMN     "organizationId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."Customer" DROP COLUMN "type";

-- DropTable
DROP TABLE "public"."BusinessCustomerOnBusiness";

-- DropEnum
DROP TYPE "public"."BusinessRole";

-- DropEnum
DROP TYPE "public"."BusinessType";

-- DropEnum
DROP TYPE "public"."CustomerType";

-- CreateTable
CREATE TABLE "public"."Organization" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "legalName" TEXT NOT NULL,
    "subscription" "public"."SubscriptionLevel" NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."OrganizationOnBusinessCustomer" (
    "organizationId" INTEGER NOT NULL,
    "businessCustomerId" INTEGER NOT NULL,
    "role" "public"."OrganizationRole" NOT NULL,

    CONSTRAINT "OrganizationOnBusinessCustomer_pkey" PRIMARY KEY ("organizationId","businessCustomerId")
);

-- CreateTable
CREATE TABLE "public"."Subscription" (
    "id" SERIAL NOT NULL,
    "level" "public"."SubscriptionLevel" NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Business" ADD CONSTRAINT "Business_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "public"."Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OrganizationOnBusinessCustomer" ADD CONSTRAINT "OrganizationOnBusinessCustomer_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "public"."Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OrganizationOnBusinessCustomer" ADD CONSTRAINT "OrganizationOnBusinessCustomer_businessCustomerId_fkey" FOREIGN KEY ("businessCustomerId") REFERENCES "public"."BusinessCustomer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
