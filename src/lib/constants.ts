import { SiteConfig } from '@/types/global'

export const siteConfig: SiteConfig = {
  name: 'Diego Lorandi',
  description:
    'Professional fullstack developer portfolio showcasing modern web development projects. Home office specialist in Next.js, TypeScript, and full-stack solutions.',
  url: 'https://diegolorandi.dev',
  ogImage: 'https://diegolorandi.dev/og.jpg',
  links: {
    github: 'https://github.com/GitDiegoLorandi',
    linkedin: 'https://linkedin.com/in/diego-lorandi',
    email: 'mailto:diego@diegolorandi.dev',
  },
}

export const locales = [
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
  },
  {
    code: 'pt-BR',
    name: 'Português (BR)',
    flag: '🇧🇷',
  },
] as const

export const defaultLocale = 'en'

export const technologies = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'AWS',
  'Vercel',
  'Git',
  'Linux',
] as const
