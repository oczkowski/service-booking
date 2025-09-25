import type { NextRequest, NextFetchEvent } from "next/server";
import { NextResponse } from 'next/server'
import { auth0 } from "./lib/auth0";
import { env } from '@/env';
import { getReturnOrigin } from '@/utils/server/get-origin';
import { SubscriptionStatus } from '@/generated/prisma';

export async function middleware(request: NextRequest) {
    const authRes = await auth0.middleware(request);
    const pathname = request.nextUrl.pathname;
    const originHeader = getReturnOrigin(request.headers);

    const checkSubscription = async (email: string) => {
        const apiURL = new URL('/api/internal/organization/status', originHeader).toString();
        console.log('URL', apiURL)
        console.log('ORIGIN', originHeader)
        const data = await fetch(apiURL, {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: {
                ['x-internal-secret']: env.INTERNAL_API_SECRET,
                ...(env.VERCEL_AUTOMATION_BYPASS_SECRET ? { ['x-vercel-protection-bypass']: env.VERCEL_AUTOMATION_BYPASS_SECRET } : {})
            }
        })

        let subscriptionStatus;
        try {
            subscriptionStatus = await data.json()
        } catch (error) { console.log('Error checking subscription', data?.status, error) }
        return subscriptionStatus;
    }

    // Auth0 callbacks
    if (pathname.startsWith("/auth")) {
        return authRes;
    }

    // Internal API no secret
    if (pathname.startsWith("/api/internal")) {
        const internalSecretHeader = request.headers.get('x-internal-secret');

        if (internalSecretHeader !== env.INTERNAL_API_SECRET) {
            console.error('INVALID INTERNAL API SECRET')
            return new Response(JSON.stringify({ error: 'Unauthorized' }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' },
            });
        }
    }

    const session = await auth0.getSession(request);

    // Not logged in
    if (!session) {
        // API Unauthorized
        if (pathname.startsWith("/api/management")) {
            return new Response(JSON.stringify({ error: 'Unauthorized' }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' },
            });
        }
        // Web Unauthorized (With deep linking)
        if (!pathname.startsWith('/api')) {
            return NextResponse.redirect(
                new URL(`/auth/login?returnTo=${request.nextUrl}`, request.nextUrl.origin)
            );
        }
    }

    // No email address?? TODO: Check if this is possible
    if (session && !session.user.email) {
        return new Response(JSON.stringify({ error: `Well this is unexpected. Looks like you're missing an email address. Please contact support` }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' },
        });
    }


    // Check if subscription active
    if (session && session.user.email) {
        // API (Allow stripe even if no subscription)
        if (!pathname.startsWith("/api/management/stripe") && pathname.startsWith("/api/management")) {
            const subscriptionStatus = await checkSubscription(session.user.email);

            if (!subscriptionStatus.isActive) {
                return new Response(JSON.stringify({ error: 'Subscription not actve' }), {
                    status: 402,
                    headers: { 'Content-Type': 'application/json' },
                });
            }
        }

        // UI (Allow subscription manage route even if not subscription)
        if (!pathname.startsWith("/manage/subscription") && pathname.startsWith("/manage")) {
            const subscriptionStatus = await checkSubscription(session.user.email);
            // Trial expired?
            if (subscriptionStatus?.status === SubscriptionStatus.TRIAL && new Date() > new Date(subscriptionStatus.trialEndsAt)) {
                return NextResponse.redirect(
                    new URL(`/manage/subscription/trial/ended`, request.nextUrl.origin)
                );
            }

            // Subscription not active? TODO: Think of some better logic
            if (![SubscriptionStatus.TRIAL, SubscriptionStatus.ACTIVE].includes(subscriptionStatus?.status)) {
                return NextResponse.redirect(
                    new URL(`/plans`, request.nextUrl.origin)
                );
            }
        }
    }

    // Default
    return authRes;
}

// WARNING: Be careful when making changes in here, this can make or break the secuirty of the entire application.
export const config = {
    matcher: [
        // Auth0
        "/auth/:path*",
        // App routes
        "/manage/:path*",
        // APIs
        "/api/management/:path*",
        "/api/internal/:path*",
    ],
};