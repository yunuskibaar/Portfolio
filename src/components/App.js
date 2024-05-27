import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Project from "./Projects";
import About from "./About";
import Resume from "./Resume";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projeler" element={<Project />} />
          <Route path="/hakkımda" element={<About/>} />
          <Route path="/Resume" element={<Resume/>} >
          </Route>
        </Routes>
        <div className="container">
          <div className="row">
          
            
            
       
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
