"use client"

import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function OrganizationSetupSuccess() {
    return (
        <div className="min-h-screen bg-background py-8 px-4">
            <div className="max-w-2xl mx-auto">
                <Card className="shadow-lg">
                    <CardHeader className="text-center pb-6">
                        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <CardTitle className="text-3xl text-green-600">Organization Created Successfully!</CardTitle>
                        <CardDescription className="text-lg">
                            Your organization has been set up and is ready to use
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="text-center">
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <p className="text-muted-foreground">
                                    Congratulations! Your organization is now active and you can start managing your services and bookings.
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    You can update your organization details anytime from the organization dashboard.
                                </p>
                            </div>

                            <div className="pt-4">
                                <Button asChild size="lg" className="flex items-center gap-2">
                                    <Link href="/manage/organization">
                                        Go to Organization Dashboard
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Additional Help Text */}
                <div className="mt-6 text-center text-sm text-muted-foreground">
                    <p>Need help getting started? Contact our support team for assistance.</p>
                </div>
            </div>
        </div>
    )
}