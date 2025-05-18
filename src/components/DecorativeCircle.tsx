import React from 'react';
import { motion } from 'framer-motion';

interface DecorativeCircleProps {
  size?: number;
  delay?: number;
  className?: string;
}

const DecorativeCircle: React.FC<DecorativeCircleProps> = ({
  size = 32,
  delay = 0,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center"
          style={{ width: size * 0.5, height: size * 0.5 }}
        >
          <div
            className="rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30"
            style={{ width: size * 0.25, height: size * 0.25 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default DecorativeCircle;
