import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '../lib/language-context';
import { ThemeProvider } from '../components/providers/ThemeProvider';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Diego Lorandi - Fullstack Developer',
    template: '%s | Diego Lorandi',
  },
  description:
    'Professional fullstack developer portfolio showcasing modern web development projects. Remote work specialist in Next.js, TypeScript, and full-stack solutions.',
  keywords: [
    'fullstack developer',
    'portfolio',
    'next.js',
    'typescript',
    'web development',
    'remote work',
  ],
  authors: [{ name: 'Diego Lorandi' }],
  creator: 'Diego Lorandi',
  metadataBase: new URL('https://diegolorandi.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Diego Lorandi - Fullstack Developer',
    description:
      'Professional fullstack developer portfolio showcasing modern web development projects.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
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
      </body>
    </html>
  );
}
