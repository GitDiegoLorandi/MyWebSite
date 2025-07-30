'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, Youtube } from 'lucide-react';
import { useLanguage } from '../../lib/language-context';
import { VideoEmbed } from './VideoEmbed';
import { ProjectVideo } from '../../types/project';

interface VideoGalleryProps {
  videos: ProjectVideo[];
  title?: string;
  description?: string;
  className?: string;
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function VideoGallery({ 
  videos, 
  title = "Project Explanation Videos",
  description = "Watch detailed explanations and walkthroughs of my projects",
  className = "" 
}: VideoGalleryProps) {
  const { } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<ProjectVideo['type'] | 'all'>('all');
  const [selectedLanguage, setSelectedLanguage] = useState<'all' | 'en' | 'pt-BR'>('all');

  // Filter videos based on current language, search term, and type
  const filteredVideos = useMemo(() => {
    return videos.filter(video => {
      const matchesLanguage = selectedLanguage === 'all' || video.language === selectedLanguage;
      const matchesSearch = searchTerm === '' || 
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesType = selectedType === 'all' || video.type === selectedType;
      
      return matchesLanguage && matchesSearch && matchesType;
    });
  }, [videos, searchTerm, selectedType, selectedLanguage]);

  // Get unique video types for filter
  const videoTypes = useMemo(() => {
    const types = Array.from(new Set(videos.map(v => v.type)));
    return types;
  }, [videos]);

  const getTypeLabel = (type: ProjectVideo['type']) => {
    switch (type) {
      case 'overview': return 'Project Overview';
      case 'technical-deep-dive': return 'Technical Deep Dive';
      case 'demo': return 'Live Demo';
      case 'code-walkthrough': return 'Code Walkthrough';
      default: return type;
    }
  };

  const getTypeColor = (type: ProjectVideo['type']) => {
    switch (type) {
      case 'overview': return 'bg-blue-500/10 text-blue-600 border-blue-200';
      case 'technical-deep-dive': return 'bg-purple-500/10 text-purple-600 border-purple-200';
      case 'demo': return 'bg-green-500/10 text-green-600 border-green-200';
      case 'code-walkthrough': return 'bg-orange-500/10 text-orange-600 border-orange-200';
      default: return 'bg-gray-500/10 text-gray-600 border-gray-200';
    }
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Filters and Search */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-3 items-center">
              {/* Video Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value as ProjectVideo['type'] | 'all')}
                className="px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Types</option>
                {videoTypes.map(type => (
                  <option key={type} value={type}>
                    {getTypeLabel(type)}
                  </option>
                ))}
              </select>

              {/* Language Filter */}
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value as 'all' | 'en' | 'pt-BR')}
                className="px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Languages</option>
                <option value="en">English</option>
                <option value="pt-BR">Português</option>
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-muted-foreground text-center">
            Showing {filteredVideos.length} of {videos.length} videos
          </div>
        </div>

        {/* Video Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredVideos.map((video) => (
            <motion.div
              key={video.id}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                {/* Video Embed */}
                <VideoEmbed
                  url={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                  title={video.title}
                  description={video.description}
                  duration={video.duration}
                  videoType={video.type}
                  showInfo={false}
                  className="w-full"
                />

                {/* Video Info */}
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-semibold text-sm leading-tight line-clamp-2 flex-1">
                      {video.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs rounded-full border flex-shrink-0 ${getTypeColor(video.type)}`}>
                      {getTypeLabel(video.type)}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
                    {video.description}
                  </p>

                  {/* Video Meta */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {video.duration}
                      </span>
                      <span className="px-2 py-1 bg-muted rounded text-xs">
                        {video.language === 'en' ? '🇺🇸 EN' : '🇧🇷 PT'}
                      </span>
                    </div>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-red-600 hover:text-red-700 transition-colors"
                    >
                      <Youtube className="h-3 w-3" />
                      YouTube
                    </a>
                  </div>

                  {/* Tags */}
                  {video.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {video.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                      {video.tags.length > 3 && (
                        <span className="text-xs text-muted-foreground">
                          +{video.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No results */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
              <Youtube className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium text-foreground mb-2">No videos found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg text-sm text-muted-foreground">
            <Youtube className="h-4 w-4 text-red-600" />
            <span>More videos are added regularly. Subscribe to my YouTube channel for updates!</span>
          </div>
        </div>
      </div>
    </section>
  );
} 