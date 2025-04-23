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

      <div className="flex w-full max-w-[1500px] lg:h-[80vh] border xl:rounded-3xl border-amber-50 overflow-hidden mx-auto">
        <div
          className={`fixed top-0 left-0 h-full xl:w-[300px] bg-white/10 backdrop-blur-md shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } xl:translate-x-0 xl:static xl:shadow-none`}
        >
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>

        {isSidebarOpen && (
          <div
            className="xl:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
            onClick={closeSidebar}
          />
        )}

        <main
          className={`flex-1 overflow-y-auto hide-scrollbar transition-transform duration-300 ease-in-out z-20 ${
            showScrollbar ? "show-scrollbar" : "hide-scrollbar"
          } ${
            isSidebarOpen ? "translate-x-64 blur-sm" : "translate-x-0"
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
