import "../css/topbar.css";
import logo from "../assets/images/logo.svg";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("working");
  };

  return (
    <header className={`header ${isMenuOpen ? "active" : ""}`}>
      <nav className="navbar-container">
        <a href="/" className="logo-container">
          <img src={logo} alt="AstroVerse-Logo" className="logo" />
          <h1 className="title-text">AstroVerse</h1>
        </a>

        {/*  Menu Icon  */}
        <div
          className={`menu-icon ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`link-container ${isMenuOpen ? "active" : ""}`}>
          <CustomLink to="/news" linkText={"News"} />
          <CustomLink to="/astrobiology" linkText={"Astrobiology"} />
          <CustomLink
            to="/telescope_observatories"
            linkText={"Telescope and Observatories"}
          />
          <CustomLink to="/gallery" linkText={"Gallery"} />
          <CustomLink to="/about" linkText={"About Us"} />
          <CustomLink to="/resources" linkText={"Resources"} />
          <CustomLink to="/contact" linkText={"Contact"} />
        </ul>
      </nav>
    </header>
  );
}

function CustomLink({ to, linkText, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li>
      <Link to={to} {...props} className={isActive ? "active" : ""}>
        {linkText}
      </Link>
    </li>
  );
}

export default Topbar;
