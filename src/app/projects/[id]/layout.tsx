import { projects } from "@/data/projects";
import { Metadata } from "next";

type ProjectLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: ProjectLayoutProps): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  if (!resolvedParams || !resolvedParams.id) {
    return {
      title: 'Project Not Found',
      description: 'The project you are looking for does not exist.',
    };
  }
  
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The project you are looking for does not exist.",
    };
  }

  return {
    title: `${project.title} | Phork Norak Portfolio`,
    description: project.description,
    metadataBase: new URL("https://phork-norak-portfolio.vercel.app"),
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      images: [project.image],
    },
  };
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
