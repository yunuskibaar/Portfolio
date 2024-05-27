import React from "react";
import { ReactDOM } from "react";
import CV from "../resume/cv.pdf"
import { Link } from "react-router-dom";
import "./Resume.css"
const Resume = () =>{
    
    return(
        <div>
            <div className="container" id="header-container">
          <div className="header">
          <ul>
              <li>
                <Link className="router-link" to="/">Anasayfa</Link>
              </li>
              <li>
                <Link className="router-link" to="/projeler">Projelerim</Link>
              </li>
              <li>
                <Link  className="router-link" to="/hakkımda">Hakkımda</Link>
              </li>
              <li>
                <Link  className="router-link" to="/Resume"> CV</Link>
              </li>
            </ul>
          </div>
          
        </div>
            
        <iframe className="resume" src={CV} width="100%" ></iframe>
         
        </div>
    )
}

export default Resume;