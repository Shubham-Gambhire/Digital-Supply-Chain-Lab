import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-page container-prose">
      <div className="page-header resume-header">
        <div>
          <h1 className="page-title">Resume</h1>
          <p className="page-description">
            Shubham Gambhire
          </p>
        </div>
        <a href="/resume.pdf" download className="button-primary download-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download PDF
        </a>
      </div>

      <div className="resume-content">
        <section className="resume-section">
          <h2>Experience</h2>

          <div className="resume-item">
            <div className="resume-item-header">
              <h3>Kearney Tarion</h3>
              <span className="resume-date font-mono">Aug 2026 to Sep 2026</span>
            </div>
            <ul className="resume-bullets">
              <li>Live Project: Prototype building for AI trade strategy copilot named Tarion.</li>
              <li>Evaluated trade rules, country exposure, and risk factors across an international product portfolio.</li>
              <li>Structured and validated a savings analysis to support sourcing and trade-related decision making.</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <h3>Tata Consultancy Services (TCS)</h3>
              <span className="resume-date font-mono">April 2026 to May 2026</span>
            </div>
            <div className="resume-role">Summer Intern: Digital Supply Chain & Procurement</div>
            <ul className="resume-bullets">
              <li>Mapped the end-to-end Procure-to-Pay (P2P) lifecycle for a Fortune 500 US hospitality cruise client during a global transition to Oracle Fusion SCM, identifying system friction points and designing data-driven enhancements.</li>
              <li>Designed a Multivariate Regression model isolating passenger and voyage variables to capture 70% of demand variance for optimised replenishment across the fleet.</li>
              <li>Proposed an (s, S) inventory policy to stabilise dynamic reorder thresholds, validating safety stock levels through 10,000 Monte Carlo simulations.</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <h3>Government Warehouse Optimization</h3>
              <span className="resume-date font-mono">Feb 2026 to Apr 2026</span>
            </div>
            <ul className="resume-bullets">
              <li>Live Project: Warehouse Operations evaluation and optimization.</li>
              <li>Classified movement patterns across 518 SKUs to support more targeted warehouse inventory decisions.</li>
              <li>Analysed demand timing and same-day picking performance to identify operational improvement opportunities.</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <h3>Akruti Architect and Interior Designers</h3>
              <span className="resume-date font-mono">Jun 2024 to Oct 2024</span>
            </div>
            <div className="resume-role">Site Planning Intern: Material & Construction Operations</div>
            <ul className="resume-bullets">
              <li>Analyzed material flows across 3 sites using Circular Economy principles, proposing workflows that targeted an estimated 18% reduction in material waste.</li>
              <li>Modeled MRP-aligned replenishment schedules to help site managers optimize inventory levels and safely reduce buffer stock requirements.</li>
              <li>Applied EOQ models to evaluate existing procurement planning, recommending ordering adjustments designed to compress material lead times.</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h2>Education</h2>

          <div className="resume-item">
            <div className="resume-item-header">
              <h3>Indian Institute of Management, Mumbai</h3>
              <span className="resume-date font-mono">2025 to 2027</span>
            </div>
            <div className="resume-role">MBA: Operations & Supply Chain Management</div>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <h3>Savitribai Phule Pune University</h3>
              <span className="resume-date font-mono">2021 to 2024</span>
            </div>
            <div className="resume-role">B.E. Civil Engineering</div>
          </div>
        </section>

        <section className="resume-section">
          <h2>Skills</h2>

          <div className="skills-grid">
            <div className="skill-category">
              <h3>Technical</h3>
              <ul className="resume-bullets">
                <li>Operations Research</li>
                <li>Simulation Modeling</li>
                <li>AI-Assisted Prototyping</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Tools</h3>
              <ul className="resume-bullets">
                <li>Python</li>
                <li>Power BI</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <h2>Certifications</h2>

          <ul className="resume-bullets">
            <li>Six Sigma Green Belt: Advanced Innovation Group Pro Excellence</li>
            <li>Atlassian Agile Project Management Professional Certificate</li>
            <li>Data Analyst's Toolbox: Excel, SQL, Python, Power BI, Tableau: Udemy</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;
