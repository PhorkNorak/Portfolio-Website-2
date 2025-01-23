'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaUniversity, FaSchool, FaAward, FaChartBar, FaBrain } from 'react-icons/fa';
import { education, certifications } from '@/data/resume';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal';

const getEducationIcon = (type: string) => {
  switch (type) {
    case 'Higher Education':
      return FaUniversity;
    default:
      return FaSchool;
  }
};

const getCertificationIcon = (category: string) => {
  switch (category) {
    case 'AI/ML':
      return FaBrain;
    case 'Data Science':
      return FaChartBar;
    case 'Entrepreneurship':
      return FaAward;
    default:
      return FaCertificate;
  }
};

export default function Education() {
  const [activeTab, setActiveTab] = useState<'education' | 'certifications'>('education');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  
  const categories = ['all', ...new Set(certifications.map(cert => cert.category))];

  const filteredCertifications = selectedCategory === 'all'
    ? certifications
    : certifications.filter(cert => cert.category === selectedCategory);

  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h1>
          <p className="mt-4 text-xl leading-8 text-gray-600 dark:text-gray-300">
            My academic journey and professional qualifications
          </p>
        </motion.div>

        {/* Main Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('education')}
            className={`px-6 py-2.5 rounded-full text-base font-medium transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'education'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            <FaGraduationCap />
            Education
          </button>
          <button
            onClick={() => setActiveTab('certifications')}
            className={`px-6 py-2.5 rounded-full text-base font-medium transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'certifications'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            <FaCertificate />
            Certifications
          </button>
        </div>

        {/* Category Filter for Certifications */}
        {activeTab === 'certifications' && (
          <div className="flex justify-center flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        )}

        {/* Education Grid */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {education.map((edu, index) => {
              const Icon = getEducationIcon(edu.type);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-24 flex items-center justify-center">
                    <Icon className="text-4xl text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mt-2">
                      {edu.school}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      {edu.period}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Certifications Grid */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {filteredCertifications.map((cert, index) => {
              const CertIcon = getCertificationIcon(cert.category);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {cert.image ? (
                    <div 
                      className="relative h-32 bg-gray-100 dark:bg-gray-700 cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setSelectedImage({ src: cert.image!, alt: cert.title })}
                    >
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain p-2"
                        priority
                      />
                    </div>
                  ) : (
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-32 flex items-center justify-center">
                      <CertIcon className="text-4xl text-white" />
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CertIcon className="text-lg text-blue-600 dark:text-blue-400" />
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {cert.category}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mt-1 text-sm">
                      {cert.organization}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {cert.date}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
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
