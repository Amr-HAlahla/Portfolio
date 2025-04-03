import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Thanks() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-md w-full mx-auto p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Thank You!
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Your message has been sent successfully. I'll get back to you as soon as possible.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
} 