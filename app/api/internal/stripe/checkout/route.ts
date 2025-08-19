import { stripe } from '@/lib/stripe/server';
import { PrismaClient, OrganizationRole } from '@/generated/prisma';
import { auth0 } from "@/lib/auth0";
import { getReturnOrigin } from '@/utils/server/get-origin';

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
        return Response.json({ error: 'Business customer not found, please log in again.' }, { status: 404 });
    }

    // Check if the organization exists and that the user is an owner
    const existingOrganization = await prisma.organizationOnBusinessCustomer.findFirst({
        where: { businessCustomerId: businessCustomer.id },
        include: { organization: true }
    });

    if (!existingOrganization || existingOrganization.role !== OrganizationRole.OWNER) {
        return Response.json({ error: `Organization either doesn't exist, or you're not an owner.` }, { status: 403 });
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
        })

        stripeCustomerId = customer.id;
    } else {
        stripeCustomerId = existingOrganization.organization.stripeCustomerId;
    }

    // Create checkout
    try {
        const { priceId } = await request.json();

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price: priceId, // Use existing price ID instead of price_data
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            customer: stripeCustomerId,
            success_url:
                `${originHeader}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${originHeader}/cancel`,
            allow_promotion_codes: true, // Optional: enable discount codes
        });

        return Response.json({ sessionId: session.id });
    } catch (error) {
        return Response.json({ error: `${error}` }, { status: 500 });
    }
}