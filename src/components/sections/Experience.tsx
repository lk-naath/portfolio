'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiChevronRight, FiAward, FiCode } from 'react-icons/fi';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
}

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

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

  const experiences: Experience[] = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      location: 'San Francisco, CA',
      period: '2021 - Present',
      summary: 'Leading the development of enterprise-scale applications while mentoring junior developers and implementing best practices.',
      responsibilities: [
        'Led development of multiple web applications using React and Node.js',
        'Implemented CI/CD pipelines and improved deployment processes',
        'Mentored junior developers and conducted code reviews',
      ],
      achievements: [
        'Reduced deployment time by 60% through CI/CD optimization',
        'Led a team of 5 developers to deliver 3 major projects',
        'Achieved 99.9% uptime for critical services'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup Inc',
      location: 'New York, NY',
      period: '2019 - 2021',
      summary: 'Developed and maintained multiple client projects while collaborating with cross-functional teams to deliver high-quality solutions.',
      responsibilities: [
        'Developed and maintained multiple client projects',
        'Worked with various technologies including React, Node.js, and Python',
        'Collaborated with design team to implement responsive UIs',
      ],
      achievements: [
        'Increased user engagement by 40% through UI/UX improvements',
        'Optimized database queries resulting in 50% faster load times',
        'Successfully migrated legacy systems to modern architecture'
      ]
    },
  ];

  const getCardTransform = () => {
    if (dimensions.width === 0 || dimensions.height === 0) return '';
    return `perspective(1000px) rotateX(${(mousePosition.y - dimensions.height / 2) * 0.01}deg) rotateY(${(mousePosition.x - dimensions.width / 2) * 0.01}deg)`;
  };

  return (
    <section id="experience" className="min-h-screen w-full py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
      </div>

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
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 to-blue-500/50" />

          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />

                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <motion.div
                    className="relative group cursor-pointer"
                    onClick={() => setActiveIndex(index)}
                    whileHover={{ scale: 1.02 }}
                    style={{
                      transform: getCardTransform(),
                      transition: 'transform 0.1s ease-out'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                      <div className="mb-6">
                        <motion.h3
                          className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-2"
                        >
                          {exp.title}
                        </motion.h3>
                        <div className="flex flex-wrap items-center gap-4 text-white/60 mb-4">
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
                        <p className="text-white/80 text-lg">
                          {exp.summary}
                        </p>
                      </div>

                      <AnimatePresence>
                        {activeIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-white/10">
                              <div>
                                <h4 className="text-lg font-semibold text-white/90 mb-3 flex items-center gap-2">
                                  <FiCode className="w-4 h-4 text-purple-400" />
                                  Key Responsibilities
                                </h4>
                                <ul className="space-y-3">
                                  {exp.responsibilities.map((item, i) => (
                                    <motion.li
                                      key={i}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 0.5, delay: i * 0.1 }}
                                      className="flex items-start gap-3 text-white/80"
                                    >
                                      <span className="text-purple-400 mt-1">•</span>
                                      <span>{item}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="text-lg font-semibold text-white/90 mb-3 flex items-center gap-2">
                                  <FiAward className="w-4 h-4 text-yellow-400" />
                                  Key Achievements
                                </h4>
                                <ul className="space-y-3">
                                  {exp.achievements.map((achievement, i) => (
                                    <motion.li
                                      key={i}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 0.5, delay: i * 0.1 }}
                                      className="flex items-start gap-3 text-white/80"
                                    >
                                      <span className="text-yellow-400 mt-1">★</span>
                                      <span>{achievement}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <motion.div
                        className="absolute bottom-4 right-4 text-white/60"
                        animate={{
                          x: activeIndex === index ? [0, 5, 0] : 0
                        }}
                        transition={{
                          duration: 1,
                          repeat: activeIndex === index ? Infinity : 0
                        }}
                      >
                        <FiChevronRight className="w-6 h-6" />
                      </motion.div>
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
