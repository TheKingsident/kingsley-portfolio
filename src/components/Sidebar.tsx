import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faEnvelope,
  faBlog,
  faCube,
  faMap,
  faSuitcase
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faBehance,
  faDribbble
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
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
          <li>
            <a
              href="#home"
              className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white text-[#ff7b54] font-medium transition"
            >
              <FontAwesomeIcon icon={faHome} />
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 hover:text-[#ff7b54] transition"
            >
              <FontAwesomeIcon icon={faUser} />
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 hover:text-[#ff7b54] transition"
            >
              <FontAwesomeIcon icon={faBriefcase} />
              Services
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 hover:text-[#ff7b54] transition"
            >
              <FontAwesomeIcon icon={faSuitcase} />
              Experience
            </a>
          </li>
          <li>
            <a
              href="#works"
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 hover:text-[#ff7b54] transition"
            >
              <FontAwesomeIcon icon={faCube} />
              Works
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 hover:text-[#ff7b54] transition"
            >
              <FontAwesomeIcon icon={faBlog} />
              Blog
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 hover:text-[#ff7b54] transition"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Social Media Links */}
      <div className="mt-auto flex gap-3 mb-5">
        {[faFacebook, faTwitter, faInstagram, faDribbble, faBehance].map((icon, i) => (
          <a
            key={i}
            href="#"
            className="w-9 h-9 bg-white rounded-md flex items-center justify-center text-gray-600 hover:text-[#ff7b54] shadow-sm transition"
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
