import React from 'react';
import './Timeline.css';

const Timeline = ({ items }) => {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-period font-mono">{item.period}</div>
            <h3 className="timeline-title">{item.title}</h3>
            {item.description && <p className="timeline-description">{item.description}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
