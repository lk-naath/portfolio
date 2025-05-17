'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience = () => {
  // Example experiences - replace with your actual experiences
  const experiences: Experience[] = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      location: 'San Francisco, CA',
      period: '2021 - Present',
      description: [
        'Led development of multiple web applications using React and Node.js',
        'Implemented CI/CD pipelines and improved deployment processes',
        'Mentored junior developers and conducted code reviews',
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup Inc',
      location: 'New York, NY',
      period: '2019 - 2021',
      description: [
        'Developed and maintained multiple client projects',
        'Worked with various technologies including React, Node.js, and Python',
        'Collaborated with design team to implement responsive UIs',
      ],
      technologies: ['React', 'Node.js', 'Python', 'MongoDB', 'GraphQL'],
    },
  ];

  return (
    <section id="experience" className="min-h-screen w-full py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 blur-3xl" />
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A journey through my professional career, showcasing my growth and achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-4 text-white/60">
                      <div className="flex items-center gap-2">
                        <FiBriefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiMapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiCalendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-white/80"
                    >
                      <span className="text-accent mt-1">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm hover:bg-white/20 transition-colors duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
