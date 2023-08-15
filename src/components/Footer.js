import logo from "../assets/images/logo-footer.svg";
import "../css/footer.css";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import youtube from "../assets/images/youtube.svg";
import linkedIn from "../assets/images/linkedIn.svg";
import github from "../assets/images/github.svg";
import pinterest from "../assets/images/pinterest.svg";

function Footer() {
  return (
    <>
      <footer>
        <div className="container content pt-3 d-flex flex-column">
          <div className="logo d-flex gap-2 justify-content-start align-items-center">
            <img src={logo} alt="AstroVerse-Logo" className="logo" />
            <h3>AstroVerse</h3>
          </div>
        </div>
        <div className="menu-container d-flex justify-content-around mt-5">
          <div className="menu">
            <h6>Stay in Touch With Us:</h6>
            <Link text={"example@email.com"} />
            <Link text={"+63 999-1234-1234"} />
          </div>
          <div className="menu">
            <h6>Overview: </h6>
            <Link text={"Home"} />
            <Link text={"Astrobiology"} />
            <Link text={"News"} />
            <Link text={"Telescope and Observations"} />
            <Link text={"Gallery"} />
            <Link text={"About Us"} />
            <Link text={"Resources"} />
          </div>
          <div className="menu">
            <h6>Connect with us on social media:</h6>
            <div className="social-media-link">
              <img src={facebook} alt="Facebook" />
              <Link text={"Facebook"} />
            </div>
            <div className="social-media-link">
              <img src={twitter} alt="Facebook" />
              <Link text={"Twitter"} />
            </div>
            <div className="social-media-link">
              <img src={youtube} alt="Facebook" />
              <Link text={"Youtube"} />
            </div>
            <div className="social-media-link">
              <img src={linkedIn} alt="Facebook" />
              <Link text={"LinkedIn"} />
            </div>
            <div className="social-media-link">
              <img src={github} alt="Facebook" />
              <Link text={"Github"} />
            </div>
            <div className="social-media-link">
              <img src={pinterest} alt="Facebook" />
              <Link text={"Pinterest"} />
            </div>
          </div>
        </div>
        <div className="copyright-container mt-4 p-3 mx-auto text-center">
          <p className="copyright-text">
            © 2023 AstroVerse. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

function Link({ text, to, ...props }) {
  return (
    <li>
      <a href={to}>
        <u>{text}</u>
      </a>
    </li>
  );
}

export default Footer;
