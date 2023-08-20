import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "../css/news.css";
import backgroundImage from "../assets/images/news-section-background-wallpaper.jpg";
import videoBackground from "../assets/videos/news-section-background-video.mp4";
import featuredNewsImage from "../assets/images/news-articles/featured-news.jpg";
import NewsCard from "../components/NewsCard";
import exampleNewsImage from "../assets/images/news-articles/news1.jpg";

const categoriesDictinary = {};

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
          <div className="news-contents-menus mb-4">
            <h5>Featured Article</h5>
            <h5>Latest News</h5>
          </div>

          <div className="news-article-container">
            <div className="news-article-card featured-news-card">
              <img src={featuredNewsImage} alt="featured-news-image" />
              <div className="featured-news-content">
                <div className="featured-news-categories">
                  <a href="">Biographies</a>
                </div>
                <h4>
                  Remembering a Giant Leap: The Legacy of Neil Armstrong, First
                  Human on the Moon
                </h4>
              </div>
            </div>
            <div className="news-article-card latest-news-cards">
              <NewsCard
                categories={["Biography", "My Life"]}
                newsImage={exampleNewsImage}
              />
              <NewsCard
                categories={["Biography"]}
                newsImage={exampleNewsImage}
              />
              <NewsCard
                categories={["Biography"]}
                newsImage={exampleNewsImage}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default News;
