'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaUserGraduate, FaCode, FaLightbulb } from 'react-icons/fa';
import { achievements } from '@/data/resume';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
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
