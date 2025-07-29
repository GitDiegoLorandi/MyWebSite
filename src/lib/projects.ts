import { Project, TechStack } from '../types/project';

// Tech stack definitions
export const techStacks: Record<string, TechStack> = {
  nextjs: { name: 'Next.js', category: 'frontend' },
  react: { name: 'React', category: 'frontend' },
  typescript: { name: 'TypeScript', category: 'frontend' },
  tailwind: { name: 'Tailwind CSS', category: 'frontend' },
  nodejs: { name: 'Node.js', category: 'backend' },
  express: { name: 'Express.js', category: 'backend' },
  postgresql: { name: 'PostgreSQL', category: 'database' },
  mongodb: { name: 'MongoDB', category: 'database' },
  prisma: { name: 'Prisma', category: 'backend' },
  vercel: { name: 'Vercel', category: 'deployment' },
  git: { name: 'Git', category: 'tools' },
  figma: { name: 'Figma', category: 'tools' },
  framerMotion: { name: 'Framer Motion', category: 'frontend' },
  shadcnui: { name: 'shadcn/ui', category: 'frontend' },
};

// Sample projects data
export const projects: Project[] = [
  {
    id: '1',
    slug: 'portfolio-website',
    content: {
      en: {
        title: 'Personal Portfolio Website',
        shortDescription: 'Modern portfolio website showcasing fullstack development skills with bilingual support.',
        description: 'A comprehensive portfolio website built with Next.js 15, featuring a modern design, smooth animations, and full bilingual support. Showcases professional development practices and technical capabilities.',
        features: [
          'Responsive design with mobile-first approach',
          'Dark/Light mode theme switching',
          'Bilingual support (English/Portuguese)',
          'Smooth animations with Framer Motion',
          'Professional project showcase',
          'Contact form integration'
        ],
        challenges: [
          'Implementing seamless language switching without routing complexity',
          'Creating smooth animations while maintaining accessibility',
          'Optimizing performance for Core Web Vitals'
        ],
        learnings: [
          'Advanced Next.js 15 features and App Router',
          'Professional animation patterns with Framer Motion',
          'Accessibility-first development approach'
        ]
      },
      'pt-BR': {
        title: 'Site Portfolio Pessoal',
        shortDescription: 'Site portfolio moderno demonstrando habilidades de desenvolvimento fullstack com suporte bilíngue.',
        description: 'Um site portfolio abrangente construído com Next.js 15, apresentando design moderno, animações suaves e suporte bilíngue completo. Demonstra práticas profissionais de desenvolvimento e capacidades técnicas.',
        features: [
          'Design responsivo com abordagem mobile-first',
          'Troca de tema escuro/claro',
          'Suporte bilíngue (Inglês/Português)',
          'Animações suaves com Framer Motion',
          'Showcase profissional de projetos',
          'Integração de formulário de contato'
        ],
        challenges: [
          'Implementar troca de idiomas sem complexidade de roteamento',
          'Criar animações suaves mantendo acessibilidade',
          'Otimizar performance para Core Web Vitals'
        ],
        learnings: [
          'Recursos avançados do Next.js 15 e App Router',
          'Padrões profissionais de animação com Framer Motion',
          'Abordagem de desenvolvimento com foco em acessibilidade'
        ]
      }
    },
    techStack: [
      techStacks.nextjs,
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.framerMotion,
      techStacks.shadcnui,
      techStacks.vercel
    ],
    media: [
      {
        type: 'image',
        url: '/images/projects/portfolio-website-hero.jpg',
        alt: 'Portfolio homepage with hero section showing bilingual toggle and dark mode',
        caption: 'Hero section with professional introduction and modern design'
      },
      {
        type: 'image',
        url: '/images/projects/portfolio-website-about.jpg',
        alt: 'About page showcasing professional background and technical skills',
        caption: 'Comprehensive about page with technical expertise'
      },
      {
        type: 'youtube',
        url: 'https://youtube.com/embed/portfolio-demo-2025',
        alt: 'Portfolio website demo video showing features and functionality'
      }
    ],
    links: {
      live: 'https://diegolorandi.dev',
      github: 'https://github.com/diegolorandi/portfolio'
    },
    featured: true,
    status: 'in-progress',
    startDate: '2025-01-01',
    category: 'web-app',
    difficulty: 'intermediate'
  },
  {
    id: '2',
    slug: 'task-management-app',
    content: {
      en: {
        title: 'Task Management Application',
        shortDescription: 'Full-stack task management app with real-time collaboration features.',
        description: 'A comprehensive task management application built with modern technologies, featuring real-time updates, team collaboration, and advanced project organization capabilities.',
        features: [
          'Real-time task updates',
          'Team collaboration tools',
          'Project organization',
          'Due date tracking',
          'File attachments',
          'Activity notifications'
        ],
        challenges: [
          'Implementing real-time synchronization',
          'Managing complex state with multiple users',
          'Optimizing database queries for performance'
        ],
        learnings: [
          'WebSocket implementation for real-time features',
          'Advanced database design patterns',
          'Team collaboration workflow design'
        ]
      },
      'pt-BR': {
        title: 'Aplicativo de Gerenciamento de Tarefas',
        shortDescription: 'App fullstack de gerenciamento de tarefas com recursos de colaboração em tempo real.',
        description: 'Uma aplicação abrangente de gerenciamento de tarefas construída com tecnologias modernas, apresentando atualizações em tempo real, colaboração em equipe e capacidades avançadas de organização de projetos.',
        features: [
          'Atualizações de tarefas em tempo real',
          'Ferramentas de colaboração em equipe',
          'Organização de projetos',
          'Rastreamento de prazos',
          'Anexos de arquivo',
          'Notificações de atividade'
        ],
        challenges: [
          'Implementar sincronização em tempo real',
          'Gerenciar estado complexo com múltiplos usuários',
          'Otimizar consultas de banco de dados para performance'
        ],
        learnings: [
          'Implementação de WebSocket para recursos em tempo real',
          'Padrões avançados de design de banco de dados',
          'Design de fluxo de trabalho de colaboração em equipe'
        ]
      }
    },
    techStack: [
      techStacks.nextjs,
      techStacks.react,
      techStacks.typescript,
      techStacks.nodejs,
      techStacks.postgresql,
      techStacks.prisma,
      techStacks.tailwind
    ],
    media: [
      {
        type: 'image',
        url: '/images/projects/task-management-dashboard.jpg',
        alt: 'Task management dashboard showing real-time collaboration features',
        caption: 'Main dashboard with live user activity and task updates'
      },
      {
        type: 'image',
        url: '/images/projects/task-management-kanban.jpg',
        alt: 'Kanban board with drag-and-drop functionality',
        caption: 'Interactive kanban board for project organization'
      },
      {
        type: 'youtube',
        url: 'https://youtube.com/embed/task-manager-demo-2024',
        alt: 'Task management application demo showcasing real-time features'
      }
    ],
    links: {
      github: 'https://github.com/diegolorandi/task-manager'
    },
    featured: true,
    status: 'completed',
    startDate: '2024-06-01',
    endDate: '2024-08-15',
    category: 'web-app',
    difficulty: 'advanced'
  },
  {
    id: '3',
    slug: 'weather-dashboard',
    content: {
      en: {
        title: 'Weather Dashboard',
        shortDescription: 'Interactive weather dashboard with location-based forecasts and data visualization.',
        description: 'A modern weather dashboard application that provides detailed weather information, forecasts, and interactive data visualizations for multiple locations.',
        features: [
          'Location-based weather data',
          '7-day weather forecast',
          'Interactive charts and graphs',
          'Favorite locations management',
          'Weather alerts and notifications',
          'Responsive design for all devices'
        ],
        challenges: [
          'Integrating multiple weather APIs',
          'Creating responsive data visualizations',
          'Handling geolocation and permissions'
        ],
        learnings: [
          'Working with external APIs and data parsing',
          'Data visualization with Chart.js',
          'Progressive Web App implementation'
        ]
      },
      'pt-BR': {
        title: 'Dashboard do Clima',
        shortDescription: 'Dashboard interativo do clima com previsões baseadas em localização e visualização de dados.',
        description: 'Uma aplicação moderna de dashboard do clima que fornece informações detalhadas do tempo, previsões e visualizações interativas de dados para múltiplas localizações.',
        features: [
          'Dados climáticos baseados em localização',
          'Previsão do tempo de 7 dias',
          'Gráficos e tabelas interativas',
          'Gerenciamento de locais favoritos',
          'Alertas e notificações climáticas',
          'Design responsivo para todos os dispositivos'
        ],
        challenges: [
          'Integrar múltiplas APIs de clima',
          'Criar visualizações de dados responsivas',
          'Lidar com geolocalização e permissões'
        ],
        learnings: [
          'Trabalhar com APIs externas e parsing de dados',
          'Visualização de dados com Chart.js',
          'Implementação de Progressive Web App'
        ]
      }
    },
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.nodejs
    ],
    media: [
      {
        type: 'image',
        url: '/images/projects/weather-dashboard-main.jpg',
        alt: 'Weather dashboard main interface showing current conditions and forecasts',
        caption: 'Main dashboard with location-based weather data and forecasts'
      },
      {
        type: 'image',
        url: '/images/projects/weather-dashboard-charts.jpg',
        alt: 'Interactive charts showing temperature trends and precipitation data',
        caption: 'Data visualization with Chart.js and D3.js integration'
      },
      {
        type: 'youtube',
        url: 'https://youtube.com/embed/weather-dashboard-demo-2024',
        alt: 'Weather dashboard demo showcasing data visualization and API integration'
      }
    ],
    links: {
      live: 'https://weather-dashboard-demo.vercel.app',
      github: 'https://github.com/diegolorandi/weather-dashboard'
    },
    featured: true,
    status: 'completed',
    startDate: '2024-03-01',
    endDate: '2024-04-20',
    category: 'web-app',
    difficulty: 'intermediate'
  }
];

// Utility functions
export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter(project => project.category === category);
}

export function getProjectsByTechStack(techName: string): Project[] {
  return projects.filter(project => 
    project.techStack.some(tech => tech.name === techName)
  );
}

export function getAllTechStacks(): TechStack[] {
  const allTechStacks = new Set<string>();
  projects.forEach(project => {
    project.techStack.forEach(tech => {
      allTechStacks.add(tech.name);
    });
  });
  return Array.from(allTechStacks).map(name => 
    Object.values(techStacks).find(tech => tech.name === name)!
  );
} 