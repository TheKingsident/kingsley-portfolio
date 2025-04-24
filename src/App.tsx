import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import useCursorEffect from "./hooks/useCursorEffect";
import useSidebar from "./hooks/useSidebar";
import useScrollbarVisibility from "./hooks/useScrollbarVisibility";
import renderSection from "./utils/renderSection";
import ItemDetailsPopUp from "./components/ItemDetailsPopUp";
import { PortfolioItem } from "./data/portfolioItemCardData";
import SidebarToggleButton from "./components/SidebarToggleButton";

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
      <div className="custom-cursor hidden lg:block"></div>

      {/* Portfolio Item Details Modal */}
      <div className="relative">
        {selectedItem && (
          <ItemDetailsPopUp item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </div>

      

      {/* Sidebar toggle Section */}
      <div className="fixed xl:hidden top-0 p-2 left-0 z-50 w-full bg-white/65 backdrop-blur-3xl rounded-t-xl border-2 border-white/50">
        {/* Sidebar Toggle */}
        <SidebarToggleButton onClick={toggleSidebar} />
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left Circle */}
        <div className="absolute top-20 left-32 w-32 h-32 bg-pink-400/30 rounded-full animate-float"></div>
        {/* Bottom Left Triangle */}
        <div className="absolute bottom-5 -left-5 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[60px] border-t-yellow-400/30 blur"
        ></div>
      </div>

      {/* Main Container */}
      {/* This div is the main container for the sidebar and main content */}
      <div className="flex w-full mt-[61px] lg:-mt-[61px] xl:mt-0 max-w-[1500px] lg:h-[80vh] border-2 border-white xl:rounded-3xl bg-white/30 backdrop-blur-sm overflow-hidden mx-auto">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full xl:w-[300px] transform transition-transform duration-300 ease-in-out z-40 ${
            isSidebarOpen ? "translate-x-0"  : "-translate-x-full"
          } xl:translate-x-0 xl:static xl:shadow-none`}
        >
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            closeSidebar={closeSidebar}
          />
        </div>

        {isSidebarOpen && (
          <div
            className="xl:hidden fixed inset-0 backdrop-blur-md z-30"
            onClick={closeSidebar}
          />
        )}

        {/* Main Content */}
        <main
          className={`flex-1 overflow-y-auto hide-scrollbar transition-transform duration-300 ease-in-out z-20 ${
            showScrollbar ? "show-scrollbar" : "hide-scrollbar"
          } ${
            isSidebarOpen ? "translate-x-80 blur-md" : "translate-x-0"
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
