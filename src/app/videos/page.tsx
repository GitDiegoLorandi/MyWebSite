import type { Metadata } from 'next';
import VideosPageContent from './VideosPageContent';

export const metadata: Metadata = {
  title: 'Project Videos | Diego Lorandi - Fullstack Developer',
  description: 'Watch detailed explanations and walkthroughs of my development projects. Learn about the technologies, challenges, and solutions in each project.',
  keywords: [
    'project videos',
    'programming tutorials',
    'fullstack development',
    'project explanations',
    'code walkthroughs',
    'development process',
    'Next.js tutorials',
    'React tutorials',
    'TypeScript',
    'web development',
  ],
  openGraph: {
    title: 'Project Videos | Diego Lorandi',
    description: 'Watch detailed explanations and walkthroughs of my development projects',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Videos | Diego Lorandi',
    description: 'Watch detailed explanations and walkthroughs of my development projects',
  },
};

export default function VideosPage() {
  return <VideosPageContent />;
} 