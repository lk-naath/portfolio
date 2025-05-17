'use client';

import React from 'react';
import Skills from '../Skills';
import skillsData from '@/data/skills.json';

type SkillCategory = keyof typeof skillsData.categories;

interface Skill {
  name: string;
  years: number;
  category: SkillCategory;
  color: string;
  description: string;
}

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="min-h-screen w-full py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
      <Skills skills={skillsData.skills as Skill[]} categories={skillsData.categories} range={skillsData.range} />
    </section>
  );
};

export default SkillsSection;
