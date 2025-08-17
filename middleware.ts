import type { NextRequest } from "next/server";
import { NextResponse } from 'next/server'
import { auth0 } from "./lib/auth0";

export async function middleware(request: NextRequest) {
    const authRes = await auth0.middleware(request);

    // Auth0 callbacks
    if (request.nextUrl.pathname.startsWith("/auth")) {
        return authRes;
    }

    const session = await auth0.getSession(request);

    if (!session) {
        // API Unauthorized
        if (request.nextUrl.pathname.startsWith("/api/management")) {
            return new Response(JSON.stringify({ error: 'Unauthorized' }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' },
            });
        }
        // Web Unauthorized
        return NextResponse.redirect(
            new URL("/auth/login", request.nextUrl.origin)
        );
    }

    // Default
    return authRes;
}

export const config = {
    matcher: [
        "/business/:path*",
        "/auth/:path*",
        "/api/management/:path*",
    ],
};