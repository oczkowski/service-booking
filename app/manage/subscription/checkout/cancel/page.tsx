import Link from 'next/link';

const CancelTransaction = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
            <div className="text-center max-w-md mx-auto px-4">
                <div className="mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Payment Cancelled</h1>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Your payment was cancelled. No charges have been made to your account. 
                        You can return to our plans page to try again.
                    </p>
                </div>
                
                <div className="space-y-4">
                    <Link
                        href="/plans"
                        className="inline-block w-full px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                    >
                        Return to Plans
                    </Link>
                    
                    <Link
                        href="/"
                        className="inline-block w-full px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CancelTransaction;