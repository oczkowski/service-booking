import z from "zod";
import { PaymentFrequency, SubscriptionLevel } from '@/generated/prisma';

export const organizationSchema = z.object({
    legalName: z.string().min(1, "Legal name is required").max(100, "Legal name too long"),
    firstLineOfAddress: z.string().min(1, "First line of address is required"),
    secondLineOfAddress: z.string().optional(),
    city: z.string().min(1, 'City is required'),
    postCode: z.string().min(1, "Post code is required")
});

export const subscriptionSchema = z.object({
    subscriptionLevel: z.enum([
        SubscriptionLevel.SMALL,
        SubscriptionLevel.MEDIUM,
        SubscriptionLevel.LARGE,
    ]),
    paymentFrequency: z.enum([PaymentFrequency.ANNUALY, PaymentFrequency.MONTHLY])
})

export const createOrganizationPayloadSchema = z.object({
    ...organizationSchema.shape,
    subscription: subscriptionSchema
})