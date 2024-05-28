<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React, { useEffect } from "react";
>>>>>>> ceb17002390be2d7952e5b6a300acb1e4056501a
import "./Main.css";
import { Link } from "react-router-dom";
import Profil from "../img/profil.jpg";
import ScrollReveal from "scrollreveal";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Main = () => {
<<<<<<< HEAD
  const [menuOpen, setMenuOpen] = useState(false);

=======
>>>>>>> ceb17002390be2d7952e5b6a300acb1e4056501a
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

<<<<<<< HEAD
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
=======
  return (
    <div className="container">
      <div className="container" id="header-container">
        <div className="header">
          <ul>
            <li>
              <Link className="router-link" to="/">
>>>>>>> ceb17002390be2d7952e5b6a300acb1e4056501a
                Anasayfa
              </Link>
            </li>
            <li>
<<<<<<< HEAD
              <Link className="router-link" to="/projeler" onClick={toggleMenu}>
=======
              <Link className="router-link" to="/projeler">
>>>>>>> ceb17002390be2d7952e5b6a300acb1e4056501a
                Projelerim
              </Link>
            </li>
            <li>
<<<<<<< HEAD
              <Link className="router-link" to="/hakkımda" onClick={toggleMenu}>
=======
              <Link className="router-link" to="/hakkımda">
>>>>>>> ceb17002390be2d7952e5b6a300acb1e4056501a
                Hakkımda
              </Link>
            </li>
            <li>
<<<<<<< HEAD
              <Link className="router-link" to="/Resume" onClick={toggleMenu}>
=======
              <Link className="router-link" to="/Resume">
>>>>>>> ceb17002390be2d7952e5b6a300acb1e4056501a
                CV
              </Link>
            </li>
          </ul>
        </div>
<<<<<<< HEAD
        <div className="hamburger-menu" onClick={toggleMenu} >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
=======
>>>>>>> ceb17002390be2d7952e5b6a300acb1e4056501a
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
<<<<<<< HEAD
            rel="noreferrer"
=======
>>>>>>> ceb17002390be2d7952e5b6a300acb1e4056501a
            className="animated-button"
            style={{ "--bg-color": "#148d8d" }}
          >
            <span>Bana Ulaş</span>
<<<<<<< HEAD
=======
            
>>>>>>> ceb17002390be2d7952e5b6a300acb1e4056501a
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
