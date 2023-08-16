import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import heroVideo from "../assets/videos/Hero_Section_Video_Wallpaper.mp4";
import "../css/home.css";
import CustomButton from "../components/CustomButton";
import compass from "../assets/images/compass.svg";
import group from "../assets/images/group.svg";
import outlineAsia from "../assets/images/outline-asia.svg";

function Home() {
  return (
    <>
      <div className="main">
        <Topbar />
        <Sidebar />
        <video
          src={heroVideo}
          className="hero-background-video"
          autoPlay
          loop
          muted
        />
        <div className="content-container d-flex flex-column justify-content-center align-items-center">
          <div className="hero-content text-center mb-5">
            <p>Explore</p>
            <h1>SPACE</h1>
            <CustomButton text="Explore Now" />
          </div>
          <div className="boxes d-flex align-items-stretch justify-content-evenly mb-5">
            <div className="box">
              <div className="box-content">
                <img src={compass} alt="Distance-from-Sun" />
                <div className="box-text">
                  <p>Distance from Sun</p>
                  <p>149.5 million km</p>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="box-content">
                <img src={group} alt="Distance-from-Sun" />
                <div className="box-text">
                  <p>Population</p>
                  <p>8,045,311,447</p>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="box-content">
                <img src={outlineAsia} alt="Distance-from-Sun" />
                <div className="box-text">
                  <p>Land Area</p>
                  <p>148.9 million km²</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
