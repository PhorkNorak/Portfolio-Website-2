"use client";

import { projects } from '@/data/projects';
import { notFound, useParams } from 'next/navigation';
import { FaCalendar, FaCode, FaTrophy } from 'react-icons/fa';
import Image from 'next/image';
import ResearchPaperModal from '@/components/ResearchPaperModal';

export default function ProjectPageContent() {
  const params = useParams();
  if (!params || !params.id) {
    notFound();
    return;
  }
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-8">
          {/* Project Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
          </div>

          {/* Project Media */}
          <div className="relative w-full rounded-lg overflow-hidden">
            {project.demoVideo ? (
              <div className="relative w-full aspect-video">
                <iframe
                  src={project.demoVideo}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : project.image && (
              <div className="relative w-full h-[400px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2 space-y-8">
              {/* Overview */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Overview
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.details.overview}
                </p>
              </section>

              {/* Features */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Key Features
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                  {project.details.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </section>

              {/* Technical Details */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Technical Implementation
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                  {project.details.technicalDetails.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </section>

              {/* Achievements */}
              {project.details.achievements && (
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <FaTrophy className="text-yellow-500" />
                    Achievements
                  </h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                    {project.details.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <section>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <FaCode />
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {/* Timeline */}
              <section>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <FaCalendar />
                  Timeline
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{project.date}</p>
              </section>

              {/* Research Paper */}
              {project.researchPaperImage && (
                <ResearchPaperModal imagePath={project.researchPaperImage} />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
