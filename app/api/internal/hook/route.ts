import { PrismaClient } from '@/generated/prisma';
import z from 'zod';
import { env } from '@/env';

const prisma = new PrismaClient();

const businessCustomerSchema = z.object({
    email: z.email(),
    mobile: z.string().optional(),
    firstName: z.string(),
    lastName: z.string()
})

export async function POST(request: Request) {
    let body;
    try {
        body = await request.json();
    } catch (e) {
        return new Response(JSON.stringify({ error: 'Invalid input' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    const { secret, ...userPayload } = body;

    // Check the secret validity
    if (secret !== env.AUTH0_HOOK_SECRET) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    const parsedUserPayload = businessCustomerSchema.safeParse(userPayload);

    // Check payload validity
    if (parsedUserPayload.success) {
        const newUser = await prisma.businessCustomer.create({
            data: parsedUserPayload.data
        });

        return new Response(JSON.stringify(newUser), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });
    } else {
        return new Response(JSON.stringify({ error: z.flattenError(parsedUserPayload.error) }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}