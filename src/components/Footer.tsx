'use client';

import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
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
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Phork Norak
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Web Developer, Data Scientist & AI Engineer
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                <li
                  key={item}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
                >
                  <a href={`/#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xl transition-colors ${link.color}`}
                  title={link.name}
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Phork Norak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
