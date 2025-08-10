'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaUserGraduate, FaCode, FaLightbulb } from 'react-icons/fa';
import { achievements } from '@/data/resume';
 import Image from 'next/image';
 import { useState, useEffect } from 'react';

export default function About() {
  const aboutMePhotos = [
    '/projects/About_Me/un.jpg',
    '/projects/About_Me/un week 2.0.jpg',
    '/projects/About_Me/UN WOMEN.png',
    '/projects/About_Me/UN WOMEN AI.png',
    '/projects/About_Me/HUAWEI ICT COMPETITION National Final CAMBODIA.jpg',
    '/projects/About_Me/HUB_9.png',
    '/projects/About_Me/MISTI.png',
    '/projects/About_Me/mis.png',
    '/projects/About_Me/E_day.png',
    '/projects/About_Me/eday.png',
    '/projects/About_Me/Teacher_asst.png',
  ];

  const [currentPhoto, setCurrentPhoto] = useState(0);

  // Auto-advance every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % aboutMePhotos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [aboutMePhotos.length]);

  const goPrev = () => setCurrentPhoto((prev) => (prev - 1 + aboutMePhotos.length) % aboutMePhotos.length);
  const goNext = () => setCurrentPhoto((prev) => (prev + 1) % aboutMePhotos.length);

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* SEO-optimized header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="mt-4 text-xl leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passionate Data Science and Engineering student with a focus on AI innovation and web development
          </p>
          {/* Photo Carousel - directly under description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12 flex flex-col items-center"
          >
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-lg overflow-hidden shadow-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <button
                onClick={goPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 dark:bg-gray-900/70 rounded-full p-2 hover:bg-blue-500 hover:text-white transition-colors"
                aria-label="Previous photo"
              >
                &#8592;
              </button>
              <Image
                src={aboutMePhotos[currentPhoto]}
                alt={`About Me Photo ${currentPhoto + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <button
                onClick={goNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 dark:bg-gray-900/70 rounded-full p-2 hover:bg-blue-500 hover:text-white transition-colors"
                aria-label="Next photo"
              >
                &#8594;
              </button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                {aboutMePhotos.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-2 h-2 rounded-full ${idx === currentPhoto ? 'bg-blue-500' : 'bg-gray-400 dark:bg-gray-700'} inline-block`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Key points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaUserGraduate className="text-4xl text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Education</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">Data Science and Engineering at RUPP</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaCode className="text-4xl text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Development</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">Full-stack Development & AI Solutions</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaLightbulb className="text-4xl text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Innovation</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">AI/ML Research & Implementation</p>
          </div>
        </motion.div>

        {/* Achievements section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Achievements & Recognition
          </h2>
          
          <div className="grid grid-cols-1 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6 flex flex-col md:flex-row gap-8 items-center">
                  {achievement.image && (
                    <div className="w-full md:w-1/2 flex justify-center">
                      <div className="relative inline-block">
                        <Image
                          src={achievement.image}
                          alt={achievement.title}
                          width={500}
                          height={300}
                          className="rounded-lg shadow-md"
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <FaTrophy className="text-2xl text-yellow-500" />
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {achievement.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {achievement.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                        {achievement.date}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SEO metadata */}
        <div className="hidden">
          <h2>Data Science Student Portfolio</h2>
          <h3>AI and Machine Learning Achievements</h3>
          <h3>Software Development Experience</h3>
          <p>Portfolio of a Data Science and Engineering student specializing in AI, Machine Learning, and Web Development</p>
        </div>
      </div>
    </section>
  );
}
