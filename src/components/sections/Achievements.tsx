'use client';

import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';
import { achievements } from '@/data/resume';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal';
import { useState } from 'react';

export default function Achievements() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="achievements" className="py-4 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl text-gray-900 dark:text-white">
            Achievements & Recognition
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-sm overflow-hidden flex h-full"
            >
              {achievement.image && (
                <div 
                  className="relative w-32 cursor-pointer hover:opacity-90 transition-opacity flex-shrink-0"
                  onClick={() => setSelectedImage({ src: achievement.image!, alt: achievement.title })}
                >
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="p-2 flex-grow">
                <div className="flex items-start gap-1">
                  <FaTrophy className="text-yellow-500 text-base flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-medium text-gray-900 dark:text-white leading-tight">
                      {achievement.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-gray-600 dark:text-gray-300 leading-snug">
                      {achievement.description}
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-blue-600 dark:text-blue-400">
                      {achievement.date}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        src={selectedImage?.src || ''}
        alt={selectedImage?.alt || ''}
      />
    </section>
  );
}
