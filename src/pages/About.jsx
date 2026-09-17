import React from 'react';
import Timeline from '../components/Timeline';
import './About.css';

const About = () => {
  const timelineItems = [
    {
      period: "Next",
      title: "Your Organisation",
      description: "The organisation where the lab meets the real world, bringing supply chain strategy, digital tools, and operations thinking to decisions that move goods, manage risk, and shape how operations run at scale."
    },
    {
      period: "Present",
      title: "Digital Supply Chain Lab",
      description: "Building an open lab notebook to document supply chain prototypes, turning business problems into working tools using AI, Operations Research, and Analytics."
    },
    {
      period: "Live Project",
      title: "Kearney Tarion",
      description: "A live project focused on evaluating trade rules, risk, and savings opportunities across an international product portfolio."
    },
    {
      period: "Internship",
      title: "Summer Intern at TCS",
      description: "Maritime procurement & inventory operations for a Fortune 500 hospitality cruise client."
    },
    {
      period: "Live Project",
      title: "Government Warehouse Optimization",
      description: "A live project focused on improving inventory movement and fulfilment in a government-operated warehouse."
    },
    {
      period: "Education",
      title: "MBA, IIM Mumbai (formerly NITIE)",
      description: "Specializing in operations and supply chain management."
    },
    {
      period: "Earlier",
      title: "Construction Internship",
      description: "Time spent on-site alongside contractors and crews, less about managing schedules and more about understanding how decisions made on paper land in reality. It shaped a simple conviction: you cannot optimise what you have not observed."
    },
    {
      period: "Foundations",
      title: "Civil Engineering",
      description: "Four years building a foundation in structural thinking, mathematics, and how physical systems behave under real-world constraints, the kind of rigour that transfers cleanly into operations."
    }
  ];

  return (
    <div className="about-page container-prose">
      <div className="page-header">
        <h1 className="page-title">About Me</h1>
        <p className="page-description">
          I'm Shubham Gambhire, and my focus is the intersection of management consulting and digital supply chain.
        </p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Core Philosophy</h2>
          <div className="philosophy-highlight">
            <p><strong>Learn on the ground:</strong> ask as many questions as possible and observe operations firsthand before proposing a solution.</p>
          </div>
          <p>
            Whether it's maritime procurement or warehouse slotting, I believe you can't optimize what you haven't observed. 
            Before reaching for a framework, I try to understand how the work actually gets done from the people doing it.
          </p>
        </section>

        <section className="about-section">
          <h2>The Journey</h2>
          <Timeline items={timelineItems} />
        </section>

        <section className="about-section">
          <h2>How I Build</h2>
          <p>
            Most of the projects in the Lab are built using <strong>AI-assisted rapid prototyping</strong>. 
            I use AI as a collaborator to translate supply chain logic (Operations Research, algorithms, analytics) 
            into working software much faster than traditional development cycles.
          </p>
        </section>

        <section className="about-section">
          <h2>Outside the Lab</h2>
          <p>
            When I'm not studying supply chains, you can usually find me playing video games, going on treks, or reading and writing poetry.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
