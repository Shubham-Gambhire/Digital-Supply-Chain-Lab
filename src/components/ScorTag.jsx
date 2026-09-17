import React from 'react';
import './ScorTag.css';

const ScorTag = ({ function: scorFunction }) => {
  if (!scorFunction) return null;
  
  return (
    <span className="scor-tag">
      {scorFunction}
    </span>
  );
};

export default ScorTag;
