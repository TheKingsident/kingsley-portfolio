import { useState, useEffect, useRef } from "react";

const useScrollbarVisibility = () => {
  const [showScrollbar, setShowScrollbar] = useState(false);
  const scrollableRef = useRef<HTMLElement>(null);

  const handleShowScrollbar = () => setShowScrollbar(true);

  useEffect(() => {
    if (showScrollbar) {
      const timer = setTimeout(() => setShowScrollbar(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showScrollbar]);

  // Only handle Firefox and IE/Edge scrollbar visibility
  useEffect(() => {
    const element = scrollableRef.current;
    if (element) {
      // For Firefox
      if ('scrollbarWidth' in element.style) {
        element.style.setProperty('scrollbar-width', showScrollbar ? 'thin' : 'none', 'important');
      }
      // For IE/Edge
      if ('msOverflowStyle' in element.style) {
        element.style.setProperty('-ms-overflow-style', showScrollbar ? 'scrollbar' : 'none', 'important');
      }
    }
  }, [showScrollbar]);

  return { showScrollbar, handleShowScrollbar, scrollableRef };
};

export default useScrollbarVisibility;
