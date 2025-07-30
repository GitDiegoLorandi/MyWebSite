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

// Real projects data
export const projects: Project[] = [
  {
    id: '1',
    slug: 'portfolio-website',
    content: {
      en: {
        title: 'Personal Portfolio Website',
        shortDescription: 'Modern portfolio website showcasing fullstack development skills with bilingual support.',
        description: 'This portfolio website built with Next.js 15, featuring a modern design, smooth animations, and full bilingual support. Demonstrates professional development practices and technical capabilities for remote work opportunities.',
        features: [
          'Responsive design with mobile-first approach',
          'Dark/Light mode theme switching',
          'Bilingual support (English/Portuguese)',
          'Smooth animations with Framer Motion',
          'Professional project showcase',
          'SEO optimized with metadata',
          'TypeScript for type safety'
        ],
        challenges: [
          'Implementing seamless language switching without routing complexity',
          'Creating smooth animations while maintaining accessibility',
          'Optimizing performance for Core Web Vitals',
          'Structuring content for international audiences'
        ],
        learnings: [
          'Advanced Next.js 15 features and App Router',
          'Professional animation patterns with Framer Motion',
          'Accessibility-first development approach',
          'International web development best practices'
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
    status: 'completed',
    startDate: '2025-01-01',
    endDate: '2025-01-15',
    category: 'web-app',
    difficulty: 'intermediate'
  },
  {
    id: '2',
    slug: 'logistics-dashboard',
    content: {
      en: {
        title: 'Logistics Management Dashboard',
        shortDescription: 'Comprehensive logistics dashboard for supply chain management and tracking.',
        description: 'A full-stack logistics management system featuring real-time shipment tracking, inventory management, and comprehensive analytics. Built to streamline supply chain operations with modern web technologies.',
        features: [
          'Real-time shipment tracking',
          'Inventory management system',
          'Interactive analytics dashboard',
          'Route optimization tools',
          'Automated notifications',
          'Multi-warehouse support',
          'Responsive design for mobile use'
        ],
        challenges: [
          'Implementing real-time tracking across multiple carriers',
          'Creating complex data visualizations for logistics metrics',
          'Managing large datasets with efficient querying',
          'Integrating with multiple third-party APIs'
        ],
        learnings: [
          'Advanced data visualization techniques',
          'API integration best practices',
          'Real-time data processing patterns',
          'Supply chain management principles'
        ]
      },
      'pt-BR': {
        title: 'Dashboard de Gerenciamento Logístico',
        shortDescription: 'Dashboard abrangente de logística para gerenciamento e rastreamento da cadeia de suprimentos.',
        description: 'Um sistema fullstack de gerenciamento logístico com rastreamento de remessas em tempo real, gestão de inventário e análises abrangentes. Construído para otimizar operações da cadeia de suprimentos com tecnologias web modernas.',
        features: [
          'Rastreamento de remessas em tempo real',
          'Sistema de gestão de inventário',
          'Dashboard de análises interativo',
          'Ferramentas de otimização de rotas',
          'Notificações automatizadas',
          'Suporte a múltiplos armazéns',
          'Design responsivo para uso móvel'
        ],
        challenges: [
          'Implementar rastreamento em tempo real entre múltiplas transportadoras',
          'Criar visualizações complexas de dados para métricas logísticas',
          'Gerenciar grandes conjuntos de dados com consultas eficientes',
          'Integrar com múltiplas APIs de terceiros'
        ],
        learnings: [
          'Técnicas avançadas de visualização de dados',
          'Melhores práticas de integração de API',
          'Padrões de processamento de dados em tempo real',
          'Princípios de gerenciamento da cadeia de suprimentos'
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
        url: '/images/projects/logistics-dashboard-main.jpg',
        alt: 'Logistics dashboard main view showing shipment tracking and analytics',
        caption: 'Main dashboard with real-time logistics tracking and key metrics'
      },
      {
        type: 'image',
        url: '/images/projects/logistics-dashboard-analytics.jpg',
        alt: 'Analytics dashboard with charts and data visualizations',
        caption: 'Comprehensive analytics view with supply chain insights'
      },
      {
        type: 'youtube',
        url: 'https://youtube.com/embed/QQYgCxu988s',
        alt: 'Logistics dashboard demo showcasing tracking and management features'
      }
    ],
    links: {
      github: 'https://github.com/GitDiegoLorandi/logistics-dashboard'
    },
    featured: true,
    status: 'completed',
    startDate: '2024-08-01',
    endDate: '2024-08-15',
    category: 'web-app',
    difficulty: 'advanced'
  },
  {
    id: '3',
    slug: 'e-commerce-platform',
    content: {
      en: {
        title: 'E-commerce Platform',
        shortDescription: 'Modern e-commerce platform with advanced features for online businesses.',
        description: 'A comprehensive e-commerce platform currently in development, featuring modern architecture, secure payments, and advanced inventory management. Built with scalability and performance in mind.',
        features: [
          'Product catalog management',
          'Shopping cart and checkout',
          'Secure payment integration',
          'User authentication and profiles',
          'Order tracking system',
          'Admin dashboard',
          'Inventory management',
          'Multi-language support'
        ],
        challenges: [
          'Implementing secure payment processing',
          'Building scalable architecture for high traffic',
          'Creating intuitive admin interfaces',
          'Ensuring data security and compliance'
        ],
        learnings: [
          'Advanced e-commerce patterns and best practices',
          'Payment gateway integration',
          'Database optimization for transactions',
          'Security implementation for financial data'
        ]
      },
      'pt-BR': {
        title: 'Plataforma E-commerce',
        shortDescription: 'Plataforma e-commerce moderna com recursos avançados para negócios online.',
        description: 'Uma plataforma e-commerce abrangente atualmente em desenvolvimento, com arquitetura moderna, pagamentos seguros e gestão avançada de inventário. Construída com escalabilidade e performance em mente.',
        features: [
          'Gestão de catálogo de produtos',
          'Carrinho de compras e checkout',
          'Integração de pagamentos seguros',
          'Autenticação e perfis de usuário',
          'Sistema de rastreamento de pedidos',
          'Dashboard administrativo',
          'Gestão de inventário',
          'Suporte multi-idioma'
        ],
        challenges: [
          'Implementar processamento seguro de pagamentos',
          'Construir arquitetura escalável para alto tráfego',
          'Criar interfaces administrativas intuitivas',
          'Garantir segurança de dados e conformidade'
        ],
        learnings: [
          'Padrões avançados de e-commerce e melhores práticas',
          'Integração de gateway de pagamento',
          'Otimização de banco de dados para transações',
          'Implementação de segurança para dados financeiros'
        ]
      }
    },
    techStack: [
      techStacks.nextjs,
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.nodejs,
      techStacks.postgresql,
      techStacks.prisma
    ],
    media: [
      {
        type: 'image',
        url: '/images/projects/ecommerce-preview.jpg',
        alt: 'E-commerce platform preview - work in progress',
        caption: 'Early preview of the e-commerce platform under development'
      }
    ],
    links: {
      github: 'https://github.com/GitDiegoLorandi/e-commerce-platform'
    },
    featured: false,
    status: 'in-progress',
    startDate: '2025-01-10',
    category: 'web-app',
    difficulty: 'advanced'
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