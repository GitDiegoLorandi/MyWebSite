import { ProjectsGrid } from '../../components/project/ProjectsGrid';
import { projects } from '../../lib/projects';

export default function ProjectsPage() {
  return <ProjectsGrid projects={projects} />;
} 