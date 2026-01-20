'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaHandsHelping } from 'react-icons/fa';
import { experience, volunteerExperience } from '@/data/resume';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal';

export default function Experience() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white">
            Experience
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            My professional journey and volunteer work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center gap-4 mb-8">
              <FaBriefcase className="text-3xl text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Work Experience</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-lg border border-gray-200 dark:border-gray-700 p-4"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <FaBriefcase className="text-xl text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {exp.title}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {exp.company}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {exp.period} • {exp.type}
                        </p>
                        <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {exp.image && (
                      <div 
                        className="relative w-48 h-32 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => setSelectedImage({ src: exp.image!, alt: exp.title })}
                      >
                        <Image
                          src={exp.image}
                          alt={exp.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 192px"
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Volunteer Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center gap-4 mb-8">
              <FaHandsHelping className="text-3xl text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Volunteer Experience</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {volunteerExperience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-lg border border-gray-200 dark:border-gray-700 p-4"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <FaHandsHelping className="text-xl text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {exp.title}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {exp.organization}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {exp.period}
                        </p>
                        <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {exp.image && (
                      <div 
                        className="relative w-48 h-32 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => setSelectedImage({ src: exp.image!, alt: exp.title })}
                      >
                        <Image
                          src={exp.image}
                          alt={exp.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 192px"
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
