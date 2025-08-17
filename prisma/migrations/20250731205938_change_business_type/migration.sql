-- AlterTable
ALTER TABLE "public"."Business"
ALTER COLUMN "type" SET DATA TYPE "public"."BusinessType"
USING ("type"[1])::"public"."BusinessType",
ALTER COLUMN "type" SET NOT NULL;