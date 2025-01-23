'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export default function Hero() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/phork-norak-410592282/',
      icon: FaLinkedin,
      color: 'hover:text-blue-500'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/PhorkNorak',
      icon: FaGithub,
      color: 'hover:text-gray-500'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/phorknorak',
      icon: FaTelegram,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      url: 'mailto:phorknorak2020@gmail.com',
      icon: FaEnvelope,
      color: 'hover:text-red-500'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Card className="w-full mx-4 md:mx-auto max-w-7xl h-[calc(100vh-8rem)] bg-white/80 dark:bg-black relative overflow-hidden backdrop-blur-sm">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20 bg-white dark:bg-gray-900"
        />
        
        <div className="flex h-full flex-col md:flex-row">
          {/* Left content */}
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                  PHORK NORAK
                </span>
              </h1>

              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300"
              >
                <TypeAnimation
                  sequence={[
                    'Web Developer',
                    2000,
                    'Data Scientist',
                    2000,
                    'AI Engineer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="max-w-2xl text-lg text-gray-600 dark:text-gray-300"
              >
                Enthusiastic software developer using AI tools to enhance project capabilities and 
                boost productivity. Experienced in creating user-friendly and scalable applications 
                with modern technologies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex gap-6 pt-4"
              >
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2xl transition-all duration-300 text-gray-700 dark:text-gray-300 ${link.color}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={link.name}
                  >
                    <link.icon />
                  </motion.a>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex gap-4 pt-6"
              >
                <Link href="#contact">
                  <motion.button
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get in Touch
                  </motion.button>
                </Link>
                <Link href="#projects">
                  <motion.button
                    className="px-8 py-3 bg-transparent border-2 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Projects →
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right content */}
          <div className="flex-1 relative hidden md:block">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </section>
  );
}
