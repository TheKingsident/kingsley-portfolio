"use client";

import FloatingElement from "@/components/FloatingElement";

const BackgroundAnimations = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <FloatingElement 
        className="absolute top -left-10 w-32 h-32 bg-transparent xl:bg-pink-400/30 rounded-full"
        delay={0}
      />
      <FloatingElement 
        className="absolute bottom-20 -right-10 w-32 h-32 bg-transparent xl:bg-blue-400/30 rounded-full"
        delay={2}
      />
    </div>
  );
};

export default BackgroundAnimations;