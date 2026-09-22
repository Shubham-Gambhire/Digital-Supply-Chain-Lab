import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import BlogCard from '../components/BlogCard';
import { projects } from '../data/projects';
import { blogPosts } from '../data/blog';
import './Home.css';

const SCOR_FUNCTIONS = ['PLAN', 'SOURCE', 'MAKE', 'DELIVER'];

const Home = () => {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  const latestPost = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  )[0];

  return (
    <div className="home-page">
      <section className="hero container-prose">
        <h1 className="hero-title">Learning Digital Supply Chains by Building Things</h1>
        <p className="hero-subtitle">
          Digital Supply Chain Lab is where I document what I'm learning about supply chain planning, sourcing, manufacturing, and logistics, then prototype tools using AI, Operations Research, Simulation, and Analytics to build that understanding.
        </p>
        <div className="hero-ctas">
          <Link to="/projects" className="button-primary">View Projects</Link>
          <Link to="/about" className="button-secondary">About Me</Link>
        </div>
      </section>

      <section className="stats-bar">
        <div className="stats-inner container-grid">
          <div className="stat-item" data-tooltip="Prototypes built to explore real supply chain decisions">
            <span className="stat-number">{projects.length}</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item" data-tooltip="Plan · Source · Make · Deliver (SCOR framework)">
            <span className="stat-number">{SCOR_FUNCTIONS.length}</span>
            <span className="stat-label">Focus Areas</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item" data-tooltip="Observations, reads, and reflections on supply chain">
            <span className="stat-number">{blogPosts.length}</span>
            <span className="stat-label">Blog Posts</span>
          </div>
        </div>
      </section>

      <section className="featured-projects container-grid">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
        </div>
        
        <div className="project-grid">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="view-all-link">
          <Link to="/projects" className="text-accent">View all projects &rarr;</Link>
        </div>
      </section>

      {latestPost && (
        <section className="latest-blog container-prose">
          <h2 className="section-title">Latest from the Blog</h2>
          <Link to={`/blog/${latestPost.id}`} className="latest-blog-card-wrapper">
            <BlogCard post={latestPost} />
          </Link>
          <div className="view-all-link">
            <Link to="/blog" className="text-accent">Read the notebook &rarr;</Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
