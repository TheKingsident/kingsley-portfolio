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
  }, [activeSectio]);


  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="custom-cursor"></div>
      <div className="flex w-9/12 max-h-[80vh] border-1 rounded-3xl border-amber-50 overflow-hidden">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className={`flex-1 overflow-y-auto hide-scrollbar ${
          showScrollbar ? "show-scrollbar" : "hide-scrollbar"
        }`}
        onMouseEnter={showScrollbarTemporarily}
        onScroll={showScrollbarTemporarily}>
          <div className="animate-fade-in">{renderSection()}</div>
        </main>
      </div>
    </div>
  );
};

export default App;