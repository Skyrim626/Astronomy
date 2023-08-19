import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import "../css/about.css";
import firstImage from "../assets/images/about-us-image.jpg";
import whatWeDoImage1 from "../assets/images/about-us-In-Depth-Insights-image.jpg";
import whatWeDoImage2 from "../assets/images/about-us-Visual-Spectacles-image.jpg";
import whatWeDoImage3 from "../assets/images/about-us-Educational-Resources-image.jpg";
import whatWeDoImage4 from "../assets/images/about-us-News-and-Updates-image.jpg";
import ourMissionImage from "../assets/images/about-us-our-mission-image.jpg";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Topbar />
      <Sidebar />
      <div className="about-us-container">
        <div className="about-us-image-container">
          <img src={firstImage} alt="First Section Wallpaper" />
        </div>
        <div className="about-us-about-us-container">
          <h1>About Us</h1>
          <p>
            Welcome to AstroVerse, your cosmic journey into the realms of
            astronomy and space exploration. At AstroVerse, we are passionate
            about unlocking the mysteries of the universe and sharing the
            wonders of the cosmos with enthusiasts, learners, and stargazers of
            all ages.
          </p>
        </div>
        <div className="about-us-offer-container">
          <div className="container p-5 about-us-offer-content">
            <h1>
              <strong>What We Offer</strong>
            </h1>
            <div className="about-us-offer-boxes-container">
              <div className="about-us-offer-boxes">
                <div className="about-us-offer-box">
                  <img src={whatWeDoImage1} alt="" />
                  <div className="about-us-offer-box-content">
                    <h3>In-Depth Insights</h3>
                  </div>
                </div>
                <div className="about-us-offer-box">
                  <img src={whatWeDoImage2} alt="" />
                  <div className="about-us-offer-box-content">
                    <h3>Visual Spectacles</h3>
                  </div>
                </div>
              </div>
              <div className="about-us-offer-boxes">
                <div className="about-us-offer-box">
                  <img src={whatWeDoImage3} alt="" />
                  <div className="about-us-offer-box-content">
                    <h3>Educational Resources</h3>
                  </div>
                </div>
                <div className="about-us-offer-box">
                  <img src={whatWeDoImage4} alt="" />
                  <div className="about-us-offer-box-content">
                    <h3>News and Updates</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container p-5">
            <div className="about-us-our-mission-container">
              <img
                src={ourMissionImage}
                alt="our-mission-image"
                className="about-us-our-mission-image"
              />
              <div className="about-us-our-mission-content">
                <h1>Our Mission</h1>
                <p>
                  Our mission is to inspire, educate, and ignite curiosity about
                  the cosmos. We believe that the universe is a boundless source
                  of knowledge and awe, and we're committed to bringing its
                  wonders closer to you. Through engaging articles, stunning
                  imagery, and insightful resources, we aim to foster a deeper
                  understanding of the cosmos and our place within it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
