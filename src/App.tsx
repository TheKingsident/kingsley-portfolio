import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import useCursorEffect from "./hooks/useCursorEffect";
import useSidebar from "./hooks/useSidebar";
import useScrollbarVisibility from "./hooks/useScrollbarVisibility";
import renderSection from "./utils/renderSection";
import ItemDetailsPopUp from "./components/ItemDetailsPopUp";
import { PortfolioItem } from "./data/portfolioItemCardData";

const App = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [activeSection, setActiveSection] = useState("home");
  const { showScrollbar, handleShowScrollbar } = useScrollbarVisibility();
  const {
    isSidebarOpen,
    toggleSidebar,
    closeSidebar,
  } = useSidebar();

  useCursorEffect();

  useEffect(() => {
    document.body.style.overflow = selectedItem ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedItem]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="custom-cursor"></div>

      <div className="relative">
        {selectedItem && (
          <ItemDetailsPopUp item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </div>

      <button
        className="xl:hidden fixed top-4 left-4 z-50 p-2 bg-amber-50 text-orange-400 rounded-md"
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left Circle */}
        <div className="absolute top-20 left-32 w-32 h-32 bg-pink-400/30 rounded-full animate-float"></div>
        {/* Bottom Left Triangle */}
        <div className="absolute bottom-5 -left-5 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[60px] border-t-yellow-400/30 blur"
        ></div>
      </div>

      <div className="flex w-full max-w-[1500px] lg:h-[80vh] border-2 border-white xl:rounded-3xl bg-white/30 backdrop-blur-sm overflow-hidden mx-auto">
        <div
          className={`fixed top-0 left-0 h-full xl:w-[300px] transform transition-transform duration-300 ease-in-out z-40 ${
            isSidebarOpen ? "translate-x-0"  : "-translate-x-full"
          } xl:translate-x-0 xl:static xl:shadow-none`}
        >
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>

        {isSidebarOpen && (
          <div
            className="xl:hidden fixed inset-0 backdrop-blur-sm z-30"
            onClick={closeSidebar}
          />
        )}

        <main
          className={`flex-1 overflow-y-auto hide-scrollbar transition-transform duration-300 ease-in-out z-20 ${
            showScrollbar ? "show-scrollbar" : "hide-scrollbar"
          } ${
            isSidebarOpen ? "translate-x-80 blur-sm" : "translate-x-0"
          } xl:blur-none xl:translate-x-0`}
          onMouseEnter={handleShowScrollbar}
          onScroll={handleShowScrollbar}
          onClick={isSidebarOpen ? closeSidebar : undefined}
        >
          <div className="animate-fade-in">
          {renderSection({ activeSection, onItemClick: setSelectedItem })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
