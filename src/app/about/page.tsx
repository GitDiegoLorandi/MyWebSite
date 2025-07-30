import type { Metadata } from 'next';
import { AboutHero } from '../../components/sections/AboutHero';
import { ProfessionalBackground } from '../../components/sections/ProfessionalBackground';
import { SkillsSection } from '../../components/sections/SkillsSection';
import { EducationSection } from '../../components/sections/EducationSection';
import { TestimonialsSection } from '../../components/sections/TestimonialsSection';
import { ContactCTA } from '../../components/sections/ContactCTA';
import { MDXContentSection } from '../../components/sections/MDXContentSection';

export const metadata: Metadata = {
  title: 'About Diego Lorandi - Professional Background & Skills',
  description: 
    'Learn about Diego Lorandi, a seasoned fullstack developer with expertise in Next.js, TypeScript, React, and modern web technologies. Discover professional background, technical skills, education, and remote work experience.',
  keywords: [
    'diego lorandi',
    'about diego lorandi',
    'fullstack developer background',
    'professional experience',
    'technical skills',
    'remote developer',
    'next.js expert',
    'typescript developer',
    'react specialist',
    'web development experience',
    'software engineer background',
    'freelance developer',
    'development consultant',
    'professional profile',
    'career background'
  ],
  openGraph: {
    title: 'About Diego Lorandi - Professional Background & Skills',
    description: 
      'Learn about Diego Lorandi, a seasoned fullstack developer with expertise in modern web technologies and remote work excellence.',
    type: 'profile',
    url: 'https://diegolorandi.dev/about',
    images: [
      {
        url: '/images/about/diego-lorandi-profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Diego Lorandi - Professional Profile',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Diego Lorandi - Professional Background & Skills',
    description: 
      'Learn about Diego Lorandi, a seasoned fullstack developer with expertise in modern web technologies and remote work excellence.',
    images: ['/images/about/diego-lorandi-profile.jpg'],
  },
  alternates: {
    canonical: 'https://diegolorandi.dev/about',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <ProfessionalBackground />
      <SkillsSection />
      <EducationSection />
      
      {/* MDX Rich Content Section */}
      <MDXContentSection />
      
      <TestimonialsSection />
      <ContactCTA />
    </main>
  );
} 