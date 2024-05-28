<<<<<<< HEAD
import React from "react";
import "./ProjectCard.css";
import { FaJs, FaCss3, FaGithub, FaReact, FaSearch } from "react-icons/fa";

const ProjectCard = (props) => {
  return (
    <div className="projects">
      <div className="card">
        <div className="card-header">
          <h3 className="title">{props.cardTitle}</h3>
          <div className="icons">
            <a href={props.vercelLink} target="blank">
              <FaSearch size={"25px"} style={{ color: "grey" }} />
            </a>
            <a style={{ marginLeft: "7px" }} href={props.gitLink} target="blank">
=======
import React, { useEffect } from "react";
import "./ProjectCard.css";
import { FaJs, FaCss3, FaGithub, FaReact,FaSearch } from "react-icons/fa";



const ProjectCard = (props) => {
  
 
  return (
    <div className="projects">
      <div  className="card">
        <div className="card-header">
          <h3 className="title">{props.cardTitle}</h3>
          <div className="icons">
          <a href="https://vercel.com/" target="blank">
              <FaSearch  size={"25px"} style={{ color: "grey" }} />
            </a>
            <a style={{marginLeft:"7px"}} href="https://github.com/yunuskibar" target="blank">
>>>>>>> ceb17002390be2d7952e5b6a300acb1e4056501a
              <FaGithub size={"25px"} style={{ color: "grey" }} />
            </a>
          </div>
        </div>

        <div className="card-body">
          <ul>
            <div className="row" id="card-row">
              <div className="image-container">
                <div className="col">
                  <li>
                    <img
                      src={props.imgSrc1}
                      className="img-fluid"
                      alt="Profil"
<<<<<<< HEAD
                      onClick={() => props.openSwiper([props.imgSrc1, props.imgSrc2, props.imgSrc3])}
=======
                      
>>>>>>> ceb17002390be2d7952e5b6a300acb1e4056501a
                    />
                  </li>
                </div>
                <div className="col">
                  <li>
                    <img
                      src={props.imgSrc2}
                      className="img-fluid"
                      alt="Profil"
<<<<<<< HEAD
                      onClick={() => props.openSwiper([props.imgSrc1, props.imgSrc2, props.imgSrc3])}
=======
                     
>>>>>>> ceb17002390be2d7952e5b6a300acb1e4056501a
                    />
                  </li>
                </div>
                <div className="col">
                  <li>
                    <img
                      src={props.imgSrc3}
                      className="img-fluid"
                      alt="Profil"
<<<<<<< HEAD
                      onClick={() => props.openSwiper([props.imgSrc1, props.imgSrc2, props.imgSrc3])}
=======
                     
>>>>>>> ceb17002390be2d7952e5b6a300acb1e4056501a
                    />
                  </li>
                </div>
              </div>
            </div>
          </ul>
          <div className="CardDesc">
            <span>{props.cardDesc}</span>
          </div>

          <div className="Stack">
<<<<<<< HEAD
            <h6 className="stack-text">
              <span className="span-text" style={{ fontSize: "25px" }}>STACK: </span>
            </h6>
=======
            <h6 className="stact-text">
              <span  className="span-text" style={{ fontSize: "25px" }}>STACK: </span>
            </h6>

>>>>>>> ceb17002390be2d7952e5b6a300acb1e4056501a
            <ul className="stack-list">
              <li>
                <FaCss3 size={"30px"} style={{ color: "#148d8d" }} />
              </li>
              <li>
                <FaJs size={"30px"} style={{ marginLeft: "10px", color: "#148d8d" }} />
              </li>
              <li>
                <FaReact size={"30px"} style={{ marginLeft: "10px", color: "#148d8d" }} />
              </li>
            </ul>
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======

      
>>>>>>> ceb17002390be2d7952e5b6a300acb1e4056501a
    </div>
  );
};

export default ProjectCard;
