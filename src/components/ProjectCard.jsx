import React from 'react';
import { Link } from 'react-router-dom';
import ScorTag from './ScorTag';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="project-card">
      <div className="project-card-header">
        <h2 className="project-card-title">{project.title}</h2>
        <ScorTag function={project.scor} />
      </div>
      
      <p className="project-card-tagline">{project.tagline}</p>
      
      <div className="project-card-footer">
        <div className="project-card-tech">
          {project.technologies.slice(0, 2).map(tech => (
            <span key={tech} className="tech-pill">{tech}</span>
          ))}
          {project.technologies.length > 2 && (
            <span className="tech-pill">+{project.technologies.length - 2}</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
