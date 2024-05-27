import React, { useEffect, useState } from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import Profil from "../img/profil.jpg";
import ScrollReveal from "scrollreveal";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    ScrollReveal().reveal(".Profil", {
      origin: "left",
      distance: "100px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".me", {
      origin: "right",
      distance: "100px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
    });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container">
      <div className="container" id="header-container">
        <div className={`header ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link className="router-link" to="/" onClick={toggleMenu}>
                Anasayfa
              </Link>
            </li>
            <li>
              <Link className="router-link" to="/projeler" onClick={toggleMenu}>
                Projelerim
              </Link>
            </li>
            <li>
              <Link className="router-link" to="/hakkımda" onClick={toggleMenu}>
                Hakkımda
              </Link>
            </li>
            <li>
              <Link className="router-link" to="/Resume" onClick={toggleMenu}>
                CV
              </Link>
            </li>
          </ul>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu} >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      <div id="body-container">
        <img className="Profil" src={Profil} alt="Profil" />
        <div className="me">
          <h1 className="name">Yunus KİBAR</h1>
          <h2 className="data-text">Software Engineer </h2>
        </div>
      </div>

      <div className="proverb">
        <span >
          "Those who don't move, don't notice their chains."
        </span>
      </div>

      <div className="content-container">
        <div className="content">
          <a
            href="https://wa.me/+905060566567"
            target="_blank"
            rel="noreferrer"
            className="animated-button"
            style={{ "--bg-color": "#148d8d" }}
          >
            <span>Bana Ulaş</span>
          </a>
        </div>
      </div>

      <div className="footer">
        <div className="content-icon"></div>
        <div className="footer-text">2024 Yunus KİBAR</div>
      </div>
    </div>
  );
};

export default Main;