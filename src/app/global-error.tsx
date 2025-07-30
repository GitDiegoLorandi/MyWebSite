'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log the error to monitoring service
    console.error('Global error:', error);
    
    // Report to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      // Example: reportError(error);
    }
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-slate-900 dark:via-red-950 dark:to-slate-900">
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-2xl mx-auto text-center">
              {/* Error Icon */}
              <div className="mb-8">
                <div className="mx-auto w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-12 h-12 text-red-600 dark:text-red-400" />
                </div>
              </div>

              {/* Error Message */}
              <div className="mb-12 space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  Something went wrong
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6">
                  A critical error occurred
                </p>
                <p className="text-lg text-slate-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
                  We apologize for the inconvenience. Please try refreshing the page.
                </p>
              </div>

              {/* Error Details (Development only) */}
              {process.env.NODE_ENV === 'development' && error && (
                <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-left">
                  <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                    Error Details (Development Mode):
                  </h3>
                  <pre className="text-sm text-red-700 dark:text-red-300 overflow-auto">
                    {error.message}
                  </pre>
                  {error.digest && (
                    <p className="text-xs text-red-600 dark:text-red-400 mt-2">
                      Error ID: {error.digest}
                    </p>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={reset}
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  <RefreshCw size={20} className="group-hover:rotate-180 transition-transform duration-300" />
                  Try Again
                </button>

                <button
                  onClick={() => window.location.href = '/'}
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                >
                  <Home size={20} />
                  Go Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}