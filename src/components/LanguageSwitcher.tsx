'use client';

import { useLanguage } from '../lib/language-context';

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'en'
            ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
            : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
        }`}
      >
        {t('english', 'LanguageSwitcher')}
      </button>
      <button
        onClick={() => setLanguage('pt-BR')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'pt-BR'
            ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
            : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
        }`}
      >
        {t('portuguese', 'LanguageSwitcher')}
      </button>
    </div>
  );
} 