import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from '../lib/language-context';
import { ThemeProvider } from '../components/providers/ThemeProvider';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { PersonStructuredData, WebsiteStructuredData } from '../components/seo/StructuredData';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Diego Lorandi - Fullstack Developer | Professional Portfolio',
    template: '%s | Diego Lorandi - Fullstack Developer',
  },
  description:
    'Professional fullstack developer portfolio showcasing modern web development projects. Remote work specialist in Next.js, TypeScript, React, and full-stack solutions. Available for remote collaboration worldwide.',
  keywords: [
    'fullstack developer',
    'portfolio',
    'next.js',
    'typescript',
    'react',
    'web development',
    'remote work',
    'diego lorandi',
    'fullstack engineer',
    'javascript developer',
    'frontend developer',
    'backend developer',
    'software engineer',
    'freelance developer',
    'consultant',
    'node.js',
    'tailwind css',
    'vercel',
    'git',
    'agile',
    'responsive design',
    'ui/ux',
    'api development',
    'database design',
    'cloud deployment'
  ],
  authors: [{ name: 'Diego Lorandi', url: 'https://diegolorandi.dev' }],
  creator: 'Diego Lorandi',
  publisher: 'Diego Lorandi',
  metadataBase: new URL('https://diegolorandi.dev'),
  alternates: {
    canonical: 'https://diegolorandi.dev',
    languages: {
      'en-US': 'https://diegolorandi.dev',
      'pt-BR': 'https://diegolorandi.dev',
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Diego Lorandi - Fullstack Developer',
    locale: 'en_US',
    alternateLocale: ['pt_BR'],
    title: 'Diego Lorandi - Fullstack Developer | Professional Portfolio',
    description:
      'Professional fullstack developer portfolio showcasing modern web development projects. Remote work specialist available for collaboration worldwide.',
    url: 'https://diegolorandi.dev',
    images: [
      {
        url: '/images/hero/portfolio-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Diego Lorandi - Fullstack Developer Portfolio',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diego Lorandi - Fullstack Developer | Professional Portfolio',
    description:
      'Professional fullstack developer portfolio showcasing modern web development projects. Remote work specialist available worldwide.',
    images: ['/images/hero/portfolio-og-image.jpg'],
    creator: '@diegolorandi',
    site: '@diegolorandi',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
  classification: 'Professional Portfolio',
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'theme-color': '#000000',
    'color-scheme': 'dark light',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <PersonStructuredData
          name="Diego Lorandi"
          jobTitle="Fullstack Developer"
          description="Professional fullstack developer specializing in Next.js, TypeScript, React, and modern web technologies. Available for remote collaboration worldwide."
          url="https://diegolorandi.dev"
          image="https://diegolorandi.dev/images/hero/diego-lorandi-profile.jpg"
          email="diego@diegolorandi.dev"
          location="Remote Worldwide"
          sameAs={[
            "https://github.com/diegolorandi",
            "https://linkedin.com/in/diegolorandi",
            "https://twitter.com/diegolorandi"
          ]}
        />
        <WebsiteStructuredData
          name="Diego Lorandi - Fullstack Developer Portfolio"
          description="Professional fullstack developer portfolio showcasing modern web development projects with bilingual support."
          url="https://diegolorandi.dev"
          author="Diego Lorandi"
          inLanguage={['en-US', 'pt-BR']}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
