'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Youtube, Clock, ExternalLink } from 'lucide-react';
import { ProjectVideo } from '../../types/project';
import { VideoEmbed } from './VideoEmbed';
import { useLanguage } from '../../lib/language-context';

interface ProjectVideoSectionProps {
  videos: ProjectVideo[];
  projectTitle: string;
  className?: string;
}

export function ProjectVideoSection({ 
  videos, 
  projectTitle, 
  className = "" 
}: ProjectVideoSectionProps) {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<ProjectVideo['type']>('overview');

  // Filter videos by current language and organize by type
  const languageFilteredVideos = videos.filter(video => video.language === language);
  const videosByType = languageFilteredVideos.reduce((acc, video) => {
    if (!acc[video.type]) acc[video.type] = [];
    acc[video.type].push(video);
    return acc;
  }, {} as Record<ProjectVideo['type'], ProjectVideo[]>);

  const availableTypes = Object.keys(videosByType) as ProjectVideo['type'][];

  // Set initial active tab to first available type
  if (availableTypes.length > 0 && !availableTypes.includes(activeTab)) {
    setActiveTab(availableTypes[0]);
  }

  if (languageFilteredVideos.length === 0) {
    return null;
  }

  const getTypeLabel = (type: ProjectVideo['type']) => {
    switch (type) {
      case 'overview': return language === 'en' ? 'Project Overview' : 'Visão Geral';
      case 'technical-deep-dive': return language === 'en' ? 'Technical Deep Dive' : 'Análise Técnica';
      case 'demo': return language === 'en' ? 'Live Demo' : 'Demonstração';
      case 'code-walkthrough': return language === 'en' ? 'Code Walkthrough' : 'Walkthrough do Código';
      default: return type;
    }
  };

  const getTypeIcon = (type: ProjectVideo['type']) => {
    switch (type) {
      case 'overview': return '📋';
      case 'technical-deep-dive': return '🔧';
      case 'demo': return '🎬';
      case 'code-walkthrough': return '💻';
      default: return '🎥';
    }
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {language === 'en' ? 'Project Videos' : 'Vídeos do Projeto'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === 'en' 
                ? `Watch detailed explanations and demonstrations of ${projectTitle}`
                : `Assista explicações detalhadas e demonstrações do ${projectTitle}`
              }
            </p>
          </div>

          {/* Video Type Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {availableTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveTab(type)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === type
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                }`}
              >
                <span>{getTypeIcon(type)}</span>
                <span>{getTypeLabel(type)}</span>
                <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded">
                  {videosByType[type].length}
                </span>
              </button>
            ))}
          </div>

          {/* Video Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {videosByType[activeTab] && (
              <div className="space-y-8">
                {videosByType[activeTab].map((video, index) => (
                  <div
                    key={video.id}
                    className={`${
                      videosByType[activeTab].length === 1
                        ? 'max-w-4xl mx-auto'
                        : index % 2 === 0
                        ? 'lg:pr-4'
                        : 'lg:pl-4'
                    }`}
                  >
                    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
                      {/* Video */}
                      <VideoEmbed
                        url={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                        title={video.title}
                        description={video.description}
                        duration={video.duration}
                        videoType={activeTab}
                        showInfo={false}
                      />

                      {/* Video Info */}
                      <div className="p-6">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-foreground mb-2">
                              {video.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {video.description}
                            </p>
                          </div>
                          <div className="flex-shrink-0 flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{video.duration}</span>
                          </div>
                        </div>

                        {/* Tags */}
                        {video.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {video.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-1 bg-muted text-muted-foreground text-sm rounded"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Actions */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <a
                              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium transition-colors"
                            >
                              <Youtube className="h-4 w-4" />
                              {language === 'en' ? 'Watch on YouTube' : 'Assistir no YouTube'}
                            </a>
                            <a
                              href={`https://www.youtube.com/watch?v=${video.youtubeId}&t=0s`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                            >
                              <ExternalLink className="h-4 w-4" />
                              {language === 'en' ? 'Share' : 'Compartilhar'}
                            </a>
                          </div>
                          {video.timestamp && (
                            <span className="text-xs text-muted-foreground">
                              {language === 'en' ? 'Published:' : 'Publicado:'} {video.timestamp}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted/50 rounded-lg">
              <Youtube className="h-5 w-5 text-red-600" />
              <span className="text-muted-foreground">
                {language === 'en' 
                  ? 'Found these videos helpful? Subscribe for more project walkthroughs!'
                  : 'Achou estes vídeos úteis? Inscreva-se para mais walkthroughs de projetos!'
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 