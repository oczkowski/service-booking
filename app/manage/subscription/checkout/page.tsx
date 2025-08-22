'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import getStripe from '@/lib/stripe/client';
import { useOrganizationSetup } from "@/lib/stores/organization-setup"

const CheckoutPage = () => {
    const [error, setError] = useState<string | null>(null);

    const { subscriptionData } = useOrganizationSetup()
    const priceId = subscriptionData.priceId

    useEffect(() => {
        const createCheckoutSession = async () => {
            if (!priceId) {
                setError('Price ID is required');
                return;
            }

            try {
                const response = await fetch('/api/management/stripe/checkout', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ priceId }),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    setError(errorData.error || 'Failed to create checkout session');
                    return;
                }

                const { sessionId } = await response.json();

                // Redirect to Stripe Checkout using Stripe SDK
                const stripe = await getStripe();
                if (stripe) {
                    const { error: stripeError } = await stripe.redirectToCheckout({
                        sessionId,
                    });

                    if (stripeError) {
                        setError(stripeError.message || 'Failed to redirect to checkout');
                    }
                } else {
                    setError('Stripe failed to load');
                }
            } catch (_) {
                setError('Failed to create checkout session');
            }
        };

        createCheckoutSession();
    }, [priceId]);

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <h2 className="text-xl font-semibold text-red-600 mb-2">Error</h2>
                    <p className="text-gray-600 mb-4">{error}</p>
                    <Link
                        href="/plans"
                        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Return to Plans
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <h2 className="text-xl font-semibold mb-2">Preparing your checkout...</h2>
                <p className="text-gray-600">You will be redirected to Stripe in a moment.</p>
            </div>
        </div>
    );
};

export default CheckoutPage;