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
  return <Skills skills={skillsData.skills as Skill[]} categories={skillsData.categories} range={skillsData.range} />;
};

export default SkillsSection;
