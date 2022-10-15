import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div className="bgImage" />
      <h1 style={{fontFamily:'Silkscreen, cursive'}}> {name} </h1>
    </div>
  );
}

export default ProjectItem;