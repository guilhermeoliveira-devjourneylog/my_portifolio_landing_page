import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SkillsCircle = ({ subBG, theme }) => {
  const cpStyle = {
    path: {
      stroke: "#75dab4",
    },
    trail: {
      stroke: theme ? (theme == "dark" ? "#0f1218" : "#e5e5e5") : "",
    },
    text: {
      fill: theme ? (theme == "dark" ? "#ffffff" : "#4e4e4e") : "",
      fontSize: "16px",
    },
  };
  return (
    <section
      className={`skills-circle pt-50 pb-50 ${
        subBG ? "sub-bg" : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="">
              <div className="row">
                <div className="col-lg-3 mb-20">
                  <div className="item wow fadeInLeft" data-wow-delay=".6">
                    <div className="skill">
                      <CircularProgressbar
                        value={45}
                        strokeWidth={2}
                        text={`${45}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>UI/UX Design</span>
                      <h6>Figma</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-20">
                  <div className="item wow fadeInLeft" data-wow-delay=".3">
                    <div className="skill">
                      <CircularProgressbar
                        value={95}
                        strokeWidth={2}
                        text={`${95}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Front-end</span>
                      <h6>HTML</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-20">
                  <div className="item wow fadeInLeft" data-wow-delay=".6">
                    <div className="skill">
                      <CircularProgressbar
                        value={75}
                        strokeWidth={2}
                        text={`${75}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Front-end</span>
                      <h6>CSS</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-20">
                  <div className="item wow fadeInLeft" data-wow-delay=".3">
                    <div className="skill">
                      <CircularProgressbar
                        value={75}
                        strokeWidth={2}
                        text={`${75}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Front-end</span>
                      <h6>Sass</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-20">
                  <div className="item wow fadeInLeft" data-wow-delay=".6">
                    <div className="skill">
                      <CircularProgressbar
                        value={75}
                        strokeWidth={2}
                        text={`${75}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Front-end</span>
                      <h6>Bootstrap</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-20">
                  <div className="item wow fadeInLeft" data-wow-delay=".3">
                    <div className="skill">
                      <CircularProgressbar
                        value={75}
                        strokeWidth={2}
                        text={`${75}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Front-end</span>
                      <h6>React</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-20">
                  <div className="item wow fadeInLeft" data-wow-delay=".6">
                    <div className="skill">
                      <CircularProgressbar
                        value={75}
                        strokeWidth={2}
                        text={`${75}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Front-end</span>
                      <h6>Angular</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-20">
                  <div className="item wow fadeInLeft" data-wow-delay=".3">
                    <div className="skill">
                      <CircularProgressbar
                        value={75}
                        strokeWidth={2}
                        text={`${75}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Front-end</span>
                      <h6>JavaScript</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-20">
                  <div className="item wow fadeInLeft" data-wow-delay=".6">
                    <div className="skill">
                      <CircularProgressbar
                        value={45}
                        strokeWidth={2}
                        text={`${45}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Front-end</span>
                      <h6>TypeScript</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-20">
                  <div className="item wow fadeInLeft" data-wow-delay=".3">
                    <div className="skill">
                      <CircularProgressbar
                        value={45}
                        strokeWidth={2}
                        text={`${45}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Front-end</span>
                      <h6>C#</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-20">
                  <div className="item wow fadeInLeft" data-wow-delay=".6">
                    <div className="skill">
                      <CircularProgressbar
                        value={45}
                        strokeWidth={2}
                        text={`${45}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Front-end</span>
                      <h6>.NET</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-20">
                  <div className="item wow fadeInLeft" data-wow-delay=".3">
                    <div className="skill">
                      <CircularProgressbar
                        value={45}
                        strokeWidth={2}
                        text={`${45}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Front-end</span>
                      <h6>jQuery</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-20">
                  <div className="item wow fadeInLeft" data-wow-delay=".6">
                    <div className="skill">
                      <CircularProgressbar
                        value={75}
                        strokeWidth={2}
                        text={`${75}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Back-end</span>
                      <h6>PHP</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-20">
                  <div className="item wow fadeInLeft" data-wow-delay=".3">
                    <div className="skill">
                      <CircularProgressbar
                        value={25}
                        strokeWidth={2}
                        text={`${25}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Back-end</span>
                      <h6>Python</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-20">
                  <div className="item wow fadeInLeft" data-wow-delay=".6">
                    <div className="skill">
                      <CircularProgressbar
                        value={25}
                        strokeWidth={2}
                        text={`${25}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Back-end</span>
                      <h6>Java</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-20">
                  <div className="item wow fadeInLeft" data-wow-delay=".3">
                    <div className="skill">
                      <CircularProgressbar
                        value={50}
                        strokeWidth={2}
                        text={`${50}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Back-end</span>
                      <h6>Node</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-20">
                  <div className="item wow fadeInLeft" data-wow-delay=".6">
                    <div className="skill">
                      <CircularProgressbar
                        value={75}
                        strokeWidth={2}
                        text={`${75}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Back-end</span>
                      <h6>Mongo DB</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-20">
                  <div className="item wow fadeInLeft" data-wow-delay=".3">
                    <div className="skill">
                      <CircularProgressbar
                        value={50}
                        strokeWidth={2}
                        text={`${50}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Back-end</span>
                      <h6>MyQSL</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-20">
                  <div className="item wow fadeInLeft" data-wow-delay=".6">
                    <div className="skill">
                      <CircularProgressbar
                        value={75}
                        strokeWidth={2}
                        text={`${75}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Back-end</span>
                      <h6>Postman</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-20">
                  <div className="item wow fadeInLeft" data-wow-delay=".3">
                    <div className="skill">
                      <CircularProgressbar
                        value={75}
                        strokeWidth={2}
                        text={`${75}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Back-end</span>
                      <h6>PHPMyAdmin</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-20">
                  <div className="item wow fadeInLeft" data-wow-delay=".3">
                    <div className="skill">
                      <CircularProgressbar
                        value={75}
                        strokeWidth={2}
                        text={`${75}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>CMS</span>
                      <h6>WordPress</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-20">
                  <div className="item wow fadeInLeft" data-wow-delay=".3">
                    <div className="skill">
                      <CircularProgressbar
                        value={25}
                        strokeWidth={2}
                        text={`${25}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Deploy</span>
                      <h6>Docker</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-20">
                  <div className="item wow fadeInLeft" data-wow-delay=".3">
                    <div className="skill">
                      <CircularProgressbar
                        value={25}
                        strokeWidth={2}
                        text={`${25}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Deploy</span>
                      <h6>Google Cloud Platform</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-20">
                  <div className="item wow fadeInLeft" data-wow-delay=".3">
                    <div className="skill">
                      <CircularProgressbar
                        value={25}
                        strokeWidth={2}
                        text={`${25}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Deploy</span>
                      <h6>Azure</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-20">
                  <div className="item wow fadeInLeft" data-wow-delay=".3">
                    <div className="skill">
                      <CircularProgressbar
                        value={25}
                        strokeWidth={2}
                        text={`${25}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Deploy</span>
                      <h6>AWS</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-20">
                  <div className="item wow fadeInLeft" data-wow-delay=".3">
                    <div className="skill">
                      <CircularProgressbar
                        value={25}
                        strokeWidth={2}
                        text={`${25}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Deploy</span>
                      <h6>Apache</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-20">
                  <div className="item wow fadeInLeft" data-wow-delay=".3">
                    <div className="skill">
                      <CircularProgressbar
                        value={25}
                        strokeWidth={2}
                        text={`${25}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Deploy</span>
                      <h6>Nginx</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsCircle;
