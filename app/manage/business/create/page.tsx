"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Store, ArrowRight, Loader2, ArrowLeft } from "lucide-react"
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

interface FormData {
    businessName: string
    contactNumber: string
}

interface FormErrors {
    businessName?: string
    contactNumber?: string
    submit?: string
}

export default function CreateBusinessPage() {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState<FormData>({
        businessName: "",
        contactNumber: "",
    })
    const [errors, setErrors] = useState<FormErrors>({})

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}

        // Required fields validation
        if (!formData.businessName.trim()) {
            newErrors.businessName = "Business name is required"
        } else if (formData.businessName.trim().length < 3) {
            newErrors.businessName = "Business name must be at least 3 characters"
        }

        if (!formData.contactNumber.trim()) {
            newErrors.contactNumber = "Contact number is required"
        } else if (formData.contactNumber.trim().length < 4) {
            newErrors.contactNumber = "Contact number must be at least 4 characters"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) return

        setIsSubmitting(true)
        try {
            const response = await fetch('/api/management/business', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                // Redirect to business dashboard
                router.push('/manage/business')
            } else {
                const errorData = await response.json()
                if (errorData.error === "Setup organization first") {
                    setErrors({ submit: 'Please setup your organization first before creating a business.' })
                } else {
                    setErrors({ submit: 'Failed to create business. Please try again.' })
                }
            }
        } catch (error) {
            console.error('Error creating business:', error)
            setErrors({ submit: 'Failed to create business. Please try again.' })
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }))
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }))
        }
    }

    return (
        <div className="min-h-screen bg-background py-8 px-4">
            <div className="max-w-2xl mx-auto">
                <Card className="shadow-lg">
                    <CardHeader className="text-center pb-6">
                        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <Store className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-3xl">Create New Business</CardTitle>
                        <CardDescription className="text-lg">
                            Add a new business to your organization
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Business Details */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-foreground border-b pb-2">
                                    Business Details
                                </h3>

                                <div className="space-y-2">
                                    <Label htmlFor="businessName">Business Name *</Label>
                                    <Input
                                        id="businessName"
                                        value={formData.businessName}
                                        onChange={(e) => handleInputChange("businessName", e.target.value)}
                                        placeholder="e.g., Downtown Coffee Shop"
                                        className={errors.businessName ? "border-red-500" : ""}
                                        autoComplete="organization"
                                    />
                                    {errors.businessName && (
                                        <p className="text-sm text-red-500">{errors.businessName}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="contactNumber">Contact Number *</Label>
                                    <Input
                                        id="contactNumber"
                                        value={formData.contactNumber}
                                        onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                                        placeholder="e.g., +44 20 7946 0958"
                                        className={errors.contactNumber ? "border-red-500" : ""}
                                        autoComplete="tel"
                                    />
                                    {errors.contactNumber && (
                                        <p className="text-sm text-red-500">{errors.contactNumber}</p>
                                    )}
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
                                    onClick={() => router.push('/manage/business')}
                                    className="flex items-center gap-2"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Back to Businesses
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
                                            Creating Business...
                                        </>
                                    ) : (
                                        <>
                                            Create Business
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
                    <p className="mt-1">Business information can be updated later from your dashboard.</p>
                </div>
            </div>
        </div>
    )
}