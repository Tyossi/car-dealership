import React from "react";
import "./filter.component.styles.scss";
import { PLATFORMS, GENRES, SORT_BY } from "../../constants";

const FilterComponent = ({ handleOnChange, handleSelectedOptions }) => {
  return (
    <div>
      <form onSubmit={handleSelectedOptions} id="game-form">
        <label htmlFor="platform-select">
          Platform:
          <select
            onChange={handleOnChange}
            name="platform"
            id="platform-select"
          >
            {PLATFORMS.map((platform) => (
              <option key={platform.value} value={platform.value}>
                {platform.displayTag}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="genre-select">
          Genres:
          <select onChange={handleOnChange} name="genre" id="genre-select">
            {GENRES.map((genre) => (
              <option key={genre.value} value={genre.value}>
                {genre.displayTag}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="sortBy-select">
          Sort By:
          <select name="sort by" id="genre-select">
            {SORT_BY.map((sort) => (
              <option key={sort.value} value={sort.value}>
                {sort.displayTag}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FilterComponent;
