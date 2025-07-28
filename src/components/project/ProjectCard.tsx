'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Zap } from 'lucide-react';
import Link from 'next/link';
import { Project } from '../../types/project';
import { useLanguage } from '../../lib/language-context';
import { ProjectMedia } from './ProjectMedia';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0
  }
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { language, t } = useLanguage();
  const content = project.content[language];

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'planned':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    }
  };

  const getDifficultyColor = (difficulty: Project['difficulty']) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200';
      case 'intermediate':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200';
      case 'advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: 'easeOut'
      }}
      className="group relative bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1">
            <Zap className="h-3 w-3" />
            Featured
          </div>
        </div>
      )}

      {/* Project media */}
      <div className="relative overflow-hidden">
        {project.media[0] ? (
          <ProjectMedia media={project.media[0]} />
        ) : (
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-primary/20 flex items-center justify-center">
                <ExternalLink className="h-8 w-8 text-primary" />
              </div>
              <span className="text-muted-foreground text-sm">Preview Coming Soon</span>
            </div>
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            href={`/projects/${project.slug}`}
            className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            {t('viewProject', 'ProjectsPage')}
          </Link>
        </div>
      </div>

      {/* Card content */}
      <div className="p-6 space-y-4">
        {/* Title and status */}
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {content.title}
            </h3>
          </div>
          
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`px-2 py-1 rounded-md text-xs font-medium ${getStatusColor(project.status)}`}>
              {t(`status${project.status.charAt(0).toUpperCase() + project.status.slice(1)}` as keyof typeof t, 'ProjectsPage')}
            </span>
            <span className={`px-2 py-1 rounded-md text-xs font-medium ${getDifficultyColor(project.difficulty)}`}>
              {project.difficulty}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          {content.shortDescription}
        </p>

        {/* Tech stack */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-foreground">{t('techStack', 'ProjectsPage')}</h4>
          <div className="flex flex-wrap gap-1">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech.name}
                className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
              >
                {tech.name}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Date and links */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            {new Date(project.startDate).getFullYear()}
          </div>
          
          <div className="flex items-center gap-2">
            {project.links.github && (
              <Link
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="h-4 w-4" />
              </Link>
            )}
            {project.links.live && (
              <Link
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
} 