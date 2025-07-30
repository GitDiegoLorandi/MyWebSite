export interface TechStack {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'deployment';
  icon?: string;
}

export interface ProjectMedia {
  type: 'image' | 'video' | 'youtube';
  url: string;
  alt?: string;
  caption?: string;
  videoType?: 'demo' | 'explanation' | 'tutorial' | 'walkthrough';
  duration?: string; // e.g., "5:30"
  thumbnail?: string; // Custom thumbnail if needed
}

export interface ProjectVideo {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  duration: string;
  type: 'overview' | 'technical-deep-dive' | 'demo' | 'code-walkthrough';
  tags: string[];
  timestamp?: string; // When created
  language: 'en' | 'pt-BR';
}

export interface ProjectContent {
  title: string;
  description: string;
  shortDescription: string;
  features: string[];
  challenges?: string[];
  learnings?: string[];
  videos?: ProjectVideo[]; // New: dedicated videos section
}

export interface ProjectLinks {
  live?: string;
  github?: string;
  demo?: string;
}

export interface Project {
  id: string;
  slug: string;
  content: {
    en: ProjectContent;
    'pt-BR': ProjectContent;
  };
  techStack: TechStack[];
  media: ProjectMedia[];
  links: ProjectLinks;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
  startDate: string;
  endDate?: string;
  category: 'web-app' | 'mobile-app' | 'api' | 'tool' | 'library';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface ProjectFilter {
  category?: Project['category'];
  techStack?: string[];
  status?: Project['status'];
  difficulty?: Project['difficulty'];
} 