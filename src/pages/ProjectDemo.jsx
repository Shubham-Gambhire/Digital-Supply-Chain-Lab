import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import DemoToolbar from '../components/DemoToolbar';
import './ProjectDemo.css';

const ProjectDemo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="container-prose demo-not-found">
        <h2>Project not found</h2>
        <button className="button-secondary" onClick={() => navigate('/projects')}>
          Back to Projects
        </button>
      </div>
    );
  }

  if (!project.demoUrl) {
    return (
      <div className="container-prose demo-not-found">
        <DemoToolbar project={project} />
        <div className="demo-empty-state">
          <h3>No live demo available</h3>
          <p>This project does not currently have a live interactive demo.</p>
          <button className="button-secondary" onClick={() => navigate(`/projects/${id}`)}>
            Return to Project Details
          </button>
        </div>
      </div>
    );
  }

  const handleIframeLoad = () => {
    setLoading(false);
  };

  const handleIframeError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <div className="project-demo-page">
      <DemoToolbar project={project} />
      
      <div className="demo-container">
        {loading && !error && (
          <div className="demo-loading">
            <div className="spinner"></div>
            <p>Loading demo...</p>
          </div>
        )}
        
        {error && (
          <div className="demo-error">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <h3>Unable to embed demo</h3>
            <p>This interactive prototype could not be loaded inside the lab page. Please try again shortly.</p>
          </div>
        )}
        
        <iframe
          src={project.demoUrl}
          title={`${project.title} Demo`}
          className="demo-iframe"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          allowFullScreen
          // Add allow properties as needed, e.g., allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  );
};

export default ProjectDemo;
