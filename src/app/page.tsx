'use client';

import { useLanguage } from '../lib/language-context';
import { LanguageSwitcher } from '../components/LanguageSwitcher';

export default function HomePage() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with Language Switcher */}
      <header className="w-full p-6 flex justify-between items-center">
        <div className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {t('title')}
        </div>
        <LanguageSwitcher />
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            {t('title')}
          </h1>
          <h2 className="text-2xl font-medium text-slate-600 dark:text-slate-300 mb-6">
            {t('subtitle')}
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            {t('description')}
          </p>
          <div className="space-x-4">
            <button className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-8 py-3 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors">
              {t('cta')}
            </button>
            <button className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              {t('ctaSecondary')}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
} 