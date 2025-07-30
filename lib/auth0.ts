import { Auth0Client } from "@auth0/nextjs-auth0/server";
import { env } from '@/env'

// Initialize the Auth0 client 
export const auth0 = new Auth0Client({
    // Options are loaded from environment variables by default
    // Ensure necessary environment variables are properly set
    // domain: env.AUTH0_DOMAIN,
    // clientId: env.AUTH0_CLIENT_ID,
    // clientSecret: env.AUTH0_CLIENT_SECRET,
    // appBaseUrl: env.APP_BASE_URL,
    // secret: env.AUTH0_SECRET,

    authorizationParameters: {
        // In v4, the AUTH0_SCOPE and AUTH0_AUDIENCE environment variables for API authorized applications are no longer automatically picked up by the SDK.
        // Instead, we need to provide the values explicitly.
        // scope: env.AUTH0_SCOPE,
        // audience: env.AUTH0_AUDIENCE,
    }
});