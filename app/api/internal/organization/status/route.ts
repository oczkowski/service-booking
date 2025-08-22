import { PrismaClient } from '@/generated/prisma';
import { NextResponse } from 'next/server';
import z from 'zod';

import { organizationStatusSchema } from './schema';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    let body;
    try {
        body = await request.json();
    } catch (_) {
        return new Response(JSON.stringify({ error: 'Invalid input' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    const parsedBody = organizationStatusSchema.safeParse(body);

    if (parsedBody.error) {
        return new Response(JSON.stringify({ error: z.flattenError(parsedBody.error) }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    // Single optimized query with proper includes
    const businessCustomer = await prisma.businessCustomer.findUnique({
        where: { email: parsedBody.data.email },
        select: {
            id: true,
            organization: {
                select: {
                    organization: {
                        select: {
                            id: true,
                            subscription: {
                                select: {
                                    id: true,
                                    status: true,
                                    level: true,
                                    trialEndsAt: true,
                                    stripeSubscriptionId: true
                                }
                            }
                        }
                    }
                }
            }
        }
    });

    const subscription = businessCustomer?.organization?.organization?.subscription;

    if (!subscription) {
        return NextResponse.json({ error: 'No subscription found' }, { status: 404 });
    }

    console.log('Trial expires at', subscription.trialEndsAt)

    return NextResponse.json({
        status: subscription.status,
        level: subscription.level,
        trialEndsAt: subscription.trialEndsAt,
        isActive: ['ACTIVE', 'TRIAL'].includes(subscription.status)
    });
}