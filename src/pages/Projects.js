import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import { useEffect } from "react";

import "../styles/Project.css";

function Projects() {

  return (
    <div className="projects">
      <h1 style={{fontFamily:'Silkscreen, cursive'}} > My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project ,i) => {
          return (
            <ProjectItem id={i} name={project.name}   />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;