import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedCircleProps {
  size: number;
  delay?: number;
  duration?: number;
  opacity?: number;
  blur?: number;
  className?: string;
}

const AnimatedCircle: React.FC<AnimatedCircleProps> = ({
  size,
  delay = 0,
  duration = 20,
  opacity = 0.1,
  blur = 20,
  className = ''
}) => {
  return (
    <motion.div
      className={`absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        opacity,
        filter: `blur(${blur}px)`,
      }}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
        x: [0, 20, 0],
        y: [0, -20, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
    </motion.div>
  );
};

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className = '' }) => {
  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden pointer-events-none ${className}`}>
      {/* Large background circles */}
      <AnimatedCircle size={600} delay={0} duration={30} opacity={0.05} blur={40} className="top-1/4 -left-48" />
      <AnimatedCircle size={800} delay={5} duration={35} opacity={0.05} blur={50} className="bottom-1/4 -right-48" />

      {/* Medium circles */}
      <AnimatedCircle size={400} delay={2} duration={25} opacity={0.07} blur={30} className="top-1/3 right-1/4" />
      <AnimatedCircle size={300} delay={7} duration={28} opacity={0.07} blur={25} className="bottom-1/3 left-1/4" />

      {/* Small circles */}
      <AnimatedCircle size={200} delay={1} duration={20} opacity={0.1} blur={20} className="top-1/2 left-1/3" />
      <AnimatedCircle size={150} delay={3} duration={22} opacity={0.1} blur={15} className="bottom-1/2 right-1/3" />

      {/* Tiny circles */}
      <AnimatedCircle size={100} delay={4} duration={15} opacity={0.15} blur={10} className="top-1/4 right-1/3" />
      <AnimatedCircle size={80} delay={6} duration={18} opacity={0.15} blur={8} className="bottom-1/4 left-1/3" />
    </div>
  );
};

export default AnimatedBackground;
