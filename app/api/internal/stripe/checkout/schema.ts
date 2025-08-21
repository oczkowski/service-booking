import z from 'zod'
import { MonthlyPlanPriceIds, YearlyPlanPriceIds } from '@/lib/plans';

export const priceIdSchema = z.enum([
    // Monthly
    ...Object.values(MonthlyPlanPriceIds),
    // Annual
    ...Object.values(YearlyPlanPriceIds)
] as const);