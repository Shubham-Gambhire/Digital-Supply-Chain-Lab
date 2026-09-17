import React from 'react';
import { Link } from 'react-router-dom';
import ScorTag from './ScorTag';
import './DemoToolbar.css';

const DemoToolbar = ({ project }) => {
  if (!project) return null;

  return (
    <div className="demo-toolbar">
      <div className="demo-toolbar-left">
        <Link to={`/projects/${project.id}`} className="demo-back-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span className="desktop-only">Back to Project</span>
        </Link>
      </div>
      
      <div className="demo-toolbar-center">
        <h2 className="demo-toolbar-title">{project.title}</h2>
        <ScorTag function={project.scor} />
      </div>

      <div className="demo-toolbar-right" aria-hidden="true" />
    </div>
  );
};

export default DemoToolbar;
