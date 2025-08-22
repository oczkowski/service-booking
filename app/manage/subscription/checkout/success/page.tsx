import Link from 'next/link';

const TransactionSuccess = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
            <div className="text-center max-w-md mx-auto px-4">
                <div className="mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Payment Successful!</h1>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Thank you for your subscription! Your payment has been processed successfully and your account is now active.
                    </p>
                </div>
                
                <div className="space-y-4">
                    <Link
                        href="/manage/organization"
                        className="inline-block w-full px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                    >
                        Go to Organization
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TransactionSuccess;