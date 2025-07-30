'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Clock, Zap } from 'lucide-react';
import Link from 'next/link';
import { Project } from '../../types/project';
import { useLanguage } from '../../lib/language-context';
import { TechStack } from './TechStack';
import { ProjectMedia } from './ProjectMedia';
import { ProjectStructuredData, BreadcrumbStructuredData } from '../seo/StructuredData';

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const { language, t } = useLanguage();
  const content = project.content[language];

  // Breadcrumb data for structured data
  const breadcrumbItems = [
    { name: 'Home', url: 'https://diegolorandi.dev' },
    { name: 'Projects', url: 'https://diegolorandi.dev/projects' },
    { name: content.title, url: `https://diegolorandi.dev/projects/${project.slug}` },
  ];

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

  return (
    <>
      {/* Structured Data */}
      <ProjectStructuredData
        name={content.title}
        description={content.description}
        url={`https://diegolorandi.dev/projects/${project.slug}`}
        author="Diego Lorandi"
        dateCreated={project.startDate}
        dateModified={project.endDate}
        image={project.media.length > 0 ? project.media[0].url : undefined}
        programmingLanguage={project.techStack.map(tech => tech.name)}
        keywords={[
          content.title.toLowerCase(),
          project.category.toLowerCase(),
          ...project.techStack.map(tech => tech.name.toLowerCase()),
          'web development',
          'portfolio project',
        ]}
      />
      <BreadcrumbStructuredData items={breadcrumbItems} />

      <div className="min-h-screen py-12">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('backToProjects', 'ProjectsPage')}
            </Link>
          </motion.div>

          {/* Project header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                    {content.title}
                  </h1>
                  {project.featured && (
                    <div className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1">
                      <Zap className="h-3 w-3" />
                      Featured
                    </div>
                  )}
                </div>
                
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  {content.description}
                </p>

                <div className="flex items-center gap-4 flex-wrap">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {t(`status${project.status.charAt(0).toUpperCase() + project.status.slice(1)}` as keyof typeof t, 'ProjectsPage')}
                  </span>
                  
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {new Date(project.startDate).toLocaleDateString(language === 'pt-BR' ? 'pt-BR' : 'en-US', {
                      year: 'numeric',
                      month: 'long'
                    })}
                    {project.endDate && (
                      <>
                        {' - '}
                        {new Date(project.endDate).toLocaleDateString(language === 'pt-BR' ? 'pt-BR' : 'en-US', {
                          year: 'numeric',
                          month: 'long'
                        })}
                      </>
                    )}
                  </div>

                  {project.endDate && (
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {Math.ceil((new Date(project.endDate).getTime() - new Date(project.startDate).getTime()) / (1000 * 60 * 60 * 24 * 30))} months
                    </div>
                  )}
                </div>
              </div>

              {/* Project links */}
              <div className="flex items-center gap-3">
                {project.links.github && (
                  <Link
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    {t('viewCode', 'ProjectsPage')}
                  </Link>
                )}
                {project.links.live && (
                  <Link
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {t('liveDemo', 'ProjectsPage')}
                  </Link>
                )}
              </div>
            </div>
          </motion.div>

          {/* Project image/media */}
          {project.media.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <ProjectMedia 
                media={project.media[0]} 
                priority={true}
              />
            </motion.div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Features */}
              {content.features.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    {t('features', 'ProjectsPage')}
                  </h2>
                  <ul className="space-y-3">
                    {content.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              )}

              {/* Challenges */}
              {content.challenges && content.challenges.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    {t('challenges', 'ProjectsPage')}
                  </h2>
                  <ul className="space-y-3">
                    {content.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              )}

              {/* Learnings */}
              {content.learnings && content.learnings.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    {t('learnings', 'ProjectsPage')}
                  </h2>
                  <ul className="space-y-3">
                    {content.learnings.map((learning, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{learning}</span>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="sticky top-8 space-y-8"
              >
                {/* Tech Stack */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {t('techStack', 'ProjectsPage')}
                  </h3>
                  <TechStack techStack={project.techStack} />
                </div>

                {/* Project Info */}
                <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Project Info
                  </h3>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Category:</span>
                      <span className="text-foreground capitalize">{project.category.replace('-', ' ')}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Difficulty:</span>
                      <span className="text-foreground capitalize">{project.difficulty}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(project.status)}`}>
                        {t(`status${project.status.charAt(0).toUpperCase() + project.status.slice(1)}` as keyof typeof t, 'ProjectsPage')}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 