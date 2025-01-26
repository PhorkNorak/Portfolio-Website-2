import { projects } from '@/data/projects';
import ProjectPageContent from '@/components/ProjectPageContent';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage() {
  return <ProjectPageContent />;
}
