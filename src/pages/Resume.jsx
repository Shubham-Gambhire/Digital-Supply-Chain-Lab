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
          <p className="page-description">
            TCS Summer Intern | Kearney National Finalist | Published Research Author | Department Rank Holder
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
              <h3>Kearney</h3>
              <span className="resume-date font-mono">Aug 2026 to Sep 2026</span>
            </div>
            <div className="resume-role">Live Project: Tariff, Duty &amp; Trade Scenario Optimizer</div>
            <ul className="resume-bullets">
              <li>Built a sourcing prototype for 30 synthetic SKUs across four countries using spend analysis, landed cost and country of origin.</li>
              <li>Ranked trade options via Section 301 and USMCA scenario analysis with weighted cost, risk, resilience and feasibility scores.</li>
              <li>Integrated model-agnostic GenAI for tariff parsing and output explanations with human-approval gates and guardrails.</li>
              <li>Estimated $9.85M annual savings potential in 27 of 30 synthetic SKUs via sourcing diversification and risk mitigation.</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <h3>Tata Consultancy Services (TCS)</h3>
              <span className="resume-date font-mono">Apr 2026 to May 2026</span>
            </div>
            <div className="resume-role">Summer Intern: Digital Supply Chain &amp; Procurement</div>
            <ul className="resume-bullets">
              <li>Mapped AS-IS Procure-to-Pay (P2P) across purchase requisition, RFQ, TCO, PO and freight forwarder expediting for a Fortune 500 US hospitality cruise client.</li>
              <li>Built a 3-criterion MCDM scorecard using DEMATEL-derived weights from 4 buyers' criterion-influence assessments, and segmented 30+ suppliers into four risk tiers by OTD, single-source dependency and priority.</li>
              <li>Calculated Scope 3 emissions from multimodal supplier freight using GLEC for carbon scoring and sustainable sourcing.</li>
              <li>Flagged approximately 30% of scored suppliers as high or critical risk, including 7 single-source suppliers, and received commendation from TCS senior leadership for the risk assessment and sourcing evaluation recommendations.</li>
              <li>Modeled F&amp;B demand drivers on 3-year historical data via OLS regression and examined 7 replenishment approaches using consumption variability and port-call cycles.</li>
              <li>Recommended JIT-aligned (s, S) replenishment at port calls with 85-99% service-level targets, simulating a 96% F&amp;B unit fill rate versus a 92% baseline and proposing policy integration in Oracle Fusion SCM.</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <h3>Government Operated Warehouse Analysis, IIM Mumbai</h3>
              <span className="resume-date font-mono">Feb 2026 to Mar 2026</span>
            </div>
            <div className="resume-role">Live Project: Warehouse Operations Analysis</div>
            <ul className="resume-bullets">
              <li>Applied ABC-XYZ and Pareto analysis to 6-month sales data; FSN analysis on 518 SKUs informed inventory slotting.</li>
              <li>Assessed supplier-wise GRN volumes and timestamps to identify inbound workload variability and congestion risks.</li>
              <li>Identified 2 picking workload peaks from invoice-release patterns to guide capacity planning for contract staffing.</li>
              <li>Quantified 30.8% unpicked cases in a one-day picklist and linked customer caps to order fulfillment constraints via root cause analysis.</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <h3>Akruti Architect and Interior Designers</h3>
              <span className="resume-date font-mono">Jun 2024 to Oct 2024</span>
            </div>
            <div className="resume-role">Site Planning Intern: Material &amp; Construction Operations</div>
            <ul className="resume-bullets">
              <li>Streamlined inventory by cutting buffer stock by 10% with MRP alignment and lead time based replenishment planning.</li>
              <li>Reduced schedule deviation by 8% by analyzing output among 50+ laborers using histograms for resource planning.</li>
              <li>Audited dispatch slips against PO line items across three sites, ensuring 100% fulfillment of orders and zero variance.</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <h3>JSPM Narhe Technical Campus, Pune</h3>
              <span className="resume-date font-mono">Jul 2023 to Mar 2024</span>
            </div>
            <div className="resume-role">B.E. Project: Highway Interchange Efficiency using Python and Game-Based Simulation</div>
            <ul className="resume-bullets">
              <li>Achieved 98.47% accuracy of simulated traffic flow against real traffic data using lane use and dwell time metrics.</li>
              <li>Automated vehicle detection using the YOLOv3 algorithm in Python to analyze traffic flow from simulation recordings.</li>
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
            <div className="resume-role">MBA: Operations &amp; Supply Chain Management, CGPA 7.93/10</div>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <h3>JSPM Narhe Technical Campus, Pune</h3>
              <span className="resume-date font-mono">2021 to 2024</span>
            </div>
            <div className="resume-role">B.E. Civil Engineering, 78.20%</div>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <h3>Government Polytechnic, Pune</h3>
              <span className="resume-date font-mono">2018 to 2021</span>
            </div>
            <div className="resume-role">Diploma, 62.93%</div>
          </div>
        </section>

        <section className="resume-section">
          <h2>Positions of Responsibility</h2>

          <div className="resume-item">
            <div className="resume-item-header">
              <h3>Event Coordinator, Technovision</h3>
              <span className="resume-date font-mono">2023</span>
            </div>
            <ul className="resume-bullets">
              <li>Led a 17-member team while spearheading the promotion of Technovision 2K23.</li>
              <li>Initiated promotional campaigns, driving 20% footfall growth over the previous year.</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <h3>Class Representative, JSPM NTC</h3>
              <span className="resume-date font-mono">2022</span>
            </div>
            <ul className="resume-bullets">
              <li>Represented 70+ students as elected class representative, voicing student interests in departmental decisions.</li>
              <li>Resolved academic issues and streamlined exam and schedule coordination with the faculty.</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h2>Awards &amp; Achievements</h2>

          <ul className="resume-bullets">
            <li>Led the team to the Top 12 national finals of the Kearney case competition among 600+ teams and 2K+ participants (2026).</li>
            <li>Presented research on a low-cost Python and game-based simulation alternative for traffic analysis at a conference (2024).</li>
            <li>Ranked 2nd out of 170+ students in the final year of B.E., earning letters of recommendation from the HOD and Assistant Professor (2024).</li>
          </ul>
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
            <li>Six Sigma Green Belt: Advanced Innovation Group Pro Excellence (Udemy)</li>
            <li>Atlassian Agile Project Management Professional Certificate</li>
            <li>Data Analyst's Toolbox: Excel, SQL, Python, Power BI, Tableau (Udemy)</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;
