import { stripe } from '@/lib/stripe';
import { PrismaClient, SubscriptionStatus, SubscriptionLevel } from '@/generated/prisma';
import { headers } from 'next/headers';
import { env } from '@/env';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    const body = await request.text();
    const signature = headers().get('stripe-signature');

    if (!signature) {
        return new Response('Missing stripe-signature header', { status: 400 });
    }

    let event;
    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            env.STRIPE_WEBHOOK_SECRET
        );
    } catch (error) {
        console.error('Webhook signature verification failed:', error);
        return new Response('Webhook signature verification failed', { status: 400 });
    }

    try {
        switch (event.type) {
            case 'checkout.session.completed':
                await handleCheckoutSessionCompleted(event.data.object);
                break;
            
            case 'customer.subscription.created':
                await handleSubscriptionCreated(event.data.object);
                break;
            
            case 'customer.subscription.updated':
                await handleSubscriptionUpdated(event.data.object);
                break;
            
            case 'customer.subscription.deleted':
                await handleSubscriptionDeleted(event.data.object);
                break;
            
            case 'invoice.payment_succeeded':
                await handlePaymentSucceeded(event.data.object);
                break;
            
            case 'invoice.payment_failed':
                await handlePaymentFailed(event.data.object);
                break;
            
            default:
                console.log(`Unhandled event type: ${event.type}`);
        }

        return new Response('Webhook handled successfully', { status: 200 });
    } catch (error) {
        console.error('Webhook handler error:', error);
        return new Response('Webhook handler error', { status: 500 });
    }
}

async function handleCheckoutSessionCompleted(session: any) {
    const { organizationId, subscriptionId, subscriptionLevel } = session.metadata;
    
    if (!organizationId || !subscriptionId || !subscriptionLevel) {
        console.error('Missing metadata in checkout session');
        return;
    }

    // Update subscription with new level and mark as active
    await prisma.subscription.update({
        where: { id: parseInt(subscriptionId) },
        data: {
            level: subscriptionLevel as SubscriptionLevel,
            status: SubscriptionStatus.ACTIVE,
            price: getSubscriptionPrice(subscriptionLevel as SubscriptionLevel),
            stripeSubscriptionId: session.subscription
        }
    });

    console.log(`Subscription activated for organization ${organizationId}`);
}

async function handleSubscriptionCreated(subscription: any) {
    // Find subscription by Stripe subscription ID
    const dbSubscription = await prisma.subscription.findFirst({
        where: { stripeSubscriptionId: subscription.id }
    });

    if (dbSubscription) {
        await prisma.subscription.update({
            where: { id: dbSubscription.id },
            data: { status: SubscriptionStatus.ACTIVE }
        });
    }
}

async function handleSubscriptionUpdated(subscription: any) {
    const dbSubscription = await prisma.subscription.findFirst({
        where: { stripeSubscriptionId: subscription.id }
    });

    if (dbSubscription) {
        let status: SubscriptionStatus;
        
        switch (subscription.status) {
            case 'active':
                status = SubscriptionStatus.ACTIVE;
                break;
            case 'past_due':
                status = SubscriptionStatus.PAST_DUE;
                break;
            case 'canceled':
            case 'cancelled':
                status = SubscriptionStatus.CANCELED;
                break;
            case 'unpaid':
                status = SubscriptionStatus.UNPAID;
                break;
            default:
                status = SubscriptionStatus.UNPAID;
        }

        await prisma.subscription.update({
            where: { id: dbSubscription.id },
            data: { status }
        });
    }
}

async function handleSubscriptionDeleted(subscription: any) {
    const dbSubscription = await prisma.subscription.findFirst({
        where: { stripeSubscriptionId: subscription.id }
    });

    if (dbSubscription) {
        await prisma.subscription.update({
            where: { id: dbSubscription.id },
            data: { 
                status: SubscriptionStatus.CANCELED,
                stripeSubscriptionId: null
            }
        });
    }
}

async function handlePaymentSucceeded(invoice: any) {
    if (invoice.subscription) {
        const dbSubscription = await prisma.subscription.findFirst({
            where: { stripeSubscriptionId: invoice.subscription }
        });

        if (dbSubscription && dbSubscription.status !== SubscriptionStatus.ACTIVE) {
            await prisma.subscription.update({
                where: { id: dbSubscription.id },
                data: { status: SubscriptionStatus.ACTIVE }
            });
        }
    }
}

async function handlePaymentFailed(invoice: any) {
    if (invoice.subscription) {
        const dbSubscription = await prisma.subscription.findFirst({
            where: { stripeSubscriptionId: invoice.subscription }
        });

        if (dbSubscription) {
            await prisma.subscription.update({
                where: { id: dbSubscription.id },
                data: { status: SubscriptionStatus.PAST_DUE }
            });
        }
    }
}

function getSubscriptionPrice(level: SubscriptionLevel): number {
    switch (level) {
        case SubscriptionLevel.SMALL:
            return 29.99;
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