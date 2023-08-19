import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "../css/news.css";
import backgroundImage from "../assets/images/news-section-background-wallpaper.jpg";
import videoBackground from "../assets/videos/news-section-background-video.mp4";

function News() {
  return (
    <>
      <Topbar />
      <Sidebar />
      <div className="news-section">
        <div className="news-section-intro-section">
          <div className="news-section-background-image">
            <img src={backgroundImage} alt="" />
          </div>
          <div className="news-section-video-background">
            <video
              src={videoBackground}
              className="hero-background-video"
              autoPlay
              loop
              muted
            />
            <div className="news-section-video-content">
              <h4 className="hero-background-intro-content">
                Stay Informed, Be Inspired: Discover the Universe's Latest
                Marvels
              </h4>
            </div>
          </div>
          <div className="blockstate"></div>
        </div>
        <div className="news-contents-container container p-5">
          <div className="news-contents-menus">
            <h5>Featured Article</h5>
            <h5>Latest News</h5>
          </div>
          <div className="news-contents-contents-container"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default News;
