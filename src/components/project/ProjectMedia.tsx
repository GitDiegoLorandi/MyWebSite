import { ProjectMedia as ProjectMediaType } from '../../types/project';
import { ProjectImage } from './ProjectImage';
import { VideoEmbed } from './VideoEmbed';

interface ProjectMediaProps {
  media: ProjectMediaType;
  className?: string;
  priority?: boolean;
}

export function ProjectMedia({ media, className = '', priority = false }: ProjectMediaProps) {
  switch (media.type) {
    case 'youtube':
      return (
        <VideoEmbed
          url={media.url}
          title={media.caption || media.alt}
          className={className}
        />
      );
    
    case 'image':
      return (
        <ProjectImage
          src={media.url}
          alt={media.alt || 'Project image'}
          caption={media.caption}
          className={className}
          priority={priority}
        />
      );
    
    case 'video':
      return (
        <div className={`aspect-video rounded-lg overflow-hidden ${className}`}>
          <video
            src={media.url}
            className="w-full h-full object-cover"
            controls
            preload="metadata"
          >
            <p className="text-muted-foreground text-center p-8">
              Your browser does not support the video tag.
            </p>
          </video>
          {media.caption && (
            <p className="text-sm text-muted-foreground mt-2 text-center">
              {media.caption}
            </p>
          )}
        </div>
      );
    
    default:
      return (
        <div className={`aspect-video bg-muted rounded-lg flex items-center justify-center ${className}`}>
          <p className="text-muted-foreground">Unsupported media type</p>
        </div>
      );
  }
} 