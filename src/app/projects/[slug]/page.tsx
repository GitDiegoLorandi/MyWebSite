import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProjectBySlug, projects } from '../../../lib/projects';
import { ProjectDetails } from '../../../components/project/ProjectDetails';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  // Use English content for metadata (can be enhanced for multilingual in the future)
  const content = project.content.en;
  const projectTitle = `${content.title} - Project Details`;
  const projectDescription = content.description || 
    `Explore ${content.title}, a ${project.category} project by Diego Lorandi showcasing ${project.techStack.slice(0, 3).map(tech => tech.name).join(', ')} and modern development practices.`;

  return {
    title: projectTitle,
    description: projectDescription,
    keywords: [
      content.title.toLowerCase(),
      project.category.toLowerCase(),
      ...project.techStack.map(tech => tech.name.toLowerCase()),
      'project details',
      'case study',
      'web development',
      'portfolio project',
      'diego lorandi'
    ],
    openGraph: {
      title: projectTitle,
      description: projectDescription,
      type: 'article',
      url: `https://diegolorandi.dev/projects/${project.slug}`,
      images: project.media.length > 0 ? [
        {
          url: project.media[0].url,
          width: 1200,
          height: 630,
          alt: `${content.title} - Project Screenshot`,
          type: 'image/jpeg',
        }
      ] : undefined,
      publishedTime: project.startDate || undefined,
      authors: ['Diego Lorandi'],
      section: 'Portfolio',
      tags: project.techStack.map(tech => tech.name),
    },
    twitter: {
      card: 'summary_large_image',
      title: projectTitle,
      description: projectDescription,
      images: project.media.length > 0 ? [project.media[0].url] : undefined,
    },
    alternates: {
      canonical: `https://diegolorandi.dev/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
} 