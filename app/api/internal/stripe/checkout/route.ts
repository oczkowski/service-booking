import { stripe } from '@/lib/stripe/server';
import { PrismaClient, OrganizationRole } from '@/generated/prisma';
import { auth0 } from "@/lib/auth0";
import { getReturnOrigin } from '@/utils/server/get-origin';
import z from 'zod';

import { priceIdSchema } from './schema';

const prisma = new PrismaClient();


export async function POST(request: Request) {
    const session = await auth0.getSession();
    if (!session) return;

    const originHeader = getReturnOrigin(request.headers);

    // Check the customer exists
    const businessCustomer = await prisma.businessCustomer.findUnique({
        where: { email: session.user.email }
    });

    if (!businessCustomer) {
        return Response.json({ error: 'Business customer not found, please log in again' }, { status: 404 });
    }

    // Check if the organization exists and that the user is an owner
    const existingOrganization = await prisma.organizationOnBusinessCustomer.findFirst({
        where: { businessCustomerId: businessCustomer.id },
        include: { organization: true }
    });

    if (!existingOrganization || existingOrganization.role !== OrganizationRole.OWNER) {
        return Response.json({ error: `Organization either doesn't exist, or you're not an owner` }, { status: 403 });
    }

    // Check if stripe user exists
    let stripeCustomerId;
    if (!existingOrganization.organization.stripeCustomerId) {
        // Create stripe customer
        const customer = await stripe.customers.create({
            name: `${businessCustomer.firstName} ${businessCustomer.lastName}`,
            email: businessCustomer.email,
        });

        // Link stripe customer to local customer
        await prisma.organization.update({
            where: { id: existingOrganization.organization.id },
            data: {
                stripeCustomerId: customer.id
            }
        });

        stripeCustomerId = customer.id;
    } else {
        stripeCustomerId = existingOrganization.organization.stripeCustomerId;
    }

    // Create checkout
    try {
        const payload = await request.json();
        const parsedPriceId = priceIdSchema.safeParse(payload?.priceId);

        if (parsedPriceId.success) {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: [
                    {
                        price: parsedPriceId.data,
                        quantity: 1,
                    },
                ],
                mode: 'subscription',
                customer: stripeCustomerId,
                success_url:
                    `${originHeader}/manage/organization/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
                // TODO: Change to a cancel URL
                cancel_url: `${originHeader}/plans`,
                allow_promotion_codes: false,
            });
            return Response.json({ sessionId: session.id });
        } else {
            return Response.json({ error: z.flattenError(parsedPriceId.error) }, { status: 400 });
        }

    } catch (error) {
        console.error(error)
        return Response.json({ error: `Failed to create checkout session` }, { status: 500 });
    }
}