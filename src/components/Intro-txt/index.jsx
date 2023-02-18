import React from "react";

const IntroTxt = ({subBG}) => {
  return (
    <header
      className={`freelancer ${subBG ? "sub-bg" : ""} valign bg-img parallaxie`}
      /* style={{ backgroundImage: "url(/img/slid/freelancer.jpg)" }} */
      style={{ backgroundImage: "url(/img/slid/me_in_cover_1918x1281.png)" }} 
      data-overlay-dark="4"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cont">
              <h6>Hello, I&apos;m</h6>
              <h1>Guilherme Oliveira</h1>
              <h4>Fullstack Web Developer</h4>
              {/* <h4>UI &amp; UX Designer</h4> */}
              <div className="social-icon">
                <a href="#0" className="icon">
                  <i className="fab fa-medium"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default IntroTxt;
