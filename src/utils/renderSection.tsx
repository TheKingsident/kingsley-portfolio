import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Experience from "../pages/Experience";
import Portfolio from "../pages/Portfolio";
import { PortfolioItem } from "../data/portfolioItemCardData";
// import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

interface RenderSectionProps {
  activeSection: string;
  onItemClick?: (item: PortfolioItem) => void;
  setActiveSection: (section: string) => void;
}

const renderSection = ({ activeSection, onItemClick, setActiveSection }: RenderSectionProps) => {
  const getSection = () => {
    switch (activeSection) {
      case "home":
        return <Home setActiveSection={setActiveSection} />;
      case "about":
        return <About />;
      case "services":
        return <Services />;
      case "experience":
        return <Experience />;
      case "portfolio":
        return <Portfolio onItemClick={onItemClick || (() => {})} />;
      // case "blog":
      //   return <Blog />;
      case "contact":
        return <Contact />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }

  };

  return (
    <div key={activeSection} className="animate-slideInRight">
      {getSection()}
    </div>
  )
};

export default renderSection;
