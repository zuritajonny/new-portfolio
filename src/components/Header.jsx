import { useState, useEffect } from "react";
import * as Icon from "react-feather";
import spanishFlag from "../media/sp.svg";
import usFlag from "../media/us.svg";
import pageLogo from "../media/pageLogo2.png";
import portfolio from "../media/portfolio.svg";
import tecnologies from "../media/tecnologies.svg";

function Header({
  renderCase,
  setRenderCase,
  goUp,
  spanish,
  setSpanish,
  scrollToSection,
  tecnologiesRef,
  portfolioRef,
  contactRef,
}) {


  function useScrollDirection() {
    
    const [scrollDirection, setScrollDirection] = useState();
    useEffect(() => {
      let lastScrollY = window.pageYOffset;
  
      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection);
      return () => {
        window.removeEventListener("scroll", updateScrollDirection);
      }
    }, [scrollDirection]);
  
    return scrollDirection;
  };
  
  const scrollDirection = useScrollDirection();

  const [activateLang, setActivateLang] = useState(false);

  function toggler() {
    setActivateLang(!activateLang);
  }

  function setLanguage() {
    setSpanish(!spanish);
    setActivateLang(!activateLang);
  }

 /*  const goBackButton = (
    <div className="arrow-left-container" onClick={backButton}>
      <Icon.ArrowLeft className="svg icon" />
    </div>
  ); */

  const toggleFullPortfolio = () => {
    setRenderCase("1");
    scrollToSection(portfolioRef);
    console.log(portfolioRef)
  };

  const toggleTechnologies = () => {
    setRenderCase("2");
    scrollToSection(tecnologiesRef);
  };

  const toggleContact = () => {
    setRenderCase("3");
    scrollToSection(contactRef);
  };

  function backButton() {
    switch (renderCase) {
      case "1":
        return toggleFullPortfolio();

      case "2":
        return toggleTechnologies();

      case "3":
        return toggleContact();
      default:
        return null;
    }
  }


  /*   window.addEventListener('scroll',toggleHeader) */

  return (
    <header className="header-container"> 
      <div className={scrollDirection === "down" ? " first-header header-active" : "first-header "}>
        <div
          className="info"
        >
          <div className="logo-container">
            <div className="logo-wrapper" onClick={goUp}>
              <span className="hover-animation"></span>
           

              <img src={pageLogo} className="logo-img" alt="" />
            </div>
          </div>
        </div>

        {/* <Navbar/> */}

        <div className="language-box">
          <div className="lang-flag-base" onClick={toggler}>
            <img
              src={spanish ? `${spanishFlag}` : `${usFlag}`}
              alt=""
              className="lang-flag"
            />
          </div>

          <div
            className={
              activateLang
                ? "lang-flag-container language-box-active"
                : "lang-flag-container"
            }
            onClick={setLanguage}
          >
            <img
              src={!spanish ? `${spanishFlag}` : `${usFlag}`}
              alt=""
              className="lang-flag"
            />
          </div>
        </div>
      </div>

      <div className='nav-wrapper'/* {fixNav ? "nav-wrapper nav-wrapper-active" : "nav-wrapper"} */>
        <ul className="nav-container">
          <div onClick={toggleTechnologies}>
            <li className="menu-item">
              <img src={tecnologies} className="menu-icon middle-fix" alt="" />
              <p className="menu-item-desc">
                {spanish ? "Tecnologías" : "Tecnologies"}
              </p>
            </li>
          </div>
          <div onClick={toggleFullPortfolio}>
            <li className="menu-item">
              <img src={portfolio} className="menu-icon" alt="" />
              <p className="menu-item-desc">
                {spanish ? "Portfolio" : "Portfolio"}
              </p>
            </li>
          </div>

          <div onClick={toggleContact}>
            <li className="menu-item">
              <Icon.User className="menu-icon" />
              <p className="menu-item-desc">
                {spanish ? "Contacto" : "Contact"}
              </p>
            </li>
          </div>
        </ul>
      </div>

  
    </header>
  );
}

export default Header;
