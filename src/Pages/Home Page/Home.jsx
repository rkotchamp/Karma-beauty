import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

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
      <div className="carousel">
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
    </div>
  );
}

export default Home;
