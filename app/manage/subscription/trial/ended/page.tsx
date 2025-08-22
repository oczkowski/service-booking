import Link from 'next/link';

const TrialEndedPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
            <div className="text-center max-w-md mx-auto px-4">
                <div className="mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Trial Period Ended</h1>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Your free trial has come to an end. To continue using our service and access all features, 
                        please choose a plan that works best for you.
                    </p>
                </div>
                
                <div className="space-y-4">
                    <Link
                        href="/plans"
                        className="inline-block w-full px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                    >
                        Choose Your Plan
                    </Link>
                    
                    <Link
                        href="/"
                        className="inline-block w-full px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                        Back to Home
                    </Link>
                    
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Visit our plans page to select and pay for a subscription that fits your needs.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TrialEndedPage;