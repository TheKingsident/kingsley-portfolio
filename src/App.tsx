import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
// import Services from "./pages/Services";
//import Experience from "./pages/Experience";
//import Works from "./pages/Works";
//import Blog from "./pages/Blog";
//import Contact from "./pages/Contact";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

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

  return (
    <div className="flex">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1">
        <div className="animate-fade-in">{renderSection()}</div>
      </main>
    </div>
  );
};

export default App;