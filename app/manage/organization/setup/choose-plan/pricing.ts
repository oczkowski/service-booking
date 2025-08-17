export interface PricingPlan {
    name: string
    description: string
    monthlyPrice: number
    yearlyPrice: number
    businesses: number | string
    services: number
    appointments: number | string
    features: string[]
    popular?: boolean
    enterprise?: boolean
}

export const plans: PricingPlan[] = [
    {
        name: "Small",
        description: "Perfect for getting started",
        monthlyPrice: 13.99,
        yearlyPrice: 139.90,
        businesses: 1,
        services: 20,
        appointments: "2,000",
        features: [
            "1 Business location",
            "Up to 20 services",
            "2,000 appointments per month",
            "Basic booking system",
            "Email notifications",
            "Customer management",
            "Basic analytics",
            "Mobile responsive"
        ]
    },
    {
        name: "Medium",
        description: "Great for growing businesses",
        monthlyPrice: 79.99,
        yearlyPrice: 799.90,
        businesses: 3,
        services: 60,
        appointments: "5,000",
        popular: true,
        features: [
            "3 Business locations",
            "Up to 60 services",
            "10,000 appointments per month",
            "Advanced booking system",
            "SMS & Email notifications",
            "Customer management",
            "Advanced analytics & reports",
            "Mobile responsive",
            "Priority support",
            "Custom branding",
            "Staff management",
            "Resource scheduling"
        ]
    },
    {
        name: "Large",
        description: "For established enterprises",
        monthlyPrice: 199.99,
        yearlyPrice: 1999.90,
        businesses: 10,
        services: 200,
        appointments: "80,000",
        features: [
            "10 Business locations",
            "Up to 200 services",
            "80,000 appointments per month",
            "Enterprise booking system",
            "Multi-channel notifications",
            "Advanced customer management",
            "Enterprise analytics & BI",
            "Mobile responsive",
            "24/7 priority support",
            "White-label solution",
            "Advanced staff management",
            "Resource & room scheduling",
            "API access",
            "Custom integrations"
        ]
    },
    {
        name: "Enterprise",
        description: "Custom solution for large organizations",
        monthlyPrice: 0,
        yearlyPrice: 0,
        businesses: "Unlimited",
        services: 999999,
        appointments: "Unlimited",
        enterprise: true,
        features: [
            "Unlimited business locations",
            "Unlimited services",
            "Unlimited appointments",
            "Custom enterprise solution",
            "Dedicated account manager",
            "Custom development",
            "On-premise deployment options",
            "Advanced security features",
            "SLA guarantees",
            "Custom integrations",
            "Training & onboarding",
            "24/7 enterprise support"
        ]
    }
]