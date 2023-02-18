/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProjectDetailsImages = () => {
  return (
    <section className="projdtal">
      <h2 style={{display: 'none'}}> &nbsp; </h2>
      <div className="container-fluid">
        <div className="justified-gallery">
          <div className="row">
            <div className="col-md-3 pr-0">
              <a href="https://www.bybeet.com/"target="_blank" rel="noopener noreferrer">
                <img alt="" src="/img/portfolio/bybeet_landing_page/01.png" />
              </a>
            </div>
            <div className="col-md-3 pr-0">
              <a href="https://www.bybeet.com/"target="_blank" rel="noopener noreferrer">
                <img alt="" src="/img/portfolio/bybeet_landing_page/02.png" />
              </a>
            </div>

            <div className="col-md-3 pr-0">
              <a href="https://www.bybeet.com/"target="_blank" rel="noopener noreferrer">
                <img alt="" src="/img/portfolio/bybeet_landing_page/03.png" />
              </a>
            </div>
            <div className="col-md-3 pr-0">
              <a href="https://www.bybeet.com/"target="_blank" rel="noopener noreferrer">
                <img alt="" src="/img/portfolio/bybeet_landing_page/04.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsImages;
