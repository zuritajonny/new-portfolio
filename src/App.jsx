import { useState, useRef,useEffect } from "react";
import { useScrollLock } from "./hooks/useScrollLock";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const { lockScroll, unlockScroll } = useScrollLock();

  const [spanish, setSpanish] = useState(false);

  const [buttonTimer, setButtonTimer] = useState(false);

  const [renderCase, setRenderCase] = useState(0);

  const [showPage, setShowPage] = useState(false);
  const [animatePage, setAnimatePage] = useState(false);
  const [animationOff, setAnimationOff] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [isScrollLocked, setIsScrollLocked] = useState();

  function timer() {
    setTimeout(() => {
      setButtonTimer(!buttonTimer);
    }, 700);
  }

  const togglePage = () => {
    const animationDelay = 100;
    setShowPage(true);

    setTimeout(
      () => {
        setAnimatePage(true);
      },
      { animationDelay }
    );

    if (animatePage === true) {
      setAnimationOff(!animationOff);
    }

    setAnimatePage(false);

    if (isScrollLocked === false) {
      setTimeout(
        () => {
          lockScroll();
        },
        { animationDelay }
      );
    } else {
      unlockScroll();
    }
  };
  const goUpToggler = () => {
    if (window.scrollY >= 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  window.addEventListener("scroll", goUpToggler);

  const [fixNav, setFixNav] = useState();

  const fixHeader = () => {
    if (window.scrollY >= 66) {
      setFixNav(true);
    } else {
      setFixNav(false);
    }
  };

  window.addEventListener("scroll", fixHeader);

  const goUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const tecnologiesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
















  return (
    <div className="app">
      {/* <Header
        fixNav={fixNav}
        renderCase={renderCase}
        setRenderCase={setRenderCase}
        togglePage={togglePage}
        lockScroll={lockScroll}
        unlockScroll={unlockScroll}
        isScrollLocked={isScrollLocked}
        setIsScrollLocked={setIsScrollLocked}
        animatePage={animatePage}
        animationOff={animationOff}
        setAnimationOff={setAnimationOff}
        timer={timer}
        buttonTimer={buttonTimer}
        setButtonTimer={setButtonTimer}
        spanish={spanish}
        setSpanish={setSpanish}
        scrollToSection={scrollToSection}
        tecnologiesRef={tecnologiesRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
        goUp={goUp}
      /> */}

        <Home
          spanish={spanish}
          setSpanish={setSpanish}
          renderCase={renderCase}
          setRenderCase={setRenderCase}
          showPage={showPage}
          animatePage={animatePage}
          animationOff={animationOff}
          setAnimationOff={setAnimationOff}
          showButton={showButton}
          isScrollLocked={isScrollLocked}
          setIsScrollLocked={setIsScrollLocked}
          togglePage={togglePage}
          timer={timer}
          buttonTimer={buttonTimer}
          setButtonTimer={setButtonTimer}
          scrollToSection={scrollToSection}
          tecnologiesRef={tecnologiesRef}
          portfolioRef={portfolioRef}
          contactRef={contactRef}
        />
 
    </div>
  );
}

export default App;
