import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn } from '@/utils/animations';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

const AnimatedSection = ({
  children,
  className = '',
  direction = 'up',
  delay = 0.2,
}: AnimatedSectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      variants={fadeIn(direction, delay)}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
