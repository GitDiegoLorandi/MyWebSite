import { TechStack as TechStackType } from '../../types/project';

interface TechStackProps {
  techStack: TechStackType[];
  className?: string;
}

const getCategoryColor = (category: TechStackType['category']) => {
  switch (category) {
    case 'frontend':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    case 'backend':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case 'database':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
    case 'tools':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    case 'deployment':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  }
};

export function TechStack({ techStack, className = '' }: TechStackProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {/* Group by category */}
      {Object.entries(
        techStack.reduce((acc, tech) => {
          if (!acc[tech.category]) {
            acc[tech.category] = [];
          }
          acc[tech.category].push(tech);
          return acc;
        }, {} as Record<string, TechStackType[]>)
      ).map(([category, techs]) => (
        <div key={category}>
          <h4 className="text-sm font-medium text-muted-foreground mb-2 capitalize">
            {category.replace('-', ' ')}
          </h4>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <span
                key={tech.name}
                className={`px-2 py-1 rounded-md text-xs font-medium ${getCategoryColor(tech.category)}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 