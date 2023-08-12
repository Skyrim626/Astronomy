import "../css/topbar.css";

import logo from "../assets/images/logo.svg";

function Topbar() {
  return (
    <nav className="d-flex justify-content-between align-items-center">
      <a
        href=""
        className="title-container d-flex justify-content-center align-items-center gap-2"
      >
        <img src={logo} alt="AstroVerse-Logo" className="logo" />

        <h1 className="title-text my-auto">AstroVerse</h1>
      </a>

      <ul className="d-flex align-items-center justify-content-center navigation-links my-auto">
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Astrobiology</a>
        </li>
        <li>
          <a href="#">Telescope and Observatories</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Topbar;
