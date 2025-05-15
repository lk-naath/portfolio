'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const Experience = () => {
  // Example experiences - replace with your actual experiences
  const experiences: Experience[] = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      period: '2021 - Present',
      description: [
        'Led development of multiple web applications using React and Node.js',
        'Implemented CI/CD pipelines and improved deployment processes',
        'Mentored junior developers and conducted code reviews',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup Inc',
      period: '2019 - 2021',
      description: [
        'Developed and maintained multiple client projects',
        'Worked with various technologies including React, Node.js, and Python',
        'Collaborated with design team to implement responsive UIs',
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-accent-light">
            My professional journey and achievements
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 relative pl-8 border-l-2 border-accent"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent" />
              <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
              <h4 className="text-accent mb-2">{exp.company}</h4>
              <p className="text-accent-light mb-4">{exp.period}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-accent-light">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 