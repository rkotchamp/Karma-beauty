import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Cards from "../../Components/Cards/Cards";
import { IoLogoWhatsapp } from "react-icons/io";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
// import image from "../../assets/received_1096520511335008.jpeg"

import NavBar from "../../Components/NavBar/NavBar";
import "./Home.css";

function Home({ data }) {
  const [slide, setSlides] = useState(0);

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
            {/* {data.map} */}
            <h1 className="headersLetters-h1">Unde stilul îți</h1>
            <h1>întâlnește personalitatea</h1>
          </div>
          <Link to="/contact">
            <button className="btn">Programează-te</button>
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
          <h3 className="info-one">Drumul tău către frumusețe și fericire</h3>
          <p>
            Descoperă-ți strălucirea la KarmaBeauty! Experimentează
            transformarea ta într-un sanctuar al frumuseții cu peste 14 ani de
            experienta. Rezervă acum pentru a începe călătoria ta spre
            frumusețea eternă
          </p>
        </div>
      </div>
      <div className="cards">
        <Cards />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
