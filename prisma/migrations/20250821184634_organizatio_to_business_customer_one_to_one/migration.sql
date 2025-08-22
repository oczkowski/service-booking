/*
  Warnings:

  - A unique constraint covering the columns `[organizationId]` on the table `Business` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[organizationId]` on the table `OrganizationOnBusinessCustomer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[businessCustomerId]` on the table `OrganizationOnBusinessCustomer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Business_organizationId_key" ON "public"."Business"("organizationId");

-- CreateIndex
CREATE UNIQUE INDEX "OrganizationOnBusinessCustomer_organizationId_key" ON "public"."OrganizationOnBusinessCustomer"("organizationId");

-- CreateIndex
CREATE UNIQUE INDEX "OrganizationOnBusinessCustomer_businessCustomerId_key" ON "public"."OrganizationOnBusinessCustomer"("businessCustomerId");
