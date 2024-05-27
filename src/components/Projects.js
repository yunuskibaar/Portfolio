import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./Projects.css";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import notebook1 from "../img/notPic1.png";
import notebook2 from "../img/notPic2.png";
import notebook3 from "../img/notPic3.png";
import white from "../img/white.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);

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

  const openSwiper = (images) => {
    setModalImages(images);
    setIsModalOpen(true);
  };

  const closeSwiper = () => {
    setIsModalOpen(false);
  };

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
          <div className="col-md-4" id="bir-kart">
            <ProjectCard
              key="a"
              className="project-card 1"
              cardTitle="Notebook App"
              cardDesc="React.js ile not tutma uygulamasıdır.Notlar isteğe bağlı olarak güncellenebilir veya silinebilir. Kategorilere göre de farklı şekilde renkler eklenmiştir."
              gitLink="https://github.com/yunuskibaar/Notebook-App"
              vercelLink="https://notebook-app-rose.vercel.app"
              imgSrc1={notebook1}
              imgSrc2={notebook2}
              imgSrc3={notebook3}
              openSwiper={openSwiper}
            />
          </div>
          <div className="col-md-4" id="iki-kart">
            <ProjectCard
              key="b"
              className="project-card"
              cardTitle="Proje 2"
              cardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia mi quis diam tincidunt, rhoncus lacinia nibh tristique."
              imgSrc1={white}
              imgSrc2={white}
              imgSrc3={white}
              openSwiper={openSwiper}
            />
          </div>
          <div className="col-md-4" id="üç-kart">
            <ProjectCard
              key="c"
              className="project-card"
              cardTitle="Proje 3"
              cardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia mi quis diam tincidunt, rhoncus lacinia nibh tristique."
              imgSrc1={white}
              imgSrc2={white}
              imgSrc3={white}
              openSwiper={openSwiper}
            />
          </div>
        </div>
        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-md-4" id="dört-kart">
            <ProjectCard
              key="d"
              className="project-card"
              cardTitle="Proje 4"
              cardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia mi quis diam tincidunt, rhoncus lacinia nibh tristique."
              imgSrc1={white}
              imgSrc2={white}
              imgSrc3={white}
              openSwiper={openSwiper}
            />
          </div>
          <div className="col-md-4" id="beş-kart">
            <ProjectCard
              key="e"
              className="project-card"
              cardTitle="Proje 5"
              cardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia mi quis diam tincidunt, rhoncus lacinia nibh tristique."
              imgSrc1={white}
              imgSrc2={white}
              imgSrc3={white}
              openSwiper={openSwiper}
            />
          </div>
          <div className="col-md-4" id="altı-kart">
            <ProjectCard
              key="f"
              className="project-card"
              cardTitle="Proje 6"
              cardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia mi quis diam tincidunt, rhoncus lacinia nibh tristique."
              imgSrc1={white}
              imgSrc2={white}
              imgSrc3={white}
              openSwiper={openSwiper}
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeSwiper}>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {modalImages.map((src, index) => (
              <SwiperSlide key={index}>
                <img src={src} alt={`Slide ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Projects;
