import { projects } from '@/data/projects';
import { Metadata } from 'next';

type LayoutProps = {
  children: React.ReactNode;
  params: { id: string };
};

type GenerateMetadataProps = {
  params: { id: string };
};

export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  const projectId = params.id;
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The project you are looking for does not exist.',
    };
  }


  return {
    title: `${project.title} | Phork Norak Portfolio`,
    description: project.description,
    metadataBase: new URL('https://phork-norak-portfolio.vercel.app'),
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
      images: [project.image],
    },
  };
}

export default function ProjectLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
