import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  type?: 'fade' | 'scale' | 'slide' | 'bounce';
}

const AnimatedSection = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.5,
  type = 'fade',
}: AnimatedSectionProps) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 50, opacity: 0 };
      case 'down':
        return { y: -50, opacity: 0 };
      case 'left':
        return { x: 50, opacity: 0 };
      case 'right':
        return { x: -50, opacity: 0 };
      default:
        return { y: 50, opacity: 0 };
    }
  };

  const getAnimationType = () => {
    switch (type) {
      case 'scale':
        return {
          initial: { scale: 0.8, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
        };
      case 'slide':
        return {
          initial: getInitialPosition(),
          animate: { x: 0, y: 0, opacity: 1 },
        };
      case 'bounce':
        return {
          initial: getInitialPosition(),
          animate: { x: 0, y: 0, opacity: 1 },
          transition: {
            type: 'spring',
            bounce: 0.4,
            duration,
          },
        };
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
        };
    }
  };

  const animation = getAnimationType();

  return (
    <motion.div
      className={className}
      initial={animation.initial}
      animate={animation.animate}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
        ...animation.transition,
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
