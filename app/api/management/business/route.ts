import { auth0 } from "@/lib/auth0";
import z from "zod";
import {
    PrismaClient,
} from "@/generated/prisma";
import { plans } from '@/lib/plans'

import { createBusinessSchema } from "./schema";

const prisma = new PrismaClient();

// Create business
export async function POST(request: Request) {
    const session = await auth0.getSession();
    if (!session) return;

    let body;
    try {
        body = await request.json();
    } catch (_) {
        return new Response(JSON.stringify({ error: "Invalid JSON" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    const parsedBody = createBusinessSchema.safeParse(body);

    if (!parsedBody.success) {
        return new Response(
            JSON.stringify({ error: z.flattenError(parsedBody.error) }),
            {
                status: 400,
                headers: { "Content-Type": "application/json" },
            }
        );
    }

    // Try creating a business
    try {
        // Get organization id for business user
        const businessCustomer = await prisma.businessCustomer.findUnique({
            where: {
                email: session.user.email,
            },
            include: {
                organization: {
                    include: {
                        organization: {
                            include: {
                                business: true,
                                subscription: true
                            }
                        }
                    }
                },
            },
        });

        // Check if organization exists
        if (!businessCustomer?.organization?.organizationId) {
            return new Response(
                JSON.stringify({ error: "Setup organization first" }),
                {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        // Check if business count is within the allowance
        const subscription = businessCustomer.organization.organization.subscription;
        const subscriptionBusinessAllowance = plans.find((plan) => plan.level === subscription.level);
        const businesses = businessCustomer.organization.organization.business;

        if (!subscriptionBusinessAllowance || businesses.length >= subscriptionBusinessAllowance?.businesses) {
            return new Response(JSON.stringify({ error: "You have reached the limit for businesses under your subscription" }), {
                status: 402,
                headers: { "Content-Type": "application/json" },
            });
        }

        // Create business
        const createBusinessResult = await prisma.business.create({
            data: {
                ...parsedBody.data,
                organizationId: businessCustomer.organization.organizationId,
            },
        });

        return new Response(JSON.stringify(createBusinessResult), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.log("Error creating business", error);
        return new Response(JSON.stringify({ error: "Internal server error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

// Get business list
export async function GET() {
    const session = await auth0.getSession();
    if (!session) return;

    // Try getting a list of businesses
    try {
        // Get organization id for business user
        const businessCustomer = await prisma.businessCustomer.findUnique({
            where: {
                email: session.user.email,
            },
            include: {
                organization: {
                    include: {
                        organization: {
                            include: {
                                business: true,
                            }
                        }
                    }
                }
            }
        });

        if (!businessCustomer?.organization?.organizationId) {
            return new Response(
                JSON.stringify({ error: "Setup organization first" }),
                {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        const businesses = businessCustomer.organization.organization.business

        return new Response(JSON.stringify(businesses), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        console.log("Error listing businesses", error);
        return new Response(JSON.stringify({ error: "Internal server error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}