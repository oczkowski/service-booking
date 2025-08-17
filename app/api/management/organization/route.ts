import { auth0 } from "@/lib/auth0";
import { PrismaClient, OrganizationRole, SubscriptionStatus } from '@/generated/prisma';
import z from 'zod';
import { createOrganizationPayloadSchema } from './schema';

const prisma = new PrismaClient()

export async function POST(request: Request) {
    const session = await auth0.getSession();
    if (!session) return;

    let body;
    try {
        body = await request.json();
    } catch (_) {
        return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    const parsedBody = createOrganizationPayloadSchema.safeParse(body);

    if (!parsedBody.success) {
        return new Response(JSON.stringify({ error: z.flattenError(parsedBody.error) }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        // Check if business customer exists
        const businessCustomer = await prisma.businessCustomer.findUnique({
            where: { email: session.user.email }
        });

        if (!businessCustomer) {
            return new Response(JSON.stringify({ error: 'Business customer not found' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Check if business customer already has an organization
        const existingOrganization = await prisma.organizationOnBusinessCustomer.findFirst({
            where: { businessCustomerId: businessCustomer.id }
        });

        if (existingOrganization) {
            return new Response(JSON.stringify({ error: 'Business customer already belongs to an organization' }), {
                status: 409,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Create organization with trial subscription and link to business customer
        const result = await prisma.$transaction(async (tx) => {
            // Create trial subscription (14 days)
            const trialEndsAt = new Date();
            trialEndsAt.setDate(trialEndsAt.getDate() + 14);
            
            const subscription = await tx.subscription.create({
                data: {
                    level: parsedBody.data.subscription.subscriptionLevel,
                    price: 0.00,
                    paymentFrequency: parsedBody.data.subscription.paymentFrequency,
                    status: SubscriptionStatus.TRIAL,
                    trialEndsAt: trialEndsAt
                }
            });

            // Create organization
            const organization = await tx.organization.create({
                data: {
                    legalName: parsedBody.data.legalName,
                    firstLineOfAddress: parsedBody.data.firstLineOfAddress,
                    secondLineOfAddress: parsedBody.data.secondLineOfAddress,
                    city: parsedBody.data.city,
                    postCode: parsedBody.data.postCode,
                    subscriptionId: subscription.id
                }
            });

            // Link business customer to organization as OWNER
            await tx.organizationOnBusinessCustomer.create({
                data: {
                    organizationId: organization.id,
                    businessCustomerId: businessCustomer.id,
                    role: OrganizationRole.OWNER
                }
            });

            return {
                organization,
                subscription
            };
        });

        return new Response(JSON.stringify(result), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Organization creation error:', error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}