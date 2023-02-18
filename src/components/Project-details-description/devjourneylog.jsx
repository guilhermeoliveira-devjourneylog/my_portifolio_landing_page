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
              O Dev Journey Log é um site personalizado que reúne minhas jornadas 
              como desenvolvedor. Com categorias de front-end, back-end, cyber-security, 
              data-science, devops, UX & Design, mobile e inovação. A intenção é criar uma 
              comunidade onde eu posso ajudar outros desenvolvedores e ser reconhecido 
              por minha colaboração e evolução.
              </p>
              <p className="extra-text">
              O site é composto por uma página inicial, blog, sobre e contato, e vários links 
              para mídias sociais relevantes para captura de leads. O desenvolvimento do site 
              envolveu a adaptação ao uso de plugins e a edição do template escolhido, mas o 
              resultado final é uma plataforma atrativa e informativa que apresenta meus projetos 
              de uma forma impactante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsDescription;
