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
                      onClick={() => props.openSwiper([props.imgSrc1, props.imgSrc2, props.imgSrc3])}
                    />
                  </li>
                </div>
                <div className="col">
                  <li>
                    <img
                      src={props.imgSrc2}
                      className="img-fluid"
                      alt="Profil"
                      onClick={() => props.openSwiper([props.imgSrc1, props.imgSrc2, props.imgSrc3])}
                    />
                  </li>
                </div>
                <div className="col">
                  <li>
                    <img
                      src={props.imgSrc3}
                      className="img-fluid"
                      alt="Profil"
                      onClick={() => props.openSwiper([props.imgSrc1, props.imgSrc2, props.imgSrc3])}
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
            <h6 className="stack-text">
              <span className="span-text" style={{ fontSize: "25px" }}>STACK: </span>
            </h6>
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
    </div>
  );
};

export default ProjectCard;
