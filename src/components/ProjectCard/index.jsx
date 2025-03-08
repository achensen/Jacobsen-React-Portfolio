import React from "react";
import "./style.css"; 

const ProjectCard = ({ title, image, repoLink }) => {
  return (
    <div className="projectCard">
      <a href={repoLink} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="projectImage" />
      </a>
      <h3>{title}</h3>
    </div>
  );
};

export default ProjectCard;
