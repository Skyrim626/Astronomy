import {
  FaFacebookSquare,
  FaYoutube,
  FaPinterestSquare,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import "../css/sidebar.css";

function Sidebar() {
  return (
    <div className="social-media-icons">
      <ul className="">
        <a href="#">
          <li className="facebook">
            <FaFacebookSquare />
          </li>
        </a>
        <a href="#">
          <li className="twitter">
            <FaTwitter />
          </li>
        </a>
        <a href="#">
          <li className="youtube">
            <FaYoutube />
          </li>
        </a>
        <a href="#">
          <li className="linkedIn">
            <FaLinkedinIn />
          </li>
        </a>
        <a href="#">
          <li className="github">
            <FaGithub />
          </li>
        </a>
        <a href="#">
          <li className="pinterest">
            <FaPinterestSquare />
          </li>
        </a>
      </ul>
    </div>
  );
}

export default Sidebar;
