"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ 
        opacity: 0, 
        x: "100%",
        visibility: "hidden" 
      }}
      animate={{ 
        opacity: 1, 
        x: 0,
        visibility: "visible"
      }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        duration: 0.3,
        delay: 0.02, // Minimal delay
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;