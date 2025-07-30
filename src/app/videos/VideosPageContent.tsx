'use client';

import { useLanguage } from '../../lib/language-context';

export default function VideosPageContent() {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              {t('title', 'VideosPage')}
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8">
              {t('subtitle', 'VideosPage')}
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('description', 'VideosPage')}
            </p>
          </div>
        </div>
      </section>

      {/* Video Gallery - Temporarily simplified */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">{t('title', 'VideosPage.gallery')}</h2>
          <p className="text-muted-foreground mb-8">{t('description', 'VideosPage.gallery')}</p>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/QQYgCxu988s"
                title="Sample Project Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Sample video - Project videos will be updated with actual content soon
            </p>
          </div>
        </div>
      </section>

      {/* YouTube Channel CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              {t('title', 'VideosPage.cta')}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t('description', 'VideosPage.cta')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://youtu.be/QQYgCxu988s?si=XBsfs1P5q2OfKOPZ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a2.999 2.999 0 0 0-2.11-2.124C19.505 3.547 12 3.547 12 3.547s-7.505 0-9.388.515A2.999 2.999 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.999 2.999 0 0 0 2.11 2.124C4.495 20.453 12 20.453 12 20.453s7.505 0 9.388-.515a2.999 2.999 0 0 0 2.11-2.124C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                {t('button', 'VideosPage.cta')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}