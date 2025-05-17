import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  fullHeight?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = '',
  fullHeight = false,
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`py-20 ${fullHeight ? 'min-h-screen' : ''} ${className}`}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
