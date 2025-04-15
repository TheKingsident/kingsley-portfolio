import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Experience from "../pages/Experience";
import Portfolio from "../pages/Portfolio";
// import Blog from "../pages/Blog";
// import Contact from "../pages/Contact";

const renderSection = (activeSection: string) => {
  switch (activeSection) {
    case "home":
      return <Home />;
    case "about":
      return <About />;
    case "services":
      return <Services />;
    case "experience":
      return <Experience />;
    case "portfolio":
      return <Portfolio />;
    // case "blog":
    //   return <Blog />;
    // case "contact":
    //   return <Contact />;
    default:
      return <Home />;
  }
};

export default renderSection;
