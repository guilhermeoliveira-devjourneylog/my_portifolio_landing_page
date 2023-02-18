import React from "react";

const ProjectDetailsIntroduction = () => {
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4>
                <span>01 </span> Introduction
              </h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text js-scroll__content">
              <p className="extra-text">
              Meu diário de bordo da exploração do universo da programação.
              </p>

              <ul className="smp-list mt-30">
                <a>Features:</a>
                <li>integration with Google Analytics</li>
                <li>Redirection of links to forms and social media</li>
                <li>share buttons</li>
              </ul>
              <ul className="smp-list mt-30">
                <a>Technologies:</a>
                <li>CMS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsIntroduction;
