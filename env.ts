import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    // App specific
    DEPLOY_URL: z.url(),
    INTERNAL_API_SECRET: z.string().min(10),
    // Postgres
    POSTGRES_PRISMA_URL: z.string().min(1),
    // Auth0
    AUTH0_BASE_URL: z.string().min(1),
    AUTH0_SECRET: z.string().min(10),
    AUTH0_ISSUER_BASE_URL: z.url(),
    AUTH0_CLIENT_ID: z.string().min(1),
    AUTH0_CLIENT_SECRET: z.string().min(1),
    // AUTH0_AUDIENCE: z.string().min(1),
    // AUTH0_SCOPE: z.string().min(1),
    AUTH0_HOOK_SECRET: z.string().min(10),
    // Stripe
    STRIPE_SECRET_KEY: z.string().min(10),
  },
  client: {
    // Project specific
    NEXT_PUBLIC_BRAND_NAME: z.string().min(1),
    NEXT_PUBLIC_COMPANY_NAME: z.string().min(1),
    // Stripe
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().min(10)
  },
  runtimeEnv: {
    // App specific
    DEPLOY_URL: process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : process.env.DEPLOY_URL,
    INTERNAL_API_SECRET: process.env.INTERNAL_API_SECRET,
    // Postgres
    POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL,
    // App settings
    NEXT_PUBLIC_BRAND_NAME: process.env.NEXT_PUBLIC_BRAND_NAME,
    NEXT_PUBLIC_COMPANY_NAME: process.env.NEXT_PUBLIC_COMPANY_NAME,
    // Auth0
    AUTH0_BASE_URL: process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : process.env.DEPLOY_URL,
    AUTH0_SECRET: process.env.AUTH0_SECRET,
    AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    // AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
    // AUTH0_SCOPE: process.env.AUTH0_SCOPE,
    AUTH0_HOOK_SECRET: process.env.AUTH0_HOOK_SECRET,
    // Stripe
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  },
});
