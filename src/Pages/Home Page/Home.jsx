import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import logoAvatar from "../../assets/eva.png";
import Cards from "../../Components/Cards/Cards";
import { GiHamburgerMenu } from "react-icons/gi";

import "./Home.css";

function Home({ data }) {
  const [slide, setSlides] = useState(0);
  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    setShowNav(true);
  };
  const handleUnshowNav = () => {
    setShowNav(false);
  };
  const nextSlide = () => {
    setSlides(slide === data.length - 1 ? 0 : slide + 1);
  };

  const previousSlide = () => {
    setSlides(slide === 0 ? data.length - 1 : slide - 1);
  };

  useEffect(() => {
    const intervalID = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(intervalID);
  });
  return (
    <div className="home-container">
      <div className="navBar">
        <img src={logoAvatar} alt="karma Logo" className="imageLogo" />
        {showNav && (
          <nav className="nav">
            <ul className="nav__links">
              <li className="links home">Home</li>
              <li className="links service">Service</li>
              <li className="links about">About</li>
              <li className="links contact">Contact</li>
              <button className="link-btn" onClick={handleUnshowNav}>
                &times;
              </button>
            </ul>
          </nav>
        )}

        <GiHamburgerMenu className="burger" onClick={handleShowNav} />
      </div>
      <div className="carousel">
        <div className="mainPageTextAndButton">
          <div className="headersLetters">
            <h1 className="headersLetters-h1">Where Glamour</h1>
            <h1> Meets Perfection</h1>
          </div>
          <button className="btn">Book Now</button>
        </div>

        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={previousSlide}
        />
        {data.map((item, i) => {
          return (
            <img
              src={item.src}
              alt={item.alt}
              key={i}
              className={slide === i ? "slides" : "slides slide-hidden "}
            />
          );
        })}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={nextSlide}
        />
        <span className="indicators">
          {data.map((_, i) => {
            return (
              <button
                key={i}
                onClick={() => setSlides(i)}
                className={slide === i ? "indicator" : " indicator-disabled"}
              ></button>
            );
          })}
        </span>
      </div>
      <div className="info-column">
        <div className="texts">
          <h3 className="info-one">Give Your body a little Love</h3>
          <p>
            With over 10 years as a Registered Nurse hair and beauty, Karma
            hairsalon By Eva Lakotos strives in making you feel confident and
            happy with your skin. Inspired by the latest evidence based
            treatments to achieve your aesthetic goals.
          </p>
        </div>
      </div>
      <div className="cards">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default Home;
