import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import "../css/telescopeObservatory.css";
import Footer from "../components/Footer";
import telescope1 from "../assets/images/telescope-1.jpg";
import telescope2 from "../assets/images/telescope-2.jpg";
import telescope3 from "../assets/images/telescope-3.jpg";
import telescope4 from "../assets/images/telescope-4.jpg";
import telescope5 from "../assets/images/telescope-5.jpg";
import telescope6 from "../assets/images/telescope-6.jpg";
import observatory1 from "../assets/images/observatory-1.jpg";
import observatory2 from "../assets/images/observatory-2.jpg";
import observatory3 from "../assets/images/observatory-3.jpg";

function TelescopeObservatories() {
  return (
    <>
      <Topbar />
      <Sidebar />
      <div className="telescope-container">
        {/* A invisible block element */}
        <div className="telescope-background-wallpaper">
          <div className="telescope-content">
            <h1>Telescope and Observatories</h1>
            <p>
              Unveiling the Cosmos: Journey through the Eyes of Giants - Explore
              the Ingenious Instruments and Heavenly Observatories that Reveal
              the Secrets of the Universe
            </p>
          </div>
        </div>
        <div className="pt-5 container text-center pb-5">
          <div className="row row-cols-md-3 row-cols-sm-1 g-5">
            <div className="col">
              <div className="observatory-image">
                <img src={telescope1} alt="Telescope 1" />
                <div className="observatory-content">
                  <h2>Telescope 1</h2>
                </div>
                <h3 className="content-outside">Telescope 1</h3>
              </div>
            </div>
            <div className="col">
              <div className="observatory-image">
                <img src={telescope2} alt="Telescope 2" />
                <div className="observatory-content">
                  <h2>Telescope 2</h2>
                </div>
                <h3 className="content-outside">Telescope 1</h3>
              </div>
            </div>
            <div className="col">
              <div className="observatory-image">
                <img src={telescope3} alt="Telescope 3" />
                <div className="observatory-content">
                  <h2>Telescope 3</h2>
                </div>
                <h3 className="content-outside">Telescope 1</h3>
              </div>
            </div>
            <div className="col">
              <div className="observatory-image">
                <img src={observatory1} alt="Telescope 3" />
                <div className="observatory-content">
                  <h2>Observatory 1</h2>
                </div>
                <h3 className="content-outside">Observatory 1</h3>
              </div>
            </div>
            <div className="col">
              <div className="observatory-image">
                <img src={observatory2} alt="Telescope 3" />
                <div className="observatory-content">
                  <h2>Observatory 2</h2>
                </div>
                <h3 className="content-outside">Observatory 2</h3>
              </div>
            </div>
            <div className="col">
              <div className="observatory-image">
                <img src={observatory3} alt="Telescope 3" />
                <div className="observatory-content">
                  <h2>Observatory 3</h2>
                </div>
                <h3 className="content-outside">Observatory 3</h3>
              </div>
            </div>
            <div className="col">
              <div className="observatory-image">
                <img src={telescope4} alt="Telescope 4" />
                <div className="observatory-content">
                  <h2>Telescope 4</h2>
                </div>
                <h3 className="content-outside">Telescope 4</h3>
              </div>
            </div>
            <div className="col">
              <div className="observatory-image">
                <img src={telescope5} alt="Telescope 5" />
                <div className="observatory-content">
                  <h2>Telescope 5</h2>
                </div>
                <h3 className="content-outside">Telescope 5</h3>
              </div>
            </div>
            <div className="col">
              <div className="observatory-image">
                <img src={telescope6} alt="Telescope 6" />
                <div className="observatory-content">
                  <h2>Telescope 6</h2>
                </div>
                <h3 className="content-outside">Telescope 6</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TelescopeObservatories;
