'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Overview = () => {
  return (
    <section id="overview" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6">
            Your Name
          </h1>
          <h2 className="text-2xl text-accent mb-8">
            Full Stack Developer
          </h2>
          <p className="text-lg text-accent-light max-w-2xl mx-auto">
            A passionate developer with expertise in building modern web applications.
            Specializing in React, Next.js, and full-stack development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Overview; 