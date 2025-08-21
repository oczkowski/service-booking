"use client"

import { useState } from "react"
import { Check, Building2, Users, Calendar, Crown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import type { PricingPlan } from '../../../lib/plans'
import { plans } from '@/lib/plans';
import { useOrganizationSetup } from '@/lib/stores/organization-setup'
import { SubscriptionLevel, PaymentFrequency } from '@/generated/prisma'
import { useRouter } from "next/navigation"

export default function ChooseProductPage() {
    const router = useRouter()
    const { subscriptionData, setSubscription } = useOrganizationSetup()
    const [isYearly, setIsYearly] = useState(subscriptionData.paymentFrequency === PaymentFrequency.ANNUALY)

    const getPrice = (plan: PricingPlan) => {
        if (plan.enterprise) return "Custom"
        const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice
        return `£${price.toFixed(2)}`
    }

    const getSavings = (plan: PricingPlan) => {
        if (plan.enterprise) return null
        const monthlyCost = plan.monthlyPrice * 12
        const savings = monthlyCost - plan.yearlyPrice
        const percentage = Math.round((savings / monthlyCost) * 100)
        return percentage > 0 ? `Save ${percentage}%` : null
    }

    const handlePlanSelect = (plan: PricingPlan) => {
        const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice
        const priceId = isYearly ? plan.yearlyPriceId : plan.monthlyPriceId

        setSubscription({
            subscriptionLevel: plan.name.toUpperCase() as SubscriptionLevel,
            paymentFrequency: isYearly ? PaymentFrequency.ANNUALY : PaymentFrequency.MONTHLY,
            price,
            priceId,
            features: plan.features
        })

        router.push('/manage/organization/checkout')
    }

    const handleYearlyToggle = (yearly: boolean) => {
        setIsYearly(yearly)
        setSubscription({
            paymentFrequency: yearly ? PaymentFrequency.ANNUALY : PaymentFrequency.MONTHLY
        })
    }

    return (
        <div className="min-h-screen bg-background py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">
                        Choose the perfect plan for your business
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Scale your service booking business with our comprehensive platform.
                        From small operations to enterprise solutions.
                    </p>
                </div>

                {/* Billing Toggle */}
                <div className="flex justify-center mb-12">
                    <div className="bg-muted p-1 rounded-lg">
                        <div className="flex">
                            <button
                                onClick={() => handleYearlyToggle(false)}
                                className={`px-6 py-2 rounded-md text-sm font-medium transition-all cursor-pointer ${!isYearly
                                    ? "bg-background text-foreground shadow-sm"
                                    : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => handleYearlyToggle(true)}
                                className={`px-6 py-2 rounded-md text-sm font-medium transition-all cursor-pointer ${isYearly
                                    ? "bg-background text-foreground shadow-sm"
                                    : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                Yearly
                                <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                    Save up to 20%
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {plans.map((plan) => (
                        <Card
                            key={plan.name}
                            className={`relative ${plan.popular
                                ? "border-primary shadow-lg scale-105"
                                : plan.enterprise
                                    ? "border-purple-200 shadow-lg"
                                    : ""
                                }`}
                        >
                            {plan.popular && (
                                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                                    Most Popular
                                </Badge>
                            )}
                            {plan.enterprise && (
                                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white">
                                    <Crown className="w-3 h-3 mr-1" />
                                    Enterprise
                                </Badge>
                            )}

                            <CardHeader className="text-center pb-8">
                                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                                <CardDescription className="text-base">
                                    {plan.description}
                                </CardDescription>
                                <div className="mt-4">
                                    <div className="text-4xl font-bold">
                                        {getPrice(plan)}
                                        {!plan.enterprise && (
                                            <span className="text-lg font-normal text-muted-foreground">
                                                /{isYearly ? "year" : "month"}
                                            </span>
                                        )}
                                    </div>
                                    {isYearly && getSavings(plan) && (
                                        <div className="text-sm text-green-600 font-medium mt-1">
                                            {getSavings(plan)}
                                        </div>
                                    )}
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                {/* Key Stats */}
                                <div className="grid grid-cols-1 gap-3 mb-6">
                                    <div className="flex items-center gap-2">
                                        <Building2 className="w-4 h-4 text-blue-500" />
                                        <span className="text-sm">
                                            {plan.businesses} Business{typeof plan.businesses === 'number' && plan.businesses !== 1 ? 'es' : ''}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="w-4 h-4 text-green-500" />
                                        <span className="text-sm">
                                            {plan.services === 999999 ? 'Unlimited' : plan.services} Services
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-purple-500" />
                                        <span className="text-sm">
                                            {plan.appointments} appointments/month
                                        </span>
                                    </div>
                                </div>

                                {/* Features List */}
                                <div className="space-y-2">
                                    {plan.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-muted-foreground">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>

                            <CardFooter>
                                <Button
                                    onClick={() => handlePlanSelect(plan)}
                                    className={`w-full cursor-pointer ${plan.popular
                                        ? "bg-primary hover:bg-primary/90"
                                        : plan.enterprise
                                            ? "bg-purple-600 hover:bg-purple-700 text-white"
                                            : "variant-outline"
                                        }`}
                                    size="lg"
                                >
                                    {plan.enterprise ? "Contact Sales" : "Get Started"}
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* FAQ or Additional Info */}
                <div className="text-center">
                    <p className="text-muted-foreground mb-4">
                        All plans include a 21-day free trial. No credit card required.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                            <Check className="w-3 h-3 text-green-500" />
                            Cancel anytime
                        </span>
                        <span className="flex items-center gap-1">
                            <Check className="w-3 h-3 text-green-500" />
                            24/7 Support
                        </span>
                        <span className="flex items-center gap-1">
                            <Check className="w-3 h-3 text-green-500" />
                            Data export
                        </span>
                        <span className="flex items-center gap-1">
                            <Check className="w-3 h-3 text-green-500" />
                            GDPR compliant
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}