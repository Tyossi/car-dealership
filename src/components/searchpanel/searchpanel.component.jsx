import React from "react";
import "./searchpanel.styles.scss";

const SearchPanel = () => {
  return (
    <div className="search-panel">
      <h2>Search for Vehicles</h2>
      <form action="">
        <select name="" id="" className="search-panel__btn">
          <option value="">Make</option>
        </select>
        <select name="" id="" className="search-panel__btn">
          <option value="">Year</option>
        </select>
        <select name="" id="" className="search-panel__btn">
          <option value="">Model</option>
        </select>
        <select name="" id="" className="search-panel__btn">
          <option value="">Fuel</option>
        </select>
      </form>
      <div className="search-panel__button">Search</div>
    </div>
  );
};

export default SearchPanel;
