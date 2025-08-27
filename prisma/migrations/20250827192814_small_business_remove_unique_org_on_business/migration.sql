-- DropIndex
DROP INDEX "public"."Business_organizationId_key";

-- CreateIndex
CREATE INDEX "Subscription_status_idx" ON "public"."Subscription"("status");

-- CreateIndex
CREATE INDEX "Subscription_status_trialEndsAt_idx" ON "public"."Subscription"("status", "trialEndsAt");
