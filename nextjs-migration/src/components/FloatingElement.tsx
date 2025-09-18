"use client";

import { motion } from "framer-motion";

interface FloatingElementProps {
  className?: string;
  delay?: number;
  children?: React.ReactNode;
}

const FloatingElement = ({ className = "", delay = 0, children }: FloatingElementProps) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;