'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';
import { Project } from '../../types/project';
import { useLanguage } from '../../lib/language-context';
import { ProjectCard } from './ProjectCard';

interface ProjectsGridProps {
  projects: Project[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Project['category'] | 'all'>('all');
  const [selectedStatus, setSelectedStatus] = useState<Project['status'] | 'all'>('all');

  // Filter projects based on search and filters
  const { language } = useLanguage();
  const filteredProjects = projects.filter(project => {
    const content = project.content[language];
    
    const matchesSearch = searchTerm === '' || 
      content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      content.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.techStack.some(tech => tech.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Sort projects: featured first, then by start date (newest first)
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  const categories: Array<{ value: Project['category'] | 'all'; label: string }> = [
    { value: 'all', label: t('filterAll', 'ProjectsPage') },
    { value: 'web-app', label: t('filterWebApp', 'ProjectsPage') },
    { value: 'mobile-app', label: t('filterMobileApp', 'ProjectsPage') },
    { value: 'api', label: t('filterApi', 'ProjectsPage') },
    { value: 'tool', label: t('filterTool', 'ProjectsPage') },
    { value: 'library', label: t('filterLibrary', 'ProjectsPage') },
  ];

  const statuses: Array<{ value: Project['status'] | 'all'; label: string }> = [
    { value: 'all', label: 'All Status' },
    { value: 'completed', label: t('statusCompleted', 'ProjectsPage') },
    { value: 'in-progress', label: t('statusInProgress', 'ProjectsPage') },
    { value: 'planned', label: t('statusPlanned', 'ProjectsPage') },
  ];

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
        >
          {t('title', 'ProjectsPage')}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          {t('description', 'ProjectsPage')}
        </motion.p>
      </div>

      {/* Filters and Search */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between"
      >
        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as Project['category'] | 'all')}
              className="border border-border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value as Project['status'] | 'all')}
            className="border border-border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {statuses.map((status) => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
        </div>
      </motion.div>

      {/* Results count */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-6"
      >
        <p className="text-sm text-muted-foreground">
          Showing {sortedProjects.length} of {projects.length} projects
        </p>
      </motion.div>

      {/* Projects Grid */}
      {sortedProjects.length > 0 ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {sortedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center py-12"
        >
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium text-foreground mb-2">No projects found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters to find what you&apos;re looking for.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
} 