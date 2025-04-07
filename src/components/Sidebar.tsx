import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faEnvelope,
  faBlog,
  faCube,
  faSuitcase
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faBehance,
  faDribbble
} from "@fortawesome/free-brands-svg-icons";

const navItems = [
  { id: "home", label: "Home", icon: faHome },
  { id: "about", label: "About", icon: faUser },
  { id: "services", label: "Services", icon: faBriefcase },
  { id: "experience", label: "Experience", icon: faSuitcase },
  { id: "works", label: "Works", icon: faCube },
  { id: "blog", label: "Blog", icon: faBlog },
  { id: "contact", label: "Contact", icon: faEnvelope }
];

const Sidebar = () => {
  const [active, setActive] = useState("home");

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top <= 100 && top + section.offsetHeight > 100) {
            setActive(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll on click
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside className="w-[250px] h-screen bg-gradient-to-b from-[#e8ecf7] to-[#f6f1f7] flex flex-col items-center px-6 py-8 rounded-l-3xl shadow-lg">
      {/* Profile Section */}
      <div className="text-center mb-8">
        <div className="relative w-24 h-24 mx-auto">
          <img
            src="src/assets/profile.jpg"
            alt="Kingsley Usa"
            className="w-24 h-24 rounded-full border-4 border-white object-cover"
          />
          <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full" />
        </div>
        <h2 className="text-xl font-semibold mt-4">Kingsley Usa</h2>
        <p className="text-sm text-gray-500">Software Engineer and Web Developer</p>
      </div>

      {/* Navigation Links */}
      <nav className="w-full">
        <ul className="flex flex-col gap-3 w-full">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg w-full text-left transition font-medium ${
                  active === item.id
                    ? "bg-white text-[#ff7b54]"
                    : "bg-transparent text-gray-600 hover:text-[#ff7b54] hover:bg-white/30"
                }`}
              >
                <FontAwesomeIcon icon={item.icon} />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Media Links */}
      <div className="mt-auto flex gap-3 mb-5">
        {[faFacebook, faTwitter, faInstagram, faDribbble, faBehance].map((icon, i) => (
          <a
            key={i}
            href="#"
            className="w-9 h-9 bg-white rounded-md flex items-center justify-center text-gray-600 hover:text-[#ff7b54] shadow-sm transition transform hover:scale-105"
          >
            <FontAwesomeIcon icon={icon} />
          </a>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-xs text-gray-500">
        <p>© 2025 Kingsley.</p>
      </footer>
    </aside>
  );
};

export default Sidebar;
