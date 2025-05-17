'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiDatabase, FiLayers, FiServer, FiTool, FiMonitor } from 'react-icons/fi';

interface Skill {
  name: string;
  years: number;
  category: string;
  icon?: React.ReactNode;
  color?: string;
  description?: string;
}

interface SkillsProps {
  skills: Skill[];
  categories: Record<string, string>;
  range: number;
}

const categoryIcons = {
  frontend: <FiCode className="w-6 h-6" />,
  backend: <FiServer className="w-6 h-6" />,
  database: <FiDatabase className="w-6 h-6" />,
  devops: <FiLayers className="w-6 h-6" />,
  tools: <FiTool className="w-6 h-6" />,
  other: <FiMonitor className="w-6 h-6" />,
};

const SkillCard: React.FC<{ skill: Skill; index: number; range: number }> = ({ skill, index, range }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/10">
              {skill.icon || categoryIcons[skill.category as keyof typeof categoryIcons]}
            </div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              {skill.name}
            </h3>
          </div>
          <span className="text-sm font-medium text-white/60">{skill.years} years</span>
        </div>

        <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(skill.years / range) * 100}%` }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className="absolute inset-y-0 left-0 h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${skill.color || '#8B5CF6'} 0%, ${skill.color || '#3B82F6'} 100%)`,
            }}
          />
        </div>

        <AnimatePresence>
          {isHovered && skill.description && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 text-sm text-white/60"
            >
              {skill.description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Skills: React.FC<SkillsProps> = ({ skills, categories, range }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categoryList = ['all', ...Object.keys(categories)];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section className="min-h-screen w-full py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            A comprehensive showcase of my technical skills and expertise, refined through years of professional experience
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categoryList.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-white text-black'
                  : 'bg-white/5 text-white/60 hover:bg-white/10'
              }`}
            >
              {category === 'all' ? 'All Skills' : categories[category]}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} range={range} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
