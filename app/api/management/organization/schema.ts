import z from "zod";
import { SubscriptionLevel } from '@/generated/prisma';

export const organizationSchema = z.object({
    legalName: z.string().min(1, "Legal name is required").max(100, "Legal name too long"),
    subscriptionLevel: z.enum([
        SubscriptionLevel.SMALL,
        SubscriptionLevel.MEDIUM,
        SubscriptionLevel.LARGE,
        SubscriptionLevel.ENTERPRISE
    ])
});