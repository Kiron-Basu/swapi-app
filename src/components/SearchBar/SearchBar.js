/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './SearchBar.css';

const searchBar = props => (
  <div className="SearchBar">
    <input onChange={props.onChange} />
    <button type="button" onClick={props.submitSearch}>SEARCH</button>
  </div>
);

export default searchBar;
