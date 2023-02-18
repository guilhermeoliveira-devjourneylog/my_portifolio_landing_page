import React from "react";

const ProjectDetailsDescription = () => {
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4>
                <span>02 </span> Description
              </h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8 mb-30">
            <div className="text">
              <p className="extra-text">
               O bybeet landing page é uma plataforma de informação sobre a startup, 
               construída com HTML, CSS, JavaScript e Bootstrap. Com uma interface atraente e 
               intuitiva, o site destaca as principais funcionalidades da empresa e apresenta 
               links para futuras features.
              </p>
              <p className="extra-text">A principal funcionalidade do site é a captura de leads e coleta de dados, que é 
                realizada por meio do preenchimento de um formulário por clientes e produtores. 
                Com estes dados segmentamos e  validamos ideias eficientes para construção de iniciativas 
                da startup.
              </p>
              <p className="extra-text">
              O site é uma ferramenta valiosa para a equipe de marketing da bybeet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsDescription;
