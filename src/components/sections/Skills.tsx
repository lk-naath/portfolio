'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SkillsSphere from '../3d/SkillsSphere';

const Skills = () => {
  // Example skills - replace with your actual skills
  const skills = [
    { name: 'React', level: 5 },
    { name: 'Next.js', level: 5 },
    { name: 'TypeScript', level: 4 },
    { name: 'Node.js', level: 4 },
    { name: 'Python', level: 4 },
    { name: 'SQL', level: 4 },
    { name: 'AWS', level: 3 },
    { name: 'Docker', level: 3 },
  ];

  return (
    <section id="skills" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Skills</h2>
          <p className="text-accent-light">
            Interactive 3D visualization of my technical skills
          </p>
        </motion.div>
        
        <div className="relative">
          <SkillsSphere skills={skills} />
        </div>
      </div>
    </section>
  );
};

export default Skills; 