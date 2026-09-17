import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import ScorTag from '../components/ScorTag';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);
  const shots = project?.prototype?.screenshots || [];
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const isOpen = lightboxIndex !== null;

  const close = useCallback(() => setLightboxIndex(null), []);
  const step = useCallback((delta) => {
    setLightboxIndex((i) => (i === null ? i : (i + delta + shots.length) % shots.length));
  }, [shots.length]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, step]);

  if (!project) {
    return (
      <div className="container-prose not-found">
        <h2>Project not found</h2>
        <button className="button-secondary" onClick={() => navigate('/projects')}>
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <article className="project-detail container-prose">
      <div className="back-nav">
        <Link to="/projects" className="back-link">
          &larr; Back to Projects
        </Link>
      </div>

      <header className="project-hero">
        <h1 className="project-title">{project.title}</h1>
        <p className="project-tagline">{project.tagline}</p>
        
        <div className="project-meta">
          <ScorTag function={project.scor} />
          {project.technologies && project.technologies.map(tech => (
            <span key={tech} className="tech-pill-detail font-mono">{tech}</span>
          ))}
        </div>
      </header>

      <section className="project-section">
        <h2 className="section-heading">Business Problem</h2>
        <p>{project.businessProblem || "Content pending."}</p>
      </section>

      <section className="project-section decision-block">
        <h2 className="section-heading">Decision Explored</h2>
        <p><strong>{project.decisionExplored || "Content pending."}</strong></p>
      </section>

      <section className="project-section">
        <h2 className="section-heading">Approach</h2>
        <div className="approach-content">
          <h3>Business Logic</h3>
          <p>{project.approach?.businessLogic || "Content pending."}</p>
          
          <h3>Technical Implementation</h3>
          <p>{project.approach?.technicalImplementation || "Content pending."}</p>
        </div>
      </section>

      <section className="project-section prototype-section">
        <div className="prototype-header">
          <h2 className="section-heading">Prototype</h2>
          {project.demoUrl && (
            <Link to={`/projects/${project.id}/demo`} className="button-primary demo-btn">
              Launch Live Demo &rarr;
            </Link>
          )}
        </div>
        
        {shots.length > 0 ? (
          <div className="prototype-gallery">
            {shots.map((screenshot, idx) => (
              <figure key={screenshot.src} className="prototype-figure">
                <button
                  type="button"
                  className="prototype-image-button"
                  onClick={() => setLightboxIndex(idx)}
                  aria-label={`Enlarge screenshot: ${screenshot.alt || screenshot.caption || ''}`}
                >
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="prototype-image"
                    loading="lazy"
                  />
                  <span className="prototype-zoom-hint" aria-hidden="true">Click to enlarge</span>
                </button>
                <figcaption>{screenshot.caption}</figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="prototype-placeholder">
            <div className="placeholder-text">No screenshots available</div>
          </div>
        )}
      </section>

      <section className="project-section">
        <h2 className="section-heading">Trade-offs</h2>
        <p>{project.tradeoffs || "Content pending."}</p>
      </section>

      <section className="project-section">
        <h2 className="section-heading">Future Work</h2>
        {project.futureWork && project.futureWork.length > 0 ? (
          <ul className="future-work-list">
            {project.futureWork.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>Content pending.</p>
        )}
      </section>

      <footer className="project-footer">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="button-secondary">
            View on GitHub
          </a>
        )}
        {project.downloadUrl && (
          <a href={project.downloadUrl} className="button-secondary" download>
            Download Windows Executable
          </a>
        )}
      </footer>
    </article>
  );
};

export default ProjectDetail;
