import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ children, width = "fit-content", delay = 0, direction = 'up', className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-75px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const getVariants = (): Variants => {
    const distance = 50;
    let hidden = { opacity: 0, x: 0, y: 0 };

    switch (direction) {
      case 'up': hidden = { opacity: 0, y: distance, x: 0 }; break;
      case 'down': hidden = { opacity: 0, y: -distance, x: 0 }; break;
      case 'left': hidden = { opacity: 0, x: distance, y: 0 }; break;
      case 'right': hidden = { opacity: 0, x: -distance, y: 0 }; break;
    }

    return {
      hidden,
      visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75], delay } }
    };
  };

  return (
    <div ref={ref} style={{ width }} className={`relative overflow-hidden ${className}`}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
};