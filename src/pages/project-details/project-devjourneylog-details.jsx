import React from 'react'
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import ProjectDetailsHeader from "../../components/Project-details-header/devjourneylog";
import ProjectDetailsIntroduction from "../../components/Project-details-introduction/devjourneylog";
import ProjectDetailsImages from "../../components/Project-details-images/devjourneylog";
import ProjectDetailsDescription from "../../components/Project-details-description/devjourneylog";
import ProjectDetailsVideo from "../../components/Project-details-video/devjourneylog";
import NextProject from "../../components/Next-project/devjourneylog";
import SmallFooter from "../../components/Small-footer";

const ProjectDevJourneyLogDetails = () => {
    const navbarRef = React.useRef(null);
    const logoRef = React.useRef(null);
    React.useEffect(() => {
      var navbar = navbarRef.current,
        logo = logoRef.current;
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          navbar.classList.add("nav-scroll");
        } else {
          navbar.classList.remove("nav-scroll");
        }
      });
    }, [navbarRef]);
    return (
      <DarkTheme>
        <Navbar nr={navbarRef} lr={logoRef} />
        <ProjectDetailsHeader />
        <ProjectDetailsIntroduction />
        <ProjectDetailsImages />
        <ProjectDetailsDescription />
        <ProjectDetailsVideo
          videoBackground="/img/portfolio/project2/bg.jpg"
          videoType="vimeo"
          videoId={127203262}
        />
        <NextProject
          projectImage="/img/portfolio/project1/next.png"
          projectTitle="view next"
        />
        <SmallFooter />
      </DarkTheme>
    );
}

export default ProjectDevJourneyLogDetails
