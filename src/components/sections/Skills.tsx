'use client';

import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNextdotjs, 
  SiPython, 
  SiTensorflow,
  SiDjango, 
  SiNodedotjs, 
  SiDocker, 
  SiMysql, 
  SiPostgresql,
  SiGithub,
} from 'react-icons/si';
import { TbApi, TbWind } from 'react-icons/tb';

const skills = [
  { name: 'React', icon: SiReact, category: 'Frontend' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'Frontend' },
  { name: 'REST API', icon: TbApi, category: 'Backend' },
  { name: 'Node.js', icon: SiNodedotjs, category: 'Backend' },
  { name: 'Python', icon: SiPython, category: 'Backend & Data Science' },
  { name: 'TensorFlow', icon: SiTensorflow, category: 'AI/ML' },
  { name: 'Django', icon: SiDjango, category: 'Backend' },
  { name: 'Windsurf', icon: TbWind, category: 'IDE' },
  { name: 'Docker', icon: SiDocker, category: 'DevOps' },
  { name: 'GitHub', icon: SiGithub, category: 'Version Control' },
  { name: 'MySQL', icon: SiMysql, category: 'Database' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'Database' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            My technical toolkit and expertise
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="rounded-xl bg-white dark:bg-gray-700 p-6 shadow-lg w-full hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center space-y-4">
                  <skill.icon className="h-12 w-12 text-blue-500" />
                  <div className="text-center">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{skill.name}</h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{skill.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
