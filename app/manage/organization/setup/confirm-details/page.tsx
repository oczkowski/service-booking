"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Building2, ArrowRight, Loader2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useOrganizationSetup } from "@/lib/stores/organization-setup"
import { createOrganizationPayloadSchema } from '@/app/api/management/organization/schema';

export default function OrganizationSetupPage() {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const {
        organizationData,
        subscriptionData,
        errors,
        updateField,
        setErrors,
        reset
    } = useOrganizationSetup()

    // Redirect to choose-plan if no subscription is selected
    useEffect(() => {
        if (!subscriptionData.subscriptionLevel) {
            router.push('/manage/organization/setup/choose-plan')
        }
    }, [subscriptionData.subscriptionLevel, router])

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {}

        // Required fields validation
        if (!organizationData.legalName.trim()) {
            newErrors.legalName = "Legal organization name is required"
        }
        if (!organizationData.firstLineOfAddress.trim()) {
            newErrors.firstLineOfAddress = "First line of address is required"
        }
        if (!organizationData.city.trim()) {
            newErrors.city = "City is required"
        }
        if (!organizationData.postCode.trim()) {
            newErrors.postCode = "Post code is required"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) return
        const validatedPayload = createOrganizationPayloadSchema.safeParse({
            legalName: organizationData.legalName,
            firstLineOfAddress: organizationData.firstLineOfAddress,
            secondLineOfAddress: organizationData.secondLineOfAddress || undefined,
            city: organizationData.city,
            postCode: organizationData.postCode,
            subscription: {
                subscriptionLevel: subscriptionData.subscriptionLevel,
                paymentFrequency: subscriptionData.paymentFrequency
            },
        })

        if (validatedPayload.success) {
            setIsSubmitting(true)
            try {
                const response = await fetch('/api/management/organization', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(validatedPayload.data),
                })

                if (response.ok) {
                    // Clear the store after successful submission
                    reset()
                    // Redirect to success page or dashboard
                    router.push('/manage/organization/setup/success')
                } else {
                    throw new Error('Failed to create organization')
                }
            } catch (error) {
                console.error('Error creating organization:', error)
                setErrors({ submit: 'Failed to create organization. Please try again.' })
            } finally {
                setIsSubmitting(false)
            }
        } else {
            setErrors({ submit: 'Invalid data submitted. Please try again.' })
        }
    }

    const handleInputChange = (field: string, value: string) => {
        updateField(field as keyof typeof organizationData, value)
    }

    return (
        <div className="min-h-screen bg-background py-8 px-4">
            <div className="max-w-2xl mx-auto">
                <Card className="shadow-lg">
                    <CardHeader className="text-center pb-6">
                        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <Building2 className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-3xl">Setup Your Organization</CardTitle>
                        <CardDescription className="text-lg">
                            Complete your organization details
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        {/* Selected Subscription Info */}
                        {subscriptionData.subscriptionLevel && (
                            <div className="mb-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                                <h4 className="font-medium text-sm text-primary mb-2">Selected Plan</h4>
                                <div className="flex justify-between items-center">
                                    <span className="font-medium">{subscriptionData.subscriptionLevel} Plan</span>
                                    <span className="text-sm">
                                        £{subscriptionData.price.toFixed(2)}/{subscriptionData.paymentFrequency === 'ANNUALY' ? 'year' : 'month'}
                                    </span>
                                </div>
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => router.push('/manage/organization/setup/choose-plan')}
                                    className="mt-2 h-8 text-xs cursor-pointer"
                                >
                                    Change Plan
                                </Button>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Organization Details */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-foreground border-b pb-2">
                                    Organization Details
                                </h3>

                                <div className="space-y-2">
                                    <Label htmlFor="legalName">Legal Organization Name *</Label>
                                    <Input
                                        id="legalName"
                                        value={organizationData.legalName}
                                        onChange={(e) => handleInputChange("legalName", e.target.value)}
                                        placeholder="e.g., Acme Corporation Ltd"
                                        className={errors.legalName ? "border-red-500" : ""}
                                        autoComplete="organization"
                                    />
                                    {errors.legalName && (
                                        <p className="text-sm text-red-500">{errors.legalName}</p>
                                    )}
                                </div>
                            </div>

                            {/* Address Information */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-foreground border-b pb-2">
                                    Organization Address
                                </h3>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstLineOfAddress">First Line of Address *</Label>
                                        <Input
                                            id="firstLineOfAddress"
                                            value={organizationData.firstLineOfAddress}
                                            onChange={(e) => handleInputChange("firstLineOfAddress", e.target.value)}
                                            placeholder="123 Organization Street"
                                            className={errors.firstLineOfAddress ? "border-red-500" : ""}
                                            autoComplete="address-line1"
                                        />
                                        {errors.firstLineOfAddress && (
                                            <p className="text-sm text-red-500">{errors.firstLineOfAddress}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="secondLineOfAddress">Second Line of Address (Optional)</Label>
                                        <Input
                                            id="secondLineOfAddress"
                                            value={organizationData.secondLineOfAddress || ''}
                                            onChange={(e) => handleInputChange("secondLineOfAddress", e.target.value)}
                                            placeholder="Suite 100"
                                            autoComplete="address-line2"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="city">City *</Label>
                                            <Input
                                                id="city"
                                                value={organizationData.city}
                                                onChange={(e) => handleInputChange("city", e.target.value)}
                                                placeholder="London"
                                                className={errors.city ? "border-red-500" : ""}
                                            />
                                            {errors.city && (
                                                <p className="text-sm text-red-500">{errors.city}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="postCode">Post Code *</Label>
                                            <Input
                                                id="postCode"
                                                value={organizationData.postCode}
                                                onChange={(e) => handleInputChange("postCode", e.target.value)}
                                                placeholder="SW1A 1AA"
                                                className={errors.postCode ? "border-red-500" : ""}
                                            />
                                            {errors.postCode && (
                                                <p className="text-sm text-red-500">{errors.postCode}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Submit Error */}
                            {errors.submit && (
                                <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                                    <p className="text-sm text-red-600">{errors.submit}</p>
                                </div>
                            )}

                            {/* Navigation Buttons */}
                            <div className="pt-6 border-t flex justify-between">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => router.push('/manage/organization/setup/choose-plan')}
                                    className="flex items-center gap-2"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Back to Plans
                                </Button>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex items-center gap-2"
                                    size="lg"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Creating Organization...
                                        </>
                                    ) : (
                                        <>
                                            Create Organization
                                            <ArrowRight className="w-5 h-5" />
                                        </>
                                    )}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                {/* Help Text */}
                <div className="mt-6 text-center text-sm text-muted-foreground">
                    <p>Need help? Contact our support team at support@example.com</p>
                    <p className="mt-1">All information is stored securely and can be updated later.</p>
                </div>
            </div>
        </div>
    )
}