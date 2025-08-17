/*
  Warnings:

  - You are about to drop the column `subscription` on the `Organization` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[subscriptionId]` on the table `Organization` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `subscriptionId` to the `Organization` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Organization" DROP COLUMN "subscription",
ADD COLUMN     "subscriptionId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Organization_subscriptionId_key" ON "public"."Organization"("subscriptionId");

-- AddForeignKey
ALTER TABLE "public"."Organization" ADD CONSTRAINT "Organization_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "public"."Subscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
