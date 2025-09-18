"use client";

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { ImSpinner9 } from "react-icons/im";

const LoadingIndicator = () => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link && link.href && !link.href.startsWith('mailto:') && !link.href.startsWith('tel:')) {
        const url = new URL(link.href);
        const currentUrl = new URL(window.location.href);
        
        if (url.origin === currentUrl.origin && url.pathname !== currentUrl.pathname) {
          setLoading(true);
          timeoutRef.current = setTimeout(() => {
            setLoading(false);
          }, 2000);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      document.removeEventListener('click', handleLinkClick);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      setLoading(false);
    }, 350);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
      {/* Progress bar */}
      <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600 animate-pulse relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
      </div>
      
      {/* Loading overlay */}
      <div className="fixed inset-0 bg-black/5 backdrop-blur-sm z-40 flex items-center justify-center">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl px-6 py-4 shadow-lg border border-orange-200/50 flex items-center gap-3">
          {/* Spinner */}
          <ImSpinner9 className="w-5 h-5 text-orange-500 animate-spin" />
          <span className="text-gray-700 font-body font-medium">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingIndicator;