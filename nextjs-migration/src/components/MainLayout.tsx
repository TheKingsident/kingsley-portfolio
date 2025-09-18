"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import SidebarToggleButton from "@/components/SidebarToggleButton";
import useCursorEffect from "@/hooks/useCursorEffect";
import { usePathname } from "next/navigation";
import PageTransition from "@/components/PageTransition";
import useSidebar from "@/hooks/useSidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const pathname = usePathname();

  // Determine active section from pathname
  const getActiveSectionFromPath = (path: string) => {
    if (path === "/") return "home";
    if (path.startsWith("/about")) return "about";
    if (path.startsWith("/experience")) return "experience";
    if (path.startsWith("/portfolio")) return "portfolio";
    if (path.startsWith("/contact")) return "contact";
    return "home";
  };

  const activeSection = getActiveSectionFromPath(pathname ?? "");

  useEffect(() => {
    // Ensure body never scrolls
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    
    return () => {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    };
  }, []);

  const {
    isSidebarOpen,
    toggleSidebar,
    closeSidebar,
  } = useSidebar();
  useCursorEffect();

  return (
    <>
      {/* === Sidebar Header === */}
      <header
        className={`
          fixed xl:static top-0 left-0 z-40 h-[100vh] min-h-[100vh] xl:h-[80vh] xl:min-h-[80vh]
          transform transition-transform duration-300 ease-in-out lg:rounded-l-3xl
          w-[320px] xl:w-[300px] xl:translate-x-0 
          bg-white/30 backdrop-blur-sm
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <Sidebar
          activeSection={activeSection}
          closeSidebar={closeSidebar}
        />
      </header>

      {/* === Toggle Button Header (Mobile only) === */}
      <header className={`fixed top-0 block left-0 w-full xl:hidden z-50 bg-white/45 backdrop-blur-md p-3 border-b border-white/40 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-80" : "blur-none translate-x-0"} xl:translate-x-0}`}>
        <SidebarToggleButton onClick={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      </header>

      {/* === Backdrop when sidebar is open on mobile === */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 backdrop-blur-sm bg-black/10 xl:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* === Main Content === */}
      <main
        className={`
          flex flex-1 h-full xl:max-h-[80vh] lg:rounded-r-3xl
           bg-white/30
          transform transition-transform duration-700 ease-in-out
          overflow-hidden backdrop-blur-sm mx-auto
          ${isSidebarOpen ? "blur-sm xl:blur-none translate-x-80" : "blur-none translate-x-0"} xl:translate-x-0
        `}
        onClick={isSidebarOpen ? closeSidebar : undefined}
      >
        <section 
          className="flex-1 overflow-y-auto p-6 xl:p-8 z-20 mb-20 lg:mb-0"
        >
          <PageTransition>
            {children}
          </PageTransition>
        </section>
      </main>
    </>
  );
};

export default MainLayout;