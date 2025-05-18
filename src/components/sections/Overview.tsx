'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiCode, FiUsers, FiLayers, FiClock } from 'react-icons/fi';
import overviewData from '@/data/overview.json';

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface StatCard {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const Overview = () => {
  const socialLinks: SocialLink[] = [
    {
      icon: <FiGithub className="w-6 h-6" />,
      href: overviewData.contact.github,
      label: 'GitHub',
    },
    {
      icon: <FiLinkedin className="w-6 h-6" />,
      href: overviewData.contact.linkedin,
      label: 'LinkedIn',
    },
    // {
    //   icon: <FiTwitter className="w-6 h-6" />,
    //   href: overviewData.contact.twitter,
    //   label: 'Twitter',
    // },
    {
      icon: <FiMail className="w-6 h-6" />,
      href: `mailto:${overviewData.contact.email}`,
      label: 'Email',
    },
  ];

  const stats: StatCard[] = [
    {
      icon: <FiClock className="w-6 h-6" />,
      value: overviewData.stats.yearsOfExperience,
      label: 'Years Experience',
    },
    {
      icon: <FiCode className="w-6 h-6" />,
      value: overviewData.stats.projectsCompleted,
      label: 'Projects Completed',
    },
    {
      icon: <FiLayers className="w-6 h-6" />,
      value: overviewData.stats.technologies,
      label: 'Technologies',
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      value: overviewData.stats.teamMembersLed,
      label: 'Team Members Led',
    },
  ];

  return (
    <section id="overview" className="min-h-screen w-full py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="text-center mb-16">
          {/* Profile Image/Initials */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-50" />
              <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">{overviewData.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
          >
            {overviewData.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl text-white/80 mb-8"
          >
            {overviewData.title}
          </motion.h2>

          {/* Overview and Key Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <p className="text-lg text-white/60 mb-8">
              {overviewData.summary.overview}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {overviewData.summary.keyStrengths.map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <span className="text-white/80">{strength}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-purple-400 mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 text-white/80 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
                <span>{link.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href={overviewData.quickLinks.resume}
              download
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="w-5 h-5" />
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Overview;
