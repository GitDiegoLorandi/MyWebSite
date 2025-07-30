'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';
import { useLanguage } from '../lib/language-context';
import { translations } from '../lib/translations';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const { language } = useLanguage();
  const t = translations[language].ErrorBoundary;

  useEffect(() => {
    // Log the error to monitoring service
    console.error('Global error boundary:', error);
    
    // Report to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      // Example: reportError(error);
    }
  }, [error]);

  return (
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
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6">
              {t.subtitle}
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
              {t.description}
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
              {error.stack && (
                <details className="mt-2">
                  <summary className="cursor-pointer text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200">
                    Stack Trace
                  </summary>
                  <pre className="text-xs text-red-600 dark:text-red-400 mt-2 overflow-auto max-h-40">
                    {error.stack}
                  </pre>
                </details>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={reset}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
              <RefreshCw size={20} className="group-hover:rotate-180 transition-transform duration-300" />
              {t.refreshButton}
            </button>

            <Link
              href="/"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
              <Home size={20} />
              {t.homeButton}
            </Link>

            <a
              href="https://github.com/diego-lorandi/MyWebSite/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-300 font-medium rounded-lg transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
              <Bug size={20} />
              {t.reportIssue}
            </a>
          </div>

          {/* Decorative Elements */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-10 dark:opacity-5">
              <div className="w-96 h-96 rounded-full bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}