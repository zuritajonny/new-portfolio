import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import Header from "./Header";
import * as Icon from "react-feather";
import Portfolio from "./Portfolio";
import Technologies from "./Technologies";

import Contact from "./Contact";
import CV from "../media/CV.pdf";
import Resume from "../media/EnglishCV.pdf";
import spFlag from "../media/sp.svg";
import frFlag from "../media/fr2.svg";
import usFlag from "../media/us.svg";
import codeIcon from "../media/codeIcon.svg";
import designIcon from "../media/designIcon2.svg";
import landingImg from "../media/landing-img.svg";
import landingImg2 from "../media/landing-img2.svg";
import landingImg3 from "../media/landing-img3.svg";

function Home({
  animatePage,
  goUp,
  animationOff,
  spanish,
  setSpanish,
  tecnologiesRef,
  portfolioRef,
  contactRef,
}) {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 200;
  };

  const ref = useRef();
  const illustrationColor = "#fafafa";

  return (
    <main className="home-container">
      <Parallax pages={7.6} ref={ref} style={{ backgroundColor: `${illustrationColor}` }}>
        <ParallaxLayer
          offset={0.7}
          speed={0.3}
          factor={4}
          style={{
            paddingTop: "2rem",
            backgroundImage: `url(${landingImg})`,
            backgroundColor: `${illustrationColor}`,
            backgroundSize: " 100%",
            width: "100%",
          }}
        ></ParallaxLayer>

        {/*     <ParallaxLayer
          offset={2.2}
          speed={0.2}
          factor={2}
          style={{
            backgroundImage: `url(${landingImg2})`,
            backgroundColor: `${illustrationColor}`,
            backgroundSize: "100%",
            width: "100%",
          }}
        ></ParallaxLayer> */}

        <ParallaxLayer
          offset={3.5}
          speed={0.4}
          factor={2}
          style={{
            backgroundImage: `url(${landingImg3})`,
            backgroundColor: `${illustrationColor}`,
            backgroundSize: "100%",
            width: "100%",
          }}
        ></ParallaxLayer>

        {/*    <ParallaxLayer >
          <div className="icon-container" onClick={goUp}>
            <Icon.ArrowUp className="icon svg" />
          </div>
        </ParallaxLayer> */}
        {/* 
       <ParallaxLayer  offset={0} speed={0.1} >
       
        </ParallaxLayer> 
        */}

        <ParallaxLayer offset={0} speed={0.9} /* factor={3}*/>
          <Header spanish={spanish} setSpanish={setSpanish} />

          <div className="welcome-text-container section">
            <div className="landing">
              <h1 className="title landing-text">
                {spanish
                  ? "Aplicaciones visualmente impresionantes"
                  : "Visually impressive applications"}
              </h1>

              <br />

              <div className="text">
                {spanish ? (
                  <p>
                    Hola! mi nombre es <span>Jonny</span>. Amo crear productos
                    digitales que sean <span>funcionales</span> y{" "}
                    <span>fascinantes</span>.
                  </p>
                ) : (
                  <p>
                    Hi! You can call me <span>Jonny</span>. I create digital
                    products that are both <span>mesmerizing</span> and{" "}
                    <span>functional</span>.
                  </p>
                )}
              </div>

              <br />

              <div className="landing-base-container">
                <div className="landing-area">
                  <div className="icon-img-container">
                    <img src={codeIcon} className="img" alt="" />
                  </div>
                  {spanish ? (
                    <p>
                      Desarrollo <br />
                      <span>FRONT-END</span>
                    </p>
                  ) : (
                    <p>
                      <span>FRONT-END</span>
                      <br /> development
                    </p>
                  )}
                </div>
                <div className="landing-area">
                  <div className="icon-img-container">
                    <img src={designIcon} className="img" alt="" />
                  </div>
                  {spanish ? (
                    <p>
                      Diseño <br /> <span>UI/UX</span>
                    </p>
                  ) : (
                    <p>
                      <span>UI/UX</span> <br />
                      design
                    </p>
                  )}
                </div>
              </div>

              <br />

              {/* <div className="text">
                {spanish ? (
                  <p>Aquí puedes descargar mi CV:</p>
                ) : (
                  <p>You can download my resume below:</p>
                )}
              </div> */}

              <button className="download-button">
                <a
                  href={spanish ? `${CV}` : `${Resume}`}
                  className="download-button-link"
                  download={
                    spanish ? "CV - Jonny Zurita" : "Resume - Jonny Zurita"
                  }
                >
                  {spanish ? "descarga mi CV" : "download my Resume"}
                </a>
              </button>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={0.3}>
          <div className="languages">
            {spanish ? (
              <h1 className="title landing-text margin">La comunicación es <br /><span> <span></span>clave</span></h1>
            ) : (
              <h1 className="title landing-text margin">Communication <br />is <span> <span></span>key</span></h1>
            )}

            <h4 className="title">
              {spanish ? "¿Cuáles idiomas hablo?" : "What languages do I speak?"}
            </h4>
            <ul className="languages-container">
              <div className="language-li">
                <li>
                  <img src={spFlag} alt="" className="img" />
                  <span>{spanish ? "Nativo" : "Native"}</span>
                </li>
                <div className="language-menu">
                  <span className="language-info">
                    {spanish ? "Español - Nativo" : "Spanish - Native"}
                  </span>
                </div>
              </div>

              <div className="language-li">
                <li>
                  <img src={usFlag} alt="" className="img" />
                  <span>{spanish ? "Proficiente" : "Proficient"}</span>
                </li>
                <div className="language-menu">
                  <span className="language-info">
                    {spanish ? "Ingles - C2" : "English - C2"}
                  </span>
                </div>
              </div>
              <div className="language-li">
                <li>
                  <img src={frFlag} alt="" className="img" />
                  <span>{spanish ? "Básico" : "Basic"}</span>
                </li>
                <div className="language-menu">
                  <span className="language-info">
                    {spanish ? "A2 - (Actualmente estudiándolo)" : "A2 - (Currently studying it)"}
                  </span>
                </div>
              </div>
            </ul>
            <h4 className="title">{spanish ? "Destrezas" : "Skills"}</h4>
            <ul className="full-row-container">
              <div onClick={slideLeft} className="arrow-wrapper left">
                <Icon.ArrowLeft className="icon" />
              </div>

              <div className="second-row" id="slider">
                <li>
                  <span>
                    {spanish ? "Abierto a aprender" : "Open to learn"}
                  </span>
                </li>
                <li>
                  <span>
                    {spanish
                      ? "Pensamiento colaborativo"
                      : "Collaborative thinking"}
                  </span>
                </li>
                <li>
                  <span>
                    {spanish ? "Escucha efectiva" : "Effective listening"}
                  </span>
                </li>
                <li>
                  {/* <img src={frFlag} alt="" className='flag-img'/> */}
                  <span>
                    {spanish ? "Alta adaptabilidad" : "High-adaptability"}
                  </span>
                </li>
                <li>
                  {/* <img src={frFlag} alt="" className='flag-img'/> */}
                  <span>{spanish ? "Trabajo en equipo" : "Teamwork"}</span>
                </li>
              </div>

              <div onClick={slideRight} className="arrow-wrapper right">
                <Icon.ArrowRight className="icon" />
              </div>
            </ul>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.7} speed={0.8}>
          <Technologies
            tecnologiesRef={tecnologiesRef}
            animatePage={animatePage}
            animationOff={animationOff}
            spanish={spanish}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={4.3} speed={0.5}>
          <Portfolio
            portfolioRef={portfolioRef}
            animatePage={animatePage}
            animationOff={animationOff}
            spanish={spanish}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={6.3} /* factor={0.3} */ speed={0.6}>
          <Contact
            contactRef={contactRef}
            animatePage={animatePage}
            animationOff={animationOff}
            spanish={spanish}
          />
        </ParallaxLayer>
        
        <ParallaxLayer offset={7}  speed={1} onClick={() => ref.current.scrollTo(0)} 
        style={{
          height: '3rem',
          position: 'absolute',
          bottom: '1rem'
      
          }}>
          <div className="icon-container" onClick={goUp}>
            <Icon.ArrowUp className="icon svg" />
          </div>
        </ParallaxLayer>

  
      </Parallax>

  
    </main>
  );
}

export default Home;
