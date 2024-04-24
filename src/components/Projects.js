import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./Projects.css";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

import white from "../img/white.jpg"

const Projects = () => {
  useEffect(() => {
    ScrollReveal().reveal('#bir-kart', {
      origin: 'bottom',
      distance: '50px',
      duration: 100,
      delay: 200,
      easing: 'ease-in-out',
    });
    ScrollReveal().reveal('#iki-kart', {
      origin: 'bottom',
      distance: '50px',
      duration: 175,
      delay: 200,
      easing: 'ease-in-out',
    });
    ScrollReveal().reveal('#üç-kart', {
      origin: 'bottom',
      distance: '50px',
      duration: 250,
      delay: 300,
      easing: 'ease-in-out',
    });
    ScrollReveal().reveal('#dört-kart', {
      origin: 'bottom',
      distance: '50px',
      duration: 325,
      delay: 300,
      easing: 'ease-in-out',
    });
    ScrollReveal().reveal('#beş-kart', {
      origin: 'bottom',
      distance: '50px',
      duration: 400,
      delay: 300,
      easing: 'ease-in-out',
    });
    ScrollReveal().reveal('#altı-kart', {
      origin: 'bottom',
      distance: '50px',
      duration: 475,
      delay: 300,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="container">
      <div className="container" id="header-container">
        <div className="header">
          <ul>
            <li><Link className="router-link" to="/">Anasayfa</Link></li>
            <li><Link className="router-link" to="/projeler">Projelerim</Link></li>
            <li><Link className="router-link" to="/hakkımda">Hakkımda</Link></li>
            <li><Link className="router-link" to="/Resume">CV</Link></li>
          </ul>
        </div>
      </div>

      <div className="container" id="aa">
        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-md-4" id="bir-kart" >
            <ProjectCard
              key="a"
              className="project-card 1" 
              cardTitle="Proje 1"
              cardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia mi quis diam tincidunt, rhoncus lacinia nibh tristique."
              imgSrc1={white}
              imgSrc2={white}
              imgSrc3={white}
            />
          </div>
          <div className="col-md-4" id="iki-kart" >
            <ProjectCard
              key="b"
              className="project-card"
              cardTitle="Proje 2"
              cardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia mi quis diam tincidunt, rhoncus lacinia nibh tristique."
              imgSrc1={white}
              imgSrc2={white}
              imgSrc3={white}
            />
          </div>
          <div className="col-md-4 " id="üç-kart"  >
            <ProjectCard
              key="c"
              className="project-card"
              cardTitle="Proje 3"
              cardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia mi quis diam tincidunt, rhoncus lacinia nibh tristique."
              imgSrc1={white}
              imgSrc2={white}
              imgSrc3={white}
            />
          </div>
        </div>
        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-md-4" id="dört-kart" >
            <ProjectCard
              key="d"
              className="project-card"
              cardTitle="Proje 4"
              cardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia mi quis diam tincidunt, rhoncus lacinia nibh tristique."
              imgSrc1={white}
              imgSrc2={white}
              imgSrc3={white}
            />
          </div>
          <div className="col-md-4" id="beş-kart" >
            <ProjectCard
              key="e"
              className="project-card"
              cardTitle="Proje 5"
              cardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia mi quis diam tincidunt, rhoncus lacinia nibh tristique."
              imgSrc1={white}
              imgSrc2={white}
              imgSrc3={white}
            />
          </div>
          <div className="col-md-4 " id="altı-kart" >
            <ProjectCard
              key="f"
              className="project-card"
              cardTitle="Proje 6"
              cardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia mi quis diam tincidunt, rhoncus lacinia nibh tristique."
              imgSrc1={white}
              imgSrc2={white}
              imgSrc3={white}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
