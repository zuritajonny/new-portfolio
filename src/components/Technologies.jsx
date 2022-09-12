import htmlIcon from "../media/htmlIcon.svg";
import cssIcon from "../media/cssIcon.svg";
import jsIcon from "../media/jsIcon.svg";
import tsIcon from "../media/tsIcon.svg";
import reactIcon from "../media/reactIcon.svg";
import reduxIcon from "../media/reduxIcon.svg";
import gitIcon from "../media/gitIcon.svg";
import psIcon from "../media/psIcon.svg";
import figmaIcon from "../media/figmaIcon.svg";
import videoIcon from "../media/videoIcon.svg";
import pdesignIcon from "../media/pdesignIcon.svg";

function AboutMe({
  animatePage,
  animationOff,
  spanish,
  isScrollLocked,
  buttonTimer,
  goBackButton,
  tecnologiesRef
}) {
  return (
    <div
      ref={tecnologiesRef}
      className="technologies-container section"
    >
          {spanish ? (
              <h1 className="title landing-text margin">La práctica lo es <br/><span> <span></span>todo</span></h1>
            ) : (
              <h1 className="title landing-text margin">Practice is <br/><span><span></span>everything</span></h1>
            )}
      <h1 className="title tec-title">
        {spanish ? "¿Con cuáles tecnologías he trabajado?" : "Tecnologies I have used over the years"}
      </h1>
      <div className="technologies-wrapper">
        <ul className="technologies-list">
      {/*     <li>
            <span>{spanish ? "Conocimientos base" : "Basic foundation"}</span>
          </li> */}
          <li>
            <img src={htmlIcon} className="img" alt="" />
            <span>HTML5</span>
          </li>
          <li>
            {" "}
            <img src={cssIcon} className="img" alt="" />
            CSS3
          </li>
          <li>
            <img src={jsIcon} className="img" alt="" />
            Javascript
          </li>
          <li>
            <img src={tsIcon} className="img" alt="" />
            Typescript
          </li>
        </ul>

        <ul className="technologies-list">
          {/* <li>
            <span>{spanish ? "Librerias" : "Libraries"}</span>
          </li> */}
          <li>
            <img src={reactIcon} className="img" alt="" />
            React
          </li>
        </ul>

        <ul className="technologies-list">
          {/* <li>
            <span>
              {spanish ? "Manejo de estado" : "Global state management"}
            </span>
          </li> */}
          <li>
            <img src={reduxIcon} className="img" alt="" />
            Redux
          </li>
        </ul>

        <ul className="technologies-list">
         {/*  <li>
            <span>
              {spanish ? "Manejo de versiones" : "Version management"}
            </span>
          </li> */}
          <li>
            <img src={gitIcon} className="img" alt="" />
            Git
          </li>
        </ul>

        <ul className="technologies-list">
        {/*   <li>
            <span>{spanish ? "Conocimientos extra" : "Extra skills"}</span>
          </li> */}
          <li>
            <img src={pdesignIcon} className="img" alt="" />
            {spanish ? "Diseño de producto" : "Product design"}
          </li>
          <li>
            <img src={videoIcon} className="img" alt="" />
            {spanish ? "Producción de video" : "Video production"}
          </li>
          <li>
            <img src={psIcon} className="img" alt="" />
            {spanish ? "Photoshop" : "Photoshop"}
          </li>
          <li>
            <img src={figmaIcon} className="img" alt="" />
            Figma
          </li>
        </ul>

        {isScrollLocked && buttonTimer && goBackButton}
      </div>
    </div>
  );
}

export default AboutMe;
