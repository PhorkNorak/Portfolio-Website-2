'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaFileAlt } from 'react-icons/fa';
import ImageModal from './ImageModal';

interface ResearchPaperModalProps {
  imagePath: string;
}

export default function ResearchPaperModal({ imagePath }: ResearchPaperModalProps) {
  const [showResearchPaper, setShowResearchPaper] = useState(false);

  return (
    <>
      <section>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <FaFileAlt />
          Research Paper
        </h3>
        <div 
          className="relative w-full h-40 cursor-pointer hover:opacity-90 transition-opacity rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800"
          onClick={() => setShowResearchPaper(true)}
        >
          <Image
            src={imagePath}
            alt="Research Paper"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </section>

      <ImageModal
        isOpen={showResearchPaper}
        onClose={() => setShowResearchPaper(false)}
        src={imagePath}
        alt="Research Paper"
      />
    </>
  );
}
