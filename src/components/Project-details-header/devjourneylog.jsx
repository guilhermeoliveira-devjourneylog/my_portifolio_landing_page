import React from "react";
import Link from "next/link";

const ProjectDetailsHeader = () => {
  return (
    <section
      className="page-header proj-det bg-img parallaxie valign"
      style={{ backgroundImage: "url(/img/portfolio/project2/capa.png)" }}
      data-overlay-dark="4"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-9">
            <div className="cont">
              <h6>Web &amp; App Development</h6>
              <h2>Landing Page | Blog.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Client</h6>
              <p>
                <a href="https://devjourneylog.com/"target="_blank" rel="noopener noreferrer">devjourneylog.com</a>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Date</h6>
              <p>1 February 2023</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Categories</h6>
              <p>
                <Link href="/works/works-dark">Web Design </Link> ,
                <Link href="/works/works-dark">WordPress</Link> 
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Tags</h6>
              <p>
                <Link href="/works/works-dark">Dev Journey Log</Link> ,
                <Link href="/works/works-dark">Landing Page</Link> ,
                <Link href="/works/works-dark">Blog</Link> ,
                <Link href="/works/works-dark">Desktop</Link> ,
                <Link href="/works/works-dark">Mobile</Link> , 
                <Link href="/works/works-dark">CMS</Link> 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsHeader;
