import React from 'react';
import './FilterPanel.css';

const FilterPanel = ({ filters, activeFilters, onFilterChange, onReset }) => {
  // filters shape: { function: ['PLAN', ...], technology: ['Python', ...], industry: ['Warehouse', ...] }
  // activeFilters shape: { function: [], technology: [], industry: [] }

  const handleToggle = (category, value) => {
    onFilterChange(category, value);
  };

  const hasActiveFilters = Object.values(activeFilters).some(arr => arr.length > 0);

  return (
    <div className="filter-panel">
      <div className="filter-header">
        <h3 className="filter-title">Filters</h3>
        {hasActiveFilters && (
          <button className="filter-reset text-accent" onClick={onReset}>
            Reset All
          </button>
        )}
      </div>

      <div className="filter-groups">
        {Object.entries(filters).map(([category, options]) => (
          <div key={category} className="filter-group">
            <h4 className="filter-group-title">{category}</h4>
            <div className="filter-options">
              {options.map(option => (
                <button
                  key={option}
                  className={`filter-option ${activeFilters[category].includes(option) ? 'active' : ''}`}
                  onClick={() => handleToggle(category, option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterPanel;
