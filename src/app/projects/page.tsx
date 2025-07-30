import type { Metadata } from 'next';
import { ProjectsGrid } from '../../components/project/ProjectsGrid';
import { projects } from '../../lib/projects';

export const metadata: Metadata = {
  title: 'Projects Portfolio - Diego Lorandi Development Showcase',
  description: 
    'Explore Diego Lorandi\'s comprehensive portfolio of fullstack development projects. Featuring Next.js, TypeScript, React applications with live demos, technical deep-dives, and modern development practices.',
  keywords: [
    'diego lorandi projects',
    'fullstack portfolio',
    'web development projects',
    'next.js projects',
    'typescript projects',
    'react applications',
    'development showcase',
    'project portfolio',
    'live demos',
    'case studies',
    'modern web apps',
    'professional projects',
    'development work',
    'coding portfolio',
    'software projects'
  ],
  openGraph: {
    title: 'Projects Portfolio - Diego Lorandi Development Showcase',
    description: 
      'Explore Diego Lorandi\'s comprehensive portfolio of fullstack development projects featuring modern technologies and live demos.',
    type: 'website',
    url: 'https://diegolorandi.dev/projects',
    images: [
      {
        url: '/images/projects/portfolio-showcase-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Diego Lorandi - Projects Portfolio Showcase',
        type: 'image/jpeg',
      }
    ],
    siteName: 'Diego Lorandi - Fullstack Developer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects Portfolio - Diego Lorandi Development Showcase',
    description: 
      'Explore Diego Lorandi\'s comprehensive portfolio of fullstack development projects featuring modern technologies and live demos.',
    images: ['/images/projects/portfolio-showcase-og.jpg'],
  },
  alternates: {
    canonical: 'https://diegolorandi.dev/projects',
  },
};

export default function ProjectsPage() {
  return <ProjectsGrid projects={projects} />;
} 