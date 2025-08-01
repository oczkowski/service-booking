import { createEnv } from "@t3-oss/env-nextjs";
import { loadEnvConfig } from '@next/env'
import { z } from "zod";

const projectDir = process.cwd()
loadEnvConfig(projectDir)
 
export const env = createEnv({
  server: {
  },
  client: {
    NEXT_PUBLIC_BRAND_NAME: z.string().min(1),
    NEXT_PUBLIC_COMPANY_NAME: z.string().min(1)
  },
  runtimeEnv: {
    NEXT_PUBLIC_BRAND_NAME: process.env.NEXT_PUBLIC_BRAND_NAME,
    NEXT_PUBLIC_COMPANY_NAME: process.env.NEXT_PUBLIC_COMPANY_NAME
  },
});