import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import useSidebar from "./hooks/useSidebar";
import useScrollbarVisibility from "./hooks/useScrollbarVisibility";
import SidebarToggleButton from "./components/SidebarToggleButton";
import ItemDetailsPopUp from "./components/ItemDetailsPopUp";
import renderSection from "./utils/renderSection";
import { PortfolioItem } from "./data/portfolioItemCardData";
import useCursorEffect from "./hooks/useCursorEffect";

const App = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [activeSection, setActiveSection] = useState("home");
  const { showScrollbar, handleShowScrollbar } = useScrollbarVisibility();

  useEffect(() => {
    document.body.style.overflow = selectedItem ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedItem]);

  const {
    isSidebarOpen,
    toggleSidebar,
    closeSidebar,
  } = useSidebar();
  useCursorEffect();

  return (
    <div className="w-full min-h-screen max-h-screen bg-gradient-to-br from-red-50 via-[#f0f4ff] to-[#fef9ff] text-gray-900 xl:flex relative border border-white rounded-3xl xl:max-w-[1500px] xl:max-h-[80vh] xl:min-h-[80vh] my-[7vh] xl:my-[10vh] mx-auto">
      <div className="custom-cursor hidden lg:block"></div>
      {/* Pop-up modal */}
      {selectedItem && (
        <ItemDetailsPopUp item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
      {/* Background Animation */}
       <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top -left-10 w-32 h-32 bg-transparent xl:bg-pink-400/30 rounded-full animate-float"></div>
        <div className="absolute bottom-20 -right-10 w-32 h-32 bg-transparent xl:bg-blue-400/30 rounded-full animate-float"></div>
      </div>

      {/* === Sidebar Header === */}
      <header
        className={`
          fixed xl:static top-0 left-0 z-40 h-[100vh] min-h-[100vh] xl:h-[80vh] xl:min-h-[80vh]
          transform transition-transform duration-300 ease-in-out lg:rounded-l-3xl
          w-[320px] xl:w-[300px] xl:translate-x-0 
          bg-white/30 backdrop-blur-md
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
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
          ${showScrollbar ? "show-scrollbar" : "hide-scrollbar"}
          overflow-hidden backdrop-blur-xl mx-auto
          ${isSidebarOpen ? "blur-sm xl:blur-none translate-x-80" : "blur-none translate-x-0"} xl:translate-x-0
        `}
        onMouseEnter={handleShowScrollbar}
        onScroll={handleShowScrollbar}
        onClick={isSidebarOpen ? closeSidebar : undefined}
      >

        <section className="flex-1 overflow-y-auto p-6 xl:p-8 z-20">
          {renderSection({
            activeSection,
            onItemClick: setSelectedItem,
            setActiveSection,
          })}
        </section>
      </main>
    </div>
  );
};

export default App;
