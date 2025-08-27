"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Store, Plus, Building2, Phone, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface Business {
    id: string
    businessName: string
    contactNumber: string
    organizationId: string
    createdAt: string
    updatedAt: string
}

export default function BusinessDashboard() {
    const router = useRouter()
    const [businesses, setBusinesses] = useState<Business[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchBusinesses = async () => {
            try {
                const response = await fetch('/api/management/business')
                
                if (response.ok) {
                    const data = await response.json()
                    setBusinesses(data)
                } else {
                    const errorData = await response.json()
                    if (errorData.error === "Setup organization first") {
                        setError('Please setup your organization first before managing businesses.')
                    } else {
                        setError('Failed to load businesses. Please try again.')
                    }
                }
            } catch (error) {
                console.error('Error fetching businesses:', error)
                setError('Failed to load businesses. Please try again.')
            } finally {
                setIsLoading(false)
            }
        }

        fetchBusinesses()
    }, [])

    if (isLoading) {
        return (
            <div className="min-h-screen bg-background py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-center py-12">
                        <Loader2 className="w-8 h-8 animate-spin text-primary" />
                        <span className="ml-2 text-lg">Loading businesses...</span>
                    </div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen bg-background py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center py-12">
                        <Building2 className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                        <h2 className="text-2xl font-semibold mb-2">Unable to Load Businesses</h2>
                        <p className="text-muted-foreground mb-6">{error}</p>
                        <Button onClick={() => window.location.reload()}>
                            Try Again
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background py-8 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-foreground">Your Businesses</h1>
                        <p className="text-muted-foreground mt-2">
                            Manage all businesses in your organization
                        </p>
                    </div>
                    <Button
                        onClick={() => router.push('/manage/business/create')}
                        className="flex items-center gap-2"
                        size="lg"
                    >
                        <Plus className="w-5 h-5" />
                        Add Business
                    </Button>
                </div>

                {/* Business List */}
                {businesses.length === 0 ? (
                    // Empty state
                    <Card className="text-center py-12">
                        <CardContent>
                            <Store className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                            <CardTitle className="text-2xl mb-2">No Businesses Yet</CardTitle>
                            <CardDescription className="text-lg mb-6">
                                Get started by creating your first business
                            </CardDescription>
                            <Button
                                onClick={() => router.push('/manage/business/create')}
                                className="flex items-center gap-2"
                                size="lg"
                            >
                                <Plus className="w-5 h-5" />
                                Create Your First Business
                            </Button>
                        </CardContent>
                    </Card>
                ) : (
                    // Business cards grid
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {businesses.map((business) => (
                            <Card key={business.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                                <CardHeader className="pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                            <Store className="w-6 h-6 text-primary" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <CardTitle className="text-xl truncate">
                                                {business.businessName}
                                            </CardTitle>
                                            <CardDescription>
                                                Created {new Date(business.createdAt).toLocaleDateString()}
                                            </CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Phone className="w-4 h-4" />
                                            <span>{business.contactNumber}</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-4 border-t">
                                        <Button 
                                            variant="outline" 
                                            size="sm" 
                                            className="w-full"
                                            onClick={() => {
                                                // TODO: Navigate to business details/edit page
                                                console.log('Navigate to business:', business.id)
                                            }}
                                        >
                                            Manage Business
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}

                {/* Summary */}
                {businesses.length > 0 && (
                    <div className="mt-8 text-center text-sm text-muted-foreground">
                        <p>
                            Showing {businesses.length} business{businesses.length !== 1 ? 'es' : ''} in your organization
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
