import React, { useState, useMemo } from 'react';
import { projects } from '../data/projects';
import { useSearch } from '../hooks/useSearch';
import SearchBar from '../components/SearchBar';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const SCOR_TABS = ['All', 'PLAN', 'SOURCE', 'MAKE', 'DELIVER'];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');

  const { searchTerm, setSearchTerm, filteredItems: searchedProjects } = useSearch(
    projects,
    ['title', 'tagline', 'technologies', 'industries']
  );

  const finalProjects = useMemo(() => {
    if (activeTab === 'All') return searchedProjects;
    return searchedProjects.filter(p => p.scor === activeTab);
  }, [searchedProjects, activeTab]);

  return (
    <div className="projects-page container-grid">
      <div className="page-header">
        <h1 className="page-title">Projects</h1>
        <p className="page-description">
          Published prototypes built to explore specific supply chain decisions, each one making its assumptions, trade-offs, and limits visible.
        </p>
      </div>

      <div className="projects-controls">
        <div className="scor-tabs">
          {SCOR_TABS.map(tab => (
            <button
              key={tab}
              className={`scor-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="projects-search">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search projects..."
          />
        </div>
      </div>

      <section className="projects-main">
        {finalProjects.length > 0 ? (
          <div className="project-grid">
            {finalProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h2>No projects found</h2>
            <p>Try a different area or search term.</p>
            <button className="button-secondary" onClick={() => { setActiveTab('All'); setSearchTerm(''); }}>
              Clear
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Projects;
