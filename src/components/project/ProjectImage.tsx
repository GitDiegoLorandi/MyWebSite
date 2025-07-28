'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ImageIcon } from 'lucide-react';

interface ProjectImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
}

export function ProjectImage({ 
  src, 
  alt, 
  caption, 
  className = '', 
  priority = false 
}: ProjectImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (imageError || !src) {
    return (
      <div className={`aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center ${className}`}>
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
            <ImageIcon className="h-8 w-8 text-primary" />
          </div>
          <p className="text-muted-foreground text-sm">
            {caption || alt || 'Project Image Coming Soon'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <div className="aspect-video relative rounded-lg overflow-hidden bg-muted">
        {isLoading && (
          <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
            <ImageIcon className="h-8 w-8 text-muted-foreground" />
          </div>
        )}
        
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-opacity duration-300"
          style={{ opacity: isLoading ? 0 : 1 }}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setImageError(true);
            setIsLoading(false);
          }}
        />
      </div>
      
      {caption && !imageError && (
        <p className="text-sm text-muted-foreground mt-2 text-center">
          {caption}
        </p>
      )}
    </div>
  );
} 