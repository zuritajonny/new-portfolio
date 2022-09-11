import { useState, useRef, useEffect } from "react";
import { SlideshowData } from "../data/SlideshowData";

function PortfolioPreview({
  animatePage,
  animationOff,
  isScrollLocked,
  setIsScrollLocked,
  setRenderCase,
  togglePage,
  timer,
  spanish,
}) {
  function bodyScroll() {
    document.body.style.overflow = "hidden";
  }

  /* function openPortfolio() {
    setRenderCase("4");
    togglePage();
    timer();
    bodyScroll();
  } */

  const delay = 1000;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === SlideshowData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div
      className={
        animatePage
          ? animationOff
            ? "portfolio-container container-active"
            : "portfolio-container container-off"
          : "portfolio-container"
      }
    >
      <div className="portfolio-wrapper">
        <div className="slider-container">
          <div
            className="slider-img-container"
            style={{ transform: `translate3d(${-index * 100}%, 0 ,0)` }}
          >
            {SlideshowData.map((image, index) => (
              <img
                src={image.source}
                alt="portfolio"
                className={image.cName}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>

      <button className="button" /* onClick={openPortfolio} */>
        <p>{spanish ? "Abrir portafolio" : "Open portfolio"}</p>
      </button>
    </div>
  );
}
export default PortfolioPreview;
