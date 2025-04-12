import { useState, useEffect } from "react";

const useScrollbarVisibility = () => {
  const [showScrollbar, setShowScrollbar] = useState(false);

  const handleShowScrollbar = () => setShowScrollbar(true);

  useEffect(() => {
    if (showScrollbar) {
      const timer = setTimeout(() => setShowScrollbar(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showScrollbar]);

  return { showScrollbar, handleShowScrollbar };
};

export default useScrollbarVisibility;
