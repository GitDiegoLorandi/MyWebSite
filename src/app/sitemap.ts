import { MetadataRoute } from 'next';
import { projects } from '../lib/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://diegolorandi.dev';
  const lastModified = new Date();

  // Core pages
  const routes = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 1.0,
      alternates: {
        languages: {
          'en-US': baseUrl,
          'pt-BR': baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/about`,
          'pt-BR': `${baseUrl}/about`,
        },
      },
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/projects`,
          'pt-BR': `${baseUrl}/projects`,
        },
      },
    },
  ];

  // Dynamic project pages
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.endDate ? new Date(project.endDate) : lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    alternates: {
      languages: {
        'en-US': `${baseUrl}/projects/${project.slug}`,
        'pt-BR': `${baseUrl}/projects/${project.slug}`,
      },
    },
  }));

  return [...routes, ...projectRoutes];
} 