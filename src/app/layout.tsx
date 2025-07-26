import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Diego Lorandi - Fullstack Developer',
    template: '%s | Diego Lorandi',
  },
  description:
    'Professional fullstack developer portfolio showcasing modern web development projects. Home office specialist in Next.js, TypeScript, and full-stack solutions.',
  keywords: [
    'fullstack developer',
    'portfolio',
    'next.js',
    'typescript',
    'web development',
    'home office',
  ],
  authors: [{ name: 'Diego Lorandi' }],
  creator: 'Diego Lorandi',
  metadataBase: new URL('https://diegolorandi.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://diegolorandi.dev',
    title: 'Diego Lorandi - Fullstack Developer',
    description:
      'Professional fullstack developer portfolio showcasing modern web development projects.',
    siteName: 'Diego Lorandi Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diego Lorandi - Fullstack Developer',
    description:
      'Professional fullstack developer portfolio showcasing modern web development projects.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
