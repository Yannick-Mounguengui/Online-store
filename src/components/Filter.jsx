import React from 'react';
import '../assets/style/productlist.css';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <div className="filter">
      <label htmlFor="filter">Filter:</label>
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={e => onFilterChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;
