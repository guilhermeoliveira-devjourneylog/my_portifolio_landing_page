/* eslint-disable @next/next/no-img-element */
import React from "react";
import featuresEffect from "../../common/featuresEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import Split from "../Split";

const MinimalArea = () => {
  React.useEffect(() => {
    featuresEffect();
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/min-area.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  About us.
                </h4>
              </Split>

              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                Com experiência de 1 ano e 5 meses em desenvolvimento de aplicaçõe web e mobile. 
                Tenho habilidades sólidas em linguagens de programação como Java, Python e JavaScript, 
                bem como experiência em frameworks front-end como React e Angular. Também tenho conhecimento 
                profundo em banco de dados, incluindo MySQL, MongoDB e Firebase.
                </p>
                <p className="wow txt words chars splitting" data-splitting>        
                Tenho a habilidade de trabalhar em projetos de ponta a ponta, desde o planejamento inicial 
                até a implementação e manutenção.
                </p>
              </Split>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> Our Mission
                  </h6>
                  <p>
                  Fornecer soluções de desenvolvimento de alta qualidade que atendam às necessidades 
                  específicas de cada cliente, garantindo uma experiência de usuário incrível e satisfatória.                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> Our Goals
                  </h6>
                  <p>
                  Ser reconhecido como um dos melhores desenvolvedores da indústria, 
                  oferecendo soluções inovadoras e eficientes que maximizem o valor para os clientes.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Why Us?
                  </h6>
                  <p>
                  Qualidade, Inovação, Integridade, Colaboração e Foco no Cliente.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
