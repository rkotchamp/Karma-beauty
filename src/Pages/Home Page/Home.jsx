import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
// import logoAvatar from "../../assets/eva.png";
import Cards from "../../Components/Cards/Cards";
import { IoLogoWhatsapp } from "react-icons/io";
// import { GiHamburgerMenu } from "react-icons/gi";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

import NavBar from "../../Components/NavBar/NavBar";
import "./Home.css";

function Home({ data }) {
  const [slide, setSlides] = useState(0);
  const [showNav, setShowNav] = useState(false);

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
      <NavBar />

      <div className="carousel">
        <div className="mainPageTextAndButton">
          <div className="headersLetters">
            <h1 className="headersLetters-h1">Where Glamour</h1>
            <h1> Meets Perfection</h1>
          </div>
          <Link to="/contact">
            <button className="btn">Book Now</button>
          </Link>
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
      <span className="whatsappContainer">
        <Link to="https://wa.me/732756294">
          <IoLogoWhatsapp className="whatsappLogo" />
        </Link>
      </span>
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
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
