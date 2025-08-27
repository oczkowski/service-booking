import z from 'zod';

export const createBusinessSchema = z.object({
    businessName: z.string().min(3),
    contactNumber: z.string().min(4),
});