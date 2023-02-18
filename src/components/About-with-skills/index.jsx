import React from "react";
import heroSkillsProgress from "../../common/heroSkillsProgress";
import Split from "../Split";

const AboutWithSkills = () => {
  React.useEffect(() => {
    heroSkillsProgress();
  }, []);
  return (
    <div className="hero-sec section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cont">
              <div className="sub-title">
                <h6>About Me</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Split>
                <h3 className="main-title wow" data-splitting>
                  My mission is design develop the best Websites around.
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".5s">
                Hello! I’m Guilherme Oliveira. Com experiência de 1 ano e 5 meses 
                em desenvolvimento de aplicaçõe web e mobile. Tenho habilidades 
                sólidas em linguagens de programação como Java, Python e JavaScript, 
                bem como experiência em frameworks front-end como React e Angular. 
                Também tenho conhecimento profundo em banco de dados, incluindo MySQL, MongoDB e Firebase.
              </p>
              <p className="wow fadeInUp" data-wow-delay=".5s">
                Tenho a habilidade de trabalhar em projetos de ponta a ponta, desde o planejamento inicial até a implementação e manutenção.
              </p>
              <a href="/pdf/Currículo Front-end Guilherme Rodrigues Oliveira.pdf" className="simple-btn mt-40">
                Download C.V
              </a>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="skills-box full-width">
              <div className="skill-item">
                <h6 className="custom-font">UI / UX Design</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="45%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6 className="custom-font">Front-end</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="75%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6 className="custom-font">Back-end</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="50%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6 className="custom-font">CMS</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="90%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWithSkills;
