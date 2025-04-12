import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
//import Experience from "./pages/Experience";
//import Works from "./pages/Works";
//import Blog from "./pages/Blog";
//import Contact from "./pages/Contact";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollbar, setShowScrollbar] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   // Toggle sidebar on small screens
   const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when clicking outside (on the main content)
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Function to show the scrollbar
  const showScrollbarTemporarily = () => {
    setShowScrollbar(true);
  };

  // Use useEffect to hide the scrollbar after 2 seconds
  useEffect(() => {
    if (showScrollbar) {
      const timer = setTimeout(() => {
        setShowScrollbar(false);
      }, 2000); // 2000ms = 2 seconds

      return () => clearTimeout(timer);
    }
  }, [showScrollbar]);

  // Function to render the active section
  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "services":
        return <Services />;
      case "experience":
        return <Experience />;
      case "works":
        return <Works />;
      case "blog":
        return <Blog />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  // Custom cursor effect
  // Mouse movement handler
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.setAttribute(
          "style",
          `top: ${e.clientY}px; left: ${e.clientX}px;`
        );
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Hover effect handler
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    const hoverables = document.querySelectorAll("a, button");

    const onMouseHover = () => {
      cursor?.classList.add("hover");
    };
    const onMouseHoverOut = () => {
      cursor?.classList.remove("hover");
    };

    hoverables.forEach((item) => {
      item.addEventListener("mouseenter", onMouseHover);
      item.addEventListener("mouseleave", onMouseHoverOut);
    });

    return () => {
      hoverables.forEach((item) => {
        item.removeEventListener("mouseenter", onMouseHover);
        item.removeEventListener("mouseleave", onMouseHoverOut);
      });
    };
  }, [activeSection]);


  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="custom-cursor"></div>
      {/* Hamburger Icon (Visible on small screens) */}
      <button
        className="xl:hidden fixed top-4 left-4 z-50 p-2 bg-amber-50 text-orange-400 rounded-md"
        onClick={toggleSidebar}
      >
        {/* Hamburger Icon (Three Lines) */}
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
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } xl:translate-x-0 xl:static xl:shadow-none`}
        >
          <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>

        {/* Overlay (Visible when sidebar is open on small screens) */}
        {isSidebarOpen && (
          <div
            className="xl:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
            onClick={closeSidebar}
          />
        )}
        {/* Main Content */}
        <main
          className={`flex-1 overflow-y-auto hide-scrollbar transition-transform duration-300 ease-in-out z-20 ${
            showScrollbar ? "show-scrollbar" : "hide-scrollbar"
          } ${isSidebarOpen ? "translate-x-64 blur-sm" : "translate-x-0"} xl:blur-none xl:translate-x-0`}
          onMouseEnter={showScrollbarTemporarily}
          onScroll={showScrollbarTemporarily}
          onClick={isSidebarOpen ? closeSidebar : undefined} // Close sidebar when clicking main content on small screens
        >
          <div className="animate-fade-in">{renderSection()}</div>
        </main>
      </div>
    </div>
  );
};

export default App;