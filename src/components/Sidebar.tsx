import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faBriefcase, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faInstagram, faBehance } from "@fortawesome/free-brands-svg-icons";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Profile Section */}
      <div className="profile">
        <img src="src/assets/profile.jpg" alt="Kingsley Usa" className="profile-img" />
        <h2 className="name">Kingsley Usa</h2>
        <p className="title">Web Developer | Software Engineer</p>
      </div>

      {/* Navigation Links */}
      <nav className="nav">
        <ul>
          <li>
            <a href="#home">
              <FontAwesomeIcon icon={faHome} /> Home
            </a>
          </li>
          <li>
            <a href="#about">
              <FontAwesomeIcon icon={faUser} /> About
            </a>
          </li>
          <li>
            <a href="#services">
              <FontAwesomeIcon icon={faBriefcase} /> Services
            </a>
          </li>
          <li>
            <a href="#contact">
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Social Media Links */}
      <div className="socials">
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faBehance} />
        </a>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Kingsley.</p>
      </footer>
    </aside>
  );
};

export default Sidebar;
