import { SocialMediaData } from "../data/SocialMediaData";

import CV from "../media/CV.pdf";
import Resume from "../media/EnglishCV.pdf";
import downloadButton from "../media/downloadButton.svg";

function Contact({ spanish }) {
  return (
    <div className="contact-container  section">
      {spanish ? (
        <h1 className="title landing-text margin">
          Contáctame<br/><span><span></span>cuando gustes</span></h1>
      ) : (
        <h1 className="title landing-text margin">Feel free to contact me<br/><span><span></span>anytime</span></h1>
      )}
      <h1 className="title tec-title">
        {spanish ? "Estas son mis redes sociales" : "These are my social media"}
      </h1>
      <div className="social-media-container">
        {SocialMediaData.map((item, index) => (
          <ul className={item.divcName} key={index}>
            <a href={item.link} target="_blank" rel="noreferrer">
              <div className="social-wrapper">
                <li>
                  <img src={item.logo} alt="" className={item.imgcName} />
                </li>

                <div className="social">
                  <li className="social-name">
                    <p>{item.name}</p>
                  </li>

                  <li className="social-description">
                    <p>
                      {spanish
                        ? `${item.descriptionES}`
                        : `${item.descriptionEN}`}
                    </p>
                  </li>
                </div>
              </div>
            </a>
          </ul>
        ))}

        <ul className="social-media">
          <a
            href={spanish ? `${CV}` : `${Resume}`}
            className="download-button-link"
            download={spanish ? "CV - Jonny Zurita" : "Resume - Jonny Zurita"}
          >
            <div className="social-wrapper">
               <li>
              <img src={downloadButton} alt="" className="img" />
              </li>
              <div className="social">


              <li className='social-name' >
                        <p>{spanish ? "Curriculum Vitae" : "Resume"}</p>
              </li>

              <li className="social-description">
                    <p>
                      {spanish ? "Descarga mi currículum aquí" : "Download my resume!"}
                    </p>
              </li>
              </div>
            </div>
          </a>
        </ul>
      </div>

      {/*     <div className="img-wrapper">
        <div className="img-container">
          <img src={myImg} alt="" className="myImg" />
        </div>
      </div> */}
    </div>
  );
}

export default Contact;
