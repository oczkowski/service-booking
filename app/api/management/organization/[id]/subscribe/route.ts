import { auth0 } from "@/lib/auth0";
import { PrismaClient, SubscriptionLevel, SubscriptionStatus } from '@/generated/prisma';
import { stripe } from '@/lib/stripe';
import z from 'zod';

const prisma = new PrismaClient();

const subscribeSchema = z.object({
    subscriptionLevel: z.enum(SubscriptionLevel),
    successUrl: z.url(),
    cancelUrl: z.url()
});

export async function POST(request: Request, { params }: { params: { id: string } }) {
    const session = await auth0.getSession();
    if (!session) return;

    const organizationId = parseInt(params.id);
    if (isNaN(organizationId)) {
        return new Response(JSON.stringify({ error: 'Invalid organization ID' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    let body;
    try {
        body = await request.json();
    } catch (_) {
        return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    const parsedBody = subscribeSchema.safeParse(body);
    if (!parsedBody.success) {
        return new Response(JSON.stringify({ error: z.flattenError(parsedBody.error) }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        // Verify user owns the organization
        const businessCustomer = await prisma.businessCustomer.findUnique({
            where: { email: session.user.email }
        });

        if (!businessCustomer) {
            return new Response(JSON.stringify({ error: 'Business customer not found' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const organizationMembership = await prisma.organizationOnBusinessCustomer.findUnique({
            where: {
                organizationId_businessCustomerId: {
                    organizationId: organizationId,
                    businessCustomerId: businessCustomer.id
                }
            },
            include: {
                organization: {
                    include: {
                        subscription: true
                    }
                }
            }
        });

        if (!organizationMembership || organizationMembership.role !== 'OWNER') {
            return new Response(JSON.stringify({ error: 'Access denied. Only organization owners can manage subscriptions.' }), {
                status: 403,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const organization = organizationMembership.organization;
        const subscription = organization.subscription;

        // Check if already has active subscription
        if (subscription.status === SubscriptionStatus.ACTIVE) {
            return new Response(JSON.stringify({ error: 'Organization already has an active subscription' }), {
                status: 409,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Create or get Stripe customer
        let stripeCustomerId = subscription.stripeCustomerId;
        if (!stripeCustomerId) {
            const stripeCustomer = await stripe.customers.create({
                email: session.user.email,
                name: `${businessCustomer.firstName} ${businessCustomer.lastName}`,
                metadata: {
                    organizationId: organizationId.toString(),
                    businessCustomerId: businessCustomer.id.toString()
                }
            });
            stripeCustomerId = stripeCustomer.id;

            // Update subscription with Stripe customer ID
            await prisma.subscription.update({
                where: { id: subscription.id },
                data: { stripeCustomerId: stripeCustomerId }
            });
        }

        // Create Stripe Checkout session
        const price = getSubscriptionPrice(parsedBody.data.subscriptionLevel);
        const checkoutSession = await stripe.checkout.sessions.create({
            customer: stripeCustomerId,
            payment_method_types: ['card'],
            mode: 'subscription',
            line_items: [
                {
                    price_data: {
                        currency: 'gbp',
                        product_data: {
                            name: `${parsedBody.data.subscriptionLevel} Plan`,
                            description: getSubscriptionDescription(parsedBody.data.subscriptionLevel)
                        },
                        unit_amount: Math.round(price * 100), // Convert to cents
                        recurring: {
                            interval: 'month'
                        }
                    },
                    quantity: 1
                }
            ],
            metadata: {
                organizationId: organizationId.toString(),
                subscriptionId: subscription.id.toString(),
                subscriptionLevel: parsedBody.data.subscriptionLevel
            },
            success_url: parsedBody.data.successUrl,
            cancel_url: parsedBody.data.cancelUrl
        });

        return new Response(JSON.stringify({ 
            checkoutUrl: checkoutSession.url,
            sessionId: checkoutSession.id 
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Subscription creation error:', error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

function getSubscriptionPrice(level: SubscriptionLevel): number {
    switch (level) {
        case SubscriptionLevel.SMALL:
            return 13.99;
        case SubscriptionLevel.MEDIUM:
            return 79.99;
        case SubscriptionLevel.LARGE:
            return 199.99;
        case SubscriptionLevel.ENTERPRISE:
            return 0; // Custom pricing
        default:
            throw new Error('Invalid subscription level');
    }
}

function getSubscriptionDescription(level: SubscriptionLevel): string {
    switch (level) {
        case SubscriptionLevel.SMALL:
            return '1 Business, 20 Services, 2,000 Appointments / Monthly';
        case SubscriptionLevel.MEDIUM:
            return '3 Businesses, 60 Services, 10,000 Appointments / Monthly';
        case SubscriptionLevel.LARGE:
            return '10 Businesses, 200 Services, 80,000 Appointments / Monthly';
        case SubscriptionLevel.ENTERPRISE:
            return 'Custom enterprise solution';
        default:
            throw new Error('Invalid subscription level');
    }
}