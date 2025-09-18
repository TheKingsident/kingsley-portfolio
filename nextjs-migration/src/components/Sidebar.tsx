import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  //faBriefcase,
  faEnvelope,
  //faBlog,
  faCube,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
  faFacebook,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const navItems = [
  { id: "home", label: "Home", icon: faHome, path: "/" },
  { id: "about", label: "About", icon: faUser, path: "/about" },
  { id: "experience", label: "Experience", icon: faSuitcase, path: "/experience" },
  { id: "portfolio", label: "Portfolio", icon: faCube, path: "/portfolio" },
  //{ id: "services", label: "Services", icon: faBriefcase, path: "/services" },
  //{ id: "blog", label: "Blog", icon: faBlog, path: "/blog" },
  { id: "contact", label: "Contact", icon: faEnvelope, path: "/contact" },
];


interface SidebarProps {
  activeSection: string;
  closeSidebar: () => void;
}

const Sidebar = ({ activeSection, closeSidebar }: SidebarProps) => {
  const socialLinks = [
    { icon: faLinkedinIn, url: "https://www.linkedin.com/in/thekingsident" },
    { icon: faXTwitter, url: "https://x.com/CtrlAlt_Byte" },
    { icon: faFacebook, url: "https://www.facebook.com/kingsident" },
    { icon: faGithub, url: "https://github.com/TheKingsident/" },
  ];
  

  return (
    <aside className="flex flex-col justify-between h-full px-6 py-8 border-r border-white">
      {/* Profile Section */}
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto">
          <Image
            src="/assets/profile.jpg"
            alt="Kingsley Usa software engineer"
            className="w-24 h-24 rounded-full border-4 border-white object-cover"
            width={96}
            height={96}
          />
          <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full" />
        </div>
        <h2 className="text-xl font-semibold mt-4 font-heading">Kingsley Usa</h2>
        <p className="text-sm text-gray-500 mt-5 font-body">Software Engineer and Web</p>
        <p className="text-sm text-gray-500 font-body">Developer</p>
      </div>

      {/* Navigation Links */}
      <nav className="w-full font-body">
        <ul className="flex flex-col gap-3 w-full">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.path}
                onClick={closeSidebar}
                className={`flex items-center text-[15px] gap-3 px-4 py-2 rounded-lg w-full transition font-medium ${
                  activeSection === item.id
                    ? "bg-white text-[#ff7b54] animate-pulse-once"
                    : "bg-transparent text-gray-600 hover:text-[#ff7b54] hover:bg-white/30"
                }`}
              >
                <FontAwesomeIcon icon={item.icon} />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Media Links and Footer */}
      <div className="mb-5 lg:mb-0">
        <div className="mt-auto flex gap-3 mb-5 justify-center">
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white rounded-md flex items-center justify-center text-gray-600 hover:text-[#ff7b54] shadow-sm transition transform hover:scale-105"
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-sm text-gray-500 font-body justify-center flex flex-col items-center">
          <p>© {new Date().getFullYear()} Kingsley</p>
        </footer>
      </div>
    </aside>
  );
};

export default Sidebar;