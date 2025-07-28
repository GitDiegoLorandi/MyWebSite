'use client';

import { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';

interface VideoEmbedProps {
  url: string;
  title?: string;
  className?: string;
}

export function VideoEmbed({ url, title, className = '' }: VideoEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

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

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

  if (!isLoaded) {
    return (
      <div className={`aspect-video bg-muted rounded-lg overflow-hidden relative group cursor-pointer ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumbnailUrl}
          alt={title || 'Video thumbnail'}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Play button overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
          <button
            onClick={() => setIsLoaded(true)}
            className="bg-red-600 hover:bg-red-700 text-white rounded-full p-4 transition-all transform group-hover:scale-110"
            aria-label="Play video"
          >
            <Play className="h-8 w-8 ml-1" fill="currentColor" />
          </button>
        </div>

        {/* Video title */}
        {title && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <p className="text-white text-sm font-medium">{title}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`aspect-video rounded-lg overflow-hidden ${className}`}>
      <iframe
        src={embedUrl}
        title={title || 'YouTube video'}
        className="w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
} 