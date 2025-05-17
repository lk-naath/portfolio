'use client';

import React from 'react';
import Skills from '../Skills';
import skillsData from '@/data/skills.json';

type SkillCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'other';

interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
  color: string;
  description: string;
}

const SkillsSection: React.FC = () => {
  return <Skills skills={skillsData.skills as Skill[]} />;
};

export default SkillsSection;
