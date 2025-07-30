import type { Metadata } from 'next';
import { VideoGallery } from '../../components/project/VideoGallery';
import { ProjectVideo } from '../../types/project';

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

// Sample video data - this would typically come from a CMS or API
const projectVideos: ProjectVideo[] = [
  {
    id: 'portfolio-overview-en',
    title: 'Portfolio Website - Project Overview',
    description: 'Complete walkthrough of my portfolio website built with Next.js 15 and React 19. Learn about the architecture, design decisions, and key features.',
    youtubeId: 'SAMPLE_VIDEO_ID_1', // Replace with actual YouTube video ID
    duration: '12:45',
    type: 'overview',
    tags: ['Next.js', 'React', 'TypeScript', 'Portfolio', 'Web Development'],
    language: 'en',
    timestamp: '2024-01-15',
  },
  {
    id: 'portfolio-overview-pt',
    title: 'Site Portfolio - Visão Geral do Projeto',
    description: 'Apresentação completa do meu site portfolio construído com Next.js 15 e React 19. Conheça a arquitetura, decisões de design e funcionalidades principais.',
    youtubeId: 'SAMPLE_VIDEO_ID_2', // Replace with actual YouTube video ID
    duration: '12:45',
    type: 'overview',
    tags: ['Next.js', 'React', 'TypeScript', 'Portfolio', 'Desenvolvimento Web'],
    language: 'pt-BR',
    timestamp: '2024-01-15',
  },
  {
    id: 'task-management-demo-en',
    title: 'Task Management App - Live Demo',
    description: 'See the task management application in action. Explore real-time collaboration features, project organization, and team coordination tools.',
    youtubeId: 'SAMPLE_VIDEO_ID_3', // Replace with actual YouTube video ID
    duration: '15:30',
    type: 'demo',
    tags: ['Task Management', 'Real-time', 'Collaboration', 'Node.js', 'Socket.io'],
    language: 'en',
    timestamp: '2024-01-10',
  },
  {
    id: 'task-management-technical-en',
    title: 'Task Management App - Technical Deep Dive',
    description: 'Deep dive into the technical architecture: Node.js backend, PostgreSQL database design, real-time WebSocket implementation, and security considerations.',
    youtubeId: 'SAMPLE_VIDEO_ID_4', // Replace with actual YouTube video ID
    duration: '22:15',
    type: 'technical-deep-dive',
    tags: ['Node.js', 'PostgreSQL', 'WebSocket', 'Architecture', 'Security'],
    language: 'en',
    timestamp: '2024-01-12',
  },
  {
    id: 'weather-dashboard-code-en',
    title: 'Weather Dashboard - Code Walkthrough',
    description: 'Line-by-line code review of the weather dashboard. Learn about API integration, data visualization with Chart.js, and responsive design implementation.',
    youtubeId: 'SAMPLE_VIDEO_ID_5', // Replace with actual YouTube video ID
    duration: '18:20',
    type: 'code-walkthrough',
    tags: ['Weather API', 'Chart.js', 'Data Visualization', 'React', 'API Integration'],
    language: 'en',
    timestamp: '2024-01-08',
  },
  {
    id: 'nextjs-15-tutorial-en',
    title: 'Next.js 15 New Features Tutorial',
    description: 'Comprehensive tutorial covering Next.js 15 new features used in my projects. Learn about App Router improvements, React 19 integration, and performance optimizations.',
    youtubeId: 'SAMPLE_VIDEO_ID_6', // Replace with actual YouTube video ID
    duration: '25:45',
    type: 'overview',
    tags: ['Next.js 15', 'React 19', 'Tutorial', 'App Router', 'Performance'],
    language: 'en',
    timestamp: '2024-01-20',
  },
];

export default function VideosPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Project Videos
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8">
              Watch detailed explanations and walkthroughs of my development projects
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dive deep into the technical details, design decisions, and development process behind each project. 
              Perfect for developers looking to learn modern web development practices.
            </p>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <VideoGallery 
        videos={projectVideos}
        title="All Project Videos"
        description="Filter by type, language, or search for specific topics"
      />

      {/* YouTube Channel CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Subscribe for More Content
            </h2>
            <p className="text-muted-foreground mb-8">
              Get notified when I upload new project walkthroughs, tutorials, and technical deep dives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://youtube.com/@diegolorandi" // Replace with your actual YouTube channel
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a2.999 2.999 0 0 0-2.11-2.124C19.505 3.547 12 3.547 12 3.547s-7.505 0-9.388.515A2.999 2.999 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.999 2.999 0 0 0 2.11 2.124C4.495 20.453 12 20.453 12 20.453s7.505 0 9.388-.515a2.999 2.999 0 0 0 2.11-2.124C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Subscribe to YouTube
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border hover:border-foreground text-foreground font-medium rounded-lg transition-all duration-200 hover:scale-105"
              >
                Request a Video Topic
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 