'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiChevronRight, FiAward, FiChevronDown } from 'react-icons/fi';
import experienceData from '@/data/experience.json';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [expandedAchievements, setExpandedAchievements] = useState<number[]>([]);

  useEffect(() => {
    // Set initial dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getCardTransform = () => {
    // Disable 3D effect on mobile
    if (dimensions.width < 768) return '';
    if (dimensions.width === 0 || dimensions.height === 0) return '';
    return `perspective(1000px) rotateX(${(mousePosition.y - dimensions.height / 2) * 0.01}deg) rotateY(${(mousePosition.x - dimensions.width / 2) * 0.01}deg)`;
  };

  const toggleAchievements = (index: number) => {
    setExpandedAchievements(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="experience" className="min-h-screen w-full py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse" />
              <motion.div
                className="relative w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <FiAward className="w-10 h-10 text-white" />
              </motion.div>
            </div>
          </motion.div>

          <motion.h2
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Professional Journey
          </motion.h2>
          <motion.p
            className="text-white/60 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A showcase of my professional growth, achievements, and impact
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 to-blue-500/50 hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {experienceData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 ${activeIndex === index ? 'scale-150 ring-4 ring-purple-500/30' : ''} hidden md:block`} />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} px-4 md:px-0`}>
                  <motion.div
                    className="relative group cursor-pointer"
                    onClick={() => setActiveIndex(index)}
                    whileHover={{ scale: dimensions.width >= 768 ? 1.02 : 1 }}
                    style={{
                      transform: getCardTransform(),
                      transition: 'transform 0.1s ease-out'
                    }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-50'}`} />
                    <div className={`relative bg-white/5 backdrop-blur-xl rounded-2xl p-4 md:p-8 border transition-all duration-300 ${activeIndex === index ? 'border-white/30' : 'border-white/10 hover:border-white/20'}`}>
                      <div className="mb-4 md:mb-6">
                        <motion.h3
                          className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-2"
                        >
                          {exp.title}
                        </motion.h3>
                        <div className="flex flex-wrap items-center gap-2 md:gap-4 text-white/60 mb-3 md:mb-4">
                          <div className="flex items-center gap-1 md:gap-2">
                            <FiBriefcase className="w-3 h-3 md:w-4 md:h-4" />
                            <span className="text-sm md:text-base">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1 md:gap-2">
                            <FiCalendar className="w-3 h-3 md:w-4 md:h-4" />
                            <span className="text-sm md:text-base">{exp.period}</span>
                          </div>
                        </div>
                        <p className="text-white/80 text-base md:text-lg">
                          {exp.description}
                        </p>
                      </div>

                      <div className="space-y-3 md:space-y-4">
                        <div>
                          <h4 className="text-white/90 font-semibold mb-2 text-sm md:text-base">Technologies</h4>
                          <div className="flex flex-wrap gap-1.5 md:gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 md:px-3 py-0.5 md:py-1 text-xs md:text-sm bg-white/10 text-white/80 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-white/90 font-semibold text-sm md:text-base">Key Achievements</h4>
                            <motion.button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleAchievements(index);
                              }}
                              className="relative w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 flex items-center justify-center group"
                              whileHover={{ scale: dimensions.width >= 768 ? 1.1 : 1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <motion.div
                                animate={{
                                  rotate: expandedAchievements.includes(index) ? 180 : 0
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="text-white/80 group-hover:text-white"
                              >
                                <FiChevronDown className="w-5 h-5" />
                              </motion.div>
                              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.button>
                          </div>
                          <motion.div
                            initial={false}
                            animate={{
                              height: expandedAchievements.includes(index) ? 'auto' : 0,
                              opacity: expandedAchievements.includes(index) ? 1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, achievementIndex) => (
                                <li
                                  key={achievementIndex}
                                  className="flex items-start gap-2 text-white/70"
                                >
                                  <FiChevronRight className="w-4 h-4 mt-1 text-purple-400" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
