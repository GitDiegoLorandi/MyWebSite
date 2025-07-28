'use client';

import { useLanguage } from '../lib/language-context';

export default function HomePage() {
  const { t } = useLanguage();
  
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-theme(spacing.16)-theme(spacing.24))] home-office-gradient">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-foreground mb-4">
          {t('title', 'HomePage')}
        </h1>
        <h2 className="text-2xl font-medium text-muted-foreground mb-6">
          {t('subtitle', 'HomePage')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t('description', 'HomePage')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            {t('cta', 'HomePage')}
          </button>
          <button className="border border-border text-foreground px-8 py-3 rounded-lg font-medium hover:bg-accent transition-colors">
            {t('ctaSecondary', 'HomePage')}
          </button>
        </div>
      </div>
    </div>
  );
} 