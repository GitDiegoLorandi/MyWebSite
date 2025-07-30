'use client';

import { useState } from 'react';
import { Play, ExternalLink, Clock, Youtube, Maximize2 } from 'lucide-react';

interface VideoEmbedProps {
  url: string;
  title?: string;
  description?: string;
  duration?: string;
  className?: string;
  autoplay?: boolean;
  showInfo?: boolean;
  videoType?: 'demo' | 'explanation' | 'tutorial' | 'walkthrough' | 'overview' | 'technical-deep-dive' | 'code-walkthrough';
}

export function VideoEmbed({ 
  url, 
  title, 
  description,
  duration,
  className = '',
  autoplay = false,
  showInfo = true,
  videoType = 'demo'
}: VideoEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(autoplay);
  const [thumbnailError, setThumbnailError] = useState(false);

  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeId(url);

  if (!videoId) {
    return (
      <div className={`aspect-video bg-muted rounded-lg flex items-center justify-center ${className}`}>
        <div className="text-center">
          <ExternalLink className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">Invalid video URL</p>
        </div>
      </div>
    );
  }

  // Try multiple thumbnail qualities
  const getThumbnailUrl = () => {
    if (thumbnailError) {
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&color=white&iv_load_policy=3`;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;

  const getTypeIcon = () => {
    switch (videoType) {
      case 'explanation': return '🎓';
      case 'tutorial': return '📚';
      case 'walkthrough': 
      case 'code-walkthrough': return '🚶';
      case 'overview': return '📋';
      case 'technical-deep-dive': return '🔧';
      case 'demo': default: return '🎬';
    }
  };

  const getTypeLabel = () => {
    switch (videoType) {
      case 'explanation': return 'Project Explanation';
      case 'tutorial': return 'Tutorial';
      case 'walkthrough': return 'Code Walkthrough';
      case 'code-walkthrough': return 'Code Walkthrough';
      case 'overview': return 'Project Overview';
      case 'technical-deep-dive': return 'Technical Deep Dive';
      case 'demo': default: return 'Demo';
    }
  };

  if (!isLoaded) {
    return (
      <div className={`group ${className}`}>
        {/* Video Thumbnail Container */}
        <div className="aspect-video bg-muted rounded-lg overflow-hidden relative cursor-pointer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getThumbnailUrl()}
            alt={title || 'Video thumbnail'}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
            loading="lazy"
            onError={() => setThumbnailError(true)}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 group-hover:from-black/70 transition-all" />
          
          {/* Video type badge */}
          {showInfo && (
            <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
              <span>{getTypeIcon()}</span>
              <span>{getTypeLabel()}</span>
            </div>
          )}
          
          {/* Duration badge */}
          {duration && (
            <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{duration}</span>
            </div>
          )}
          
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setIsLoaded(true)}
              className="bg-red-600 hover:bg-red-700 text-white rounded-full p-4 transition-all transform group-hover:scale-110 shadow-2xl"
              aria-label="Play video"
            >
              <Play className="h-8 w-8 ml-1" fill="currentColor" />
            </button>
          </div>

          {/* Video title and description overlay */}
          {showInfo && (title || description) && (
            <div className="absolute bottom-0 left-0 right-0 p-4">
              {title && (
                <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2">
                  {title}
                </h3>
              )}
              {description && (
                <p className="text-white/90 text-xs line-clamp-2">
                  {description}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Video Actions */}
        {showInfo && (
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Youtube className="h-4 w-4 text-red-600" />
              <span>Watch on YouTube</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                <Maximize2 className="h-3 w-3" />
                Open in YouTube
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
        <iframe
          src={embedUrl}
          title={title || 'YouTube video'}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      
      {/* Video info below iframe */}
      {showInfo && (title || description) && (
        <div className="mt-3 p-3 bg-muted/50 rounded-lg">
          {title && (
            <h3 className="font-semibold text-sm mb-1">{title}</h3>
          )}
          {description && (
            <p className="text-muted-foreground text-xs">{description}</p>
          )}
          <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              {getTypeIcon()} {getTypeLabel()}
            </span>
            {duration && (
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {duration}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 