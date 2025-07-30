-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('UPCOMING', 'ATTENDED', 'MISSED');

-- CreateEnum
CREATE TYPE "public"."BusinessRole" AS ENUM ('OWNER', 'ADMIN', 'MANAGER', 'STAFF');

-- CreateEnum
CREATE TYPE "public"."BusinessType" AS ENUM ('SME', 'ENTERPRISE');

-- CreateEnum
CREATE TYPE "public"."CustomerType" AS ENUM ('GUEST');

-- CreateEnum
CREATE TYPE "public"."WeekDay" AS ENUM ('SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY');

-- CreateTable
CREATE TABLE "public"."Appointment" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "customerId" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "slotId" INTEGER NOT NULL,
    "status" "public"."Status" NOT NULL,
    "isCancelled" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BusinessCustomer" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,

    CONSTRAINT "BusinessCustomer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Business" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "contactNumber" TEXT NOT NULL,
    "businessName" TEXT NOT NULL,
    "type" "public"."BusinessType"[],

    CONSTRAINT "Business_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BusinessCustomerOnBusiness" (
    "businessId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "role" "public"."BusinessRole" NOT NULL,

    CONSTRAINT "BusinessCustomerOnBusiness_pkey" PRIMARY KEY ("businessId","userId")
);

-- CreateTable
CREATE TABLE "public"."Customer" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "type" "public"."CustomerType" NOT NULL DEFAULT 'GUEST',

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Service" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "businessId" INTEGER,
    "availibilityGroupId" INTEGER NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AvailabilityGroup" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AvailabilityGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DailyAvailability" (
    "id" SERIAL NOT NULL,
    "availabilityGroupId" INTEGER NOT NULL,
    "dayOfWeek" "public"."WeekDay" NOT NULL,

    CONSTRAINT "DailyAvailability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TimeBlock" (
    "id" SERIAL NOT NULL,
    "dailyAvailabilityDayId" INTEGER NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,

    CONSTRAINT "TimeBlock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BookableSlot" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "isBooked" BOOLEAN NOT NULL DEFAULT false,
    "availabilityGroupId" INTEGER,

    CONSTRAINT "BookableSlot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BusinessCustomer_email_key" ON "public"."BusinessCustomer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "BusinessCustomer_mobile_key" ON "public"."BusinessCustomer"("mobile");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "public"."Customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_mobile_key" ON "public"."Customer"("mobile");

-- CreateIndex
CREATE UNIQUE INDEX "DailyAvailability_availabilityGroupId_dayOfWeek_key" ON "public"."DailyAvailability"("availabilityGroupId", "dayOfWeek");

-- AddForeignKey
ALTER TABLE "public"."Appointment" ADD CONSTRAINT "Appointment_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "public"."Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Appointment" ADD CONSTRAINT "Appointment_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "public"."Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Appointment" ADD CONSTRAINT "Appointment_slotId_fkey" FOREIGN KEY ("slotId") REFERENCES "public"."BookableSlot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BusinessCustomerOnBusiness" ADD CONSTRAINT "BusinessCustomerOnBusiness_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "public"."Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BusinessCustomerOnBusiness" ADD CONSTRAINT "BusinessCustomerOnBusiness_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."BusinessCustomer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Service" ADD CONSTRAINT "Service_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "public"."Business"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Service" ADD CONSTRAINT "Service_availibilityGroupId_fkey" FOREIGN KEY ("availibilityGroupId") REFERENCES "public"."AvailabilityGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DailyAvailability" ADD CONSTRAINT "DailyAvailability_availabilityGroupId_fkey" FOREIGN KEY ("availabilityGroupId") REFERENCES "public"."AvailabilityGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TimeBlock" ADD CONSTRAINT "TimeBlock_dailyAvailabilityDayId_fkey" FOREIGN KEY ("dailyAvailabilityDayId") REFERENCES "public"."DailyAvailability"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BookableSlot" ADD CONSTRAINT "BookableSlot_availabilityGroupId_fkey" FOREIGN KEY ("availabilityGroupId") REFERENCES "public"."AvailabilityGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;
