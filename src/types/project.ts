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
}

export interface ProjectContent {
  title: string;
  description: string;
  shortDescription: string;
  features: string[];
  challenges?: string[];
  learnings?: string[];
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