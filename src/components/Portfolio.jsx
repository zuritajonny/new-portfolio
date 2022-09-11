function Portfolio({ animatePage, animationOff, spanish,portfolioRef }) {
  return (
    <div
      ref={portfolioRef}
      className="full-portfolio-container section"
    > 
    {spanish ? (
      <h1 className="title landing-text margin"><span> <span></span>Mi portafolio </span></h1>
    ) : (
      <h1 className="title landing-text margin"><span><span></span>My portfolio</span></h1>
    )}
      
      <h1 className="title tec-title">
        {spanish
          ? "Estos son algunos de mis trabajos previos"
          : "These are some of my previous works"}
      </h1>
      <div className="work-wrapper">
        <div className="work-container a ">
          <div className="port-img-container">
            <img src="myWork/ecommerce.png" className="port-img" alt="" />
          </div>
          <div className="work-menu">
            <span className="language-info">
              {spanish ? "Tienda digital" : "E-commerce"}
            </span>
            <button className="preview-button">
              <a
                href="https://jonnystore.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                {spanish ? "Abrir" : "Open"}
              </a>
            </button>
          </div>
        </div>

        <div className="work-container b ">
          <div className="port-img-container">
            <img src="myWork/3.png" className="port-img" alt="" />
          </div>
          <div className="work-menu">
            <span className="language-info">
              {spanish ? "Tienda de boletos de avión" : "Plane tickets company"}
            </span>
          </div>
        </div>

        <div className="work-container c">
          <div className="port-img-container">
            <img src="myWork/votingsystem.png" className="port-img" alt="" />
          </div>
          <div className="work-menu">
            <span className="language-info">
              {spanish ? "Sistema de votos" : "Voting system"}
            </span>
            <button className="preview-button">
              <a
                href="https://jonnyvotingsystem.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                {spanish ? "Abrir" : "Open"}
              </a>
            </button>
          </div>
        </div>

        <div className="work-container d">
          <div className="port-img-container">
            <img src="myWork/2.png" className="port-img" alt="" />
          </div>

          <div className="work-menu">
            <span className="language-info">
              {spanish ? "Periodico digital" : "Digital Newspaper"}
            </span>
          </div>
        </div>

        <div className="work-container e">
          <div className="port-img-container">
            <img src="myWork/9.jpg" className="port-img" alt="" />
          </div>
          <div className="work-menu">
            <span className="language-info">
              {spanish ? "Portada de álbum" : "Album cover art"}
            </span>
          </div>
        </div>

        <div className="work-container f">
          <div className="port-img-container">
            <img src="myWork/5.png" className="port-img" alt="" />
          </div>
          <div className="work-menu">
            <span className="language-info">
              {spanish ? "Portada de un single" : "Cover art of a song"}
            </span>
          </div>
        </div>

        <div className="work-container g">
          <div className="port-img-container">
            <img src="myWork/6.png" className="port-img" alt="" />
          </div>
          <div className="work-menu">
            <span className="language-info">
              {spanish ? "Portada de un single" : "Cover art of a single"}
            </span>
          </div>
        </div>

        <div className="work-container h ">
          <div className="port-img-container">
            <img src="myWork/1.png" className="port-img" alt="" />
          </div>
          <div className="work-menu">
            <span className="language-info">
              {spanish ? "Tienda de lentes" : "Glasses boutique"}
            </span>
          </div>
        </div>

        <div className="work-container i">
          <div className="port-img-container">
            <img src="myWork/44.jpg" className="port-img" alt="" />
          </div>
          <div className="work-menu">
            <span className="language-info">
              {spanish ? "Artwork de un single" : "Single Artwork"}
            </span>
          </div>
        </div>

        <div className="work-container j">
          <div className="port-img-container">
            <img src="myWork/4.png" className="port-img" alt="" />
          </div>
          <div className="work-menu">
            <span className="language-info">
              {spanish ? "Prelanzamiento de videojuego" : "Game preview"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
