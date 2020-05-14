import React from 'react';
import './search.css';

const Search = ({ value, onChange }) => {
  return (
    <div className="control">
      <input
        className="input"
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
