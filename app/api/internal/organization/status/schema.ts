import z from 'zod';

export const organizationStatusSchema = z.object({
    email: z.email()
})