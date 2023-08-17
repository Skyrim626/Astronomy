import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import CustomButton from "../components/CustomButton";
import "../css/astrobiology.css";
import astrobiologyVideo1 from "../assets/videos/Astrobiology-Video-Slider-1.mp4";
import astrobiologyVideo2 from "../assets/videos/Astrobiology-Video-Slider-2.mp4";
import astrobiologyVideo3 from "../assets/videos/Astrobiology-Video-Slider-3.mp4";
import astrobiologyVideo4 from "../assets/videos/Astrobiology-Video-Slider-4.mp4";
import astrobiologyVideo5 from "../assets/videos/Astrobiology-Video-Slider-5.mp4";
import astrobiologyVideo6 from "../assets/videos/Astrobiology-Video-Slider-6.mp4";
import astrobiologyVideo7 from "../assets/videos/Astrobiology-Video-Slider-7.mp4";
import astrobiologyVideo8 from "../assets/videos/Astrobiology-Video-Slider-8.mp4";
import astrobiologyVideo9 from "../assets/videos/Astrobiology-Video-Slider-9.mp4";
import astrobiologyVideo10 from "../assets/videos/Astrobiology-Video-Slider-10.mp4";
import { useState, useEffect } from "react";

const videoUrls = [
  astrobiologyVideo1,
  astrobiologyVideo2,
  astrobiologyVideo3,
  astrobiologyVideo4,
  astrobiologyVideo5,
  astrobiologyVideo6,
  astrobiologyVideo7,
  astrobiologyVideo8,
  astrobiologyVideo9,
  astrobiologyVideo10,
];

// Add your slide texts
const slideTexts_header = [
  "Introduction to Astrobiology",
  "The Search for Extraterrestrial Life",
  "Habitable Zones",
  "Exoplanets",
  "Mars Exploration",
  "Europa and Enceladus",
  "Search for Extraterrestrial Intelligence",
  "Extraterrestrial Life Hypotheses",
  "Astrobiology Research and Discoveries",
  "Educational Resources",
];

const slideTexts_paragraph = [
  "Explore the captivating field of astrobiology, where science meets imagination, as we delve into the mysteries of life's potential existence beyond our home planet.",
  "Join us on a cosmic journey as we unveil the tireless quests, groundbreaking missions, and cutting-edge projects aimed at uncovering the secrets of life among the stars.",
  "Discover the Goldilocks regions of the cosmos, where planets dance in orbits that may provide the ideal conditions for life to emerge, flourish, and captivate our cosmic curiosity.",
  "Venture beyond our solar system to the dazzling diversity of exoplanets, each a potential cradle for life, as we explore the tantalizing prospects of worlds yet unseen.",
  "Embark on the Martian odyssey, where rovers roam ancient landscapes, seeking evidence of life's past whispers or hidden present beneath the rust-colored sands.",
  "Plunge beneath icy shells into the enigmatic oceans of distant moons, where alien life might thrive in the dark abyss, hinting at the potential for extraterrestrial beings.",
  "Tune in to the cosmic frequencies, where our search for intelligent signals from the stars resonates with the yearning to connect, communicate, and unravel the cosmic conversation.",
  "Embark on a journey of imagination and scientific exploration, as we unravel the diverse hypotheses envisioning the myriad forms, from microbes to sentient beings, that life might assume elsewhere.",
  "Witness the eureka moments of scientific inquiry, where astrobiologists unveil their intriguing findings, pushing the boundaries of our understanding and opening new chapters in cosmic exploration.",
  "Empower your cosmic curiosity with a trove of educational treasures, as we offer a celestial library of readings, articles, and captivating videos, inviting you to delve deeper into the captivating realms of astrobiology.",
];

function Astrobiology() {
  // Javascript for video slider navigation

  // Autoplay the video when the currentVideoIndex changes
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleCircleButtonClick = (index) => {
    setCurrentVideoIndex(index);
  };

  useEffect(() => {
    // Autoplay the video when the currentVideoIndex changes
    const videoElement = document.getElementById("video-slide");
    videoElement.play();
  }, [currentVideoIndex]);

  /* const btns = document.querySelectorAll(".nav-btn");
  const slides = document.querySelectorAll(".video-slide");

  var sliderNav = function (manual) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });

    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
  };

  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      sliderNav(i);
    });
  }); */

  return (
    <>
      <Topbar />
      <Sidebar />

      <section className="astrobiology-container">
        <video
          className="video-slide"
          id="video-slide"
          src={videoUrls[currentVideoIndex]}
          autoPlay
          loop
          muted
        />
        {/* <video
          src={astrobiologyVideo1}
          className="video-slide"
          autoPlay
          loop
          muted
        />
        <video
          src={astrobiologyVideo1}
          className="video-slide"
          autoPlay
          loop
          muted
        />
        <video
          src={astrobiologyVideo1}
          className="video-slide"
          autoPlay
          loop
          muted
        />
        <video
          src={astrobiologyVideo1}
          className="video-slide"
          autoPlay
          loop
          muted
        />
        <video
          src={astrobiologyVideo1}
          className="video-slide"
          autoPlay
          loop
          muted
        />
        <video
          src={astrobiologyVideo1}
          className="video-slide"
          autoPlay
          loop
          muted
        />
        <video
          src={astrobiologyVideo1}
          className="video-slide"
          autoPlay
          loop
          muted
        />
        <video
          src={astrobiologyVideo1}
          className="video-slide"
          autoPlay
          loop
          muted
        />
        <video
          src={astrobiologyVideo1}
          className="video-slide"
          autoPlay
          loop
          muted
        />
        <video
          src={astrobiologyVideo1}
          className="video-slide"
          autoPlay
          loop
          muted
        /> */}
        <div className="astrobiology-content">
          <h1>{slideTexts_header[currentVideoIndex]}</h1>
          <p>{slideTexts_paragraph[currentVideoIndex]}</p>
          <CustomButton text={"Read More"} />
          <div className="slider-navigation">
            {/* <div className="nav-btn"></div>
            <div className="nav-btn"></div>
            <div className="nav-btn"></div>
            <div className="nav-btn"></div>
            <div className="nav-btn"></div>
            <div className="nav-btn"></div>
            <div className="nav-btn"></div>
            <div className="nav-btn"></div>
            <div className="nav-btn"></div>
            <div className="nav-btn"></div> */}
            {videoUrls.map((url, index) => (
              <div
                key={index}
                className={`nav-btn ${
                  currentVideoIndex === index ? "active" : ""
                }`}
                onClick={() => handleCircleButtonClick(index)}
              ></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Astrobiology;
