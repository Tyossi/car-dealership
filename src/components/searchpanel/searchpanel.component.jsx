import React, { useState } from "react";
import CAR_LIST from "./carList";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { filter } from "../../type.js";
import { Slider } from "@material-ui/core";
import { PLATFORMS, GENRES, SORT_BY } from "../../constants";
import "./searchPanel.styles.scss";
import { connect } from "react-redux";
import { updateFilteredCar } from "../../redux/filteredCars/filteredCar.action";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 170,
    borderColor: "red",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  text: {
    color: "#ecf0f4",
    fontSize: "small",
    border: "thin white",
  },

  textTwo: {
    color: "#1f2356",
    fontSize: "small",
  },
}));

const SearchPanel = ({ updateFilteredCar, history }) => {
  const classes = useStyles();
  const [filterCar, setFilterCar] = useState({
    ...filter,
    platform: "playstation",
    genre: "adventure",
  });

  const [carList] = useState(CAR_LIST);

  const [filterMinMaxYear, setFilterMinMaxYear] = useState([2005, 2018]);

  const [minn, setMinn] = useState([2000, 200000]);

  const updateRange = (e, data) => {
    setFilterMinMaxYear(data);
  };
  const updateRange2 = (e, data) => {
    setMinn(data);
  };

  const handleOnChange = (e) => {
    setFilterCar((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
    console.log(filterCar);
  };

  const handleSelectedOptions = (e) => {
    e.preventDefault();
    const [minYear, maxYear] = filterMinMaxYear;
    updateFilteredCar(
      carList.filter((game) => {
        if (game.releaseDate >= minYear && game.releaseDate <= maxYear) {
          return (
            game.genre.toLowerCase().includes(filterCar.genre.toLowerCase()) &&
            game.platform
              .toLowerCase()
              .includes(filterCar.platform.toLowerCase())
          );
        }
        return null;
      })
    );
  };

  return (
    <div className="search-panel">
      <div className="search-panel__heading">
        <h1>Search</h1>
      </div>
      <div className="search-panel__content">
        <form
          onSubmit={handleSelectedOptions}
          id="game-form"
          className="search-panel__content--form"
        >
          <div className="form-fields">
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel
                id="demo-simple-select-outlined-label"
                className={classes.text}
              >
                Platform
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                name="platform"
                onChange={handleOnChange}
                label="Platform"
                className={classes.text}
              >
                {PLATFORMS.map((platform) => (
                  <MenuItem
                    key={platform.value}
                    value={platform.value}
                    className={classes.textTwo}
                  >
                    {platform.displayTag}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel
                id="demo-simple-select-outlined-label"
                className={classes.text}
              >
                Genre
              </InputLabel>
              <Select
                className={classes.text}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                name="genre"
                onChange={handleOnChange}
                label="genre"
                color="#1f2356"
              >
                {GENRES.map((genre) => (
                  <MenuItem
                    key={genre.value}
                    value={genre.value}
                    className={classes.textTwo}
                  >
                    {genre.displayTag}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="form-fields2">
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel
                id="demo-simple-select-outlined-label"
                className={classes.text}
              >
                Genre
              </InputLabel>
              <Select
                className={classes.text}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                name="genre"
                onChange={handleOnChange}
                label="genre"
                color="#1f2356"
              >
                {GENRES.map((genre) => (
                  <MenuItem
                    key={genre.value}
                    value={genre.value}
                    className={classes.textTwo}
                  >
                    {genre.displayTag}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel
                id="demo-simple-select-outlined-label"
                className={classes.text}
              >
                Genre
              </InputLabel>
              <Select
                className={classes.text}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                name="genre"
                onChange={handleOnChange}
                label="genre"
                color="#1f2356"
              >
                {GENRES.map((genre) => (
                  <MenuItem
                    key={genre.value}
                    value={genre.value}
                    className={classes.textTwo}
                  >
                    {genre.displayTag}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div style={{ width: 350, margin: 10 }}>
            <Slider
              value={filterMinMaxYear}
              onChange={updateRange}
              valueLabelDisplay="auto"
              min={2000}
              max={2021}
            />
            <div className="range-label-box">
              <span className="range-label">Year</span>
              <span className="range-label">2000 - 2021</span>
            </div>
          </div>

          <div style={{ width: 350, margin: 10 }}>
            <Slider
              value={minn}
              onChange={updateRange2}
              valueLabelDisplay="auto"
              min={2000}
              max={200000}
            />
            <div className="range-label-box">
              <span className="range-label">Milleage</span>
              <span className="range-label">80,0000Km - 400,000Km</span>
            </div>
          </div>
          <div style={{ width: 350, margin: 10 }}>
            <Slider
              value={minn}
              onChange={updateRange2}
              valueLabelDisplay="auto"
              min={2000}
              max={200000}
            />

            <div className="range-label-box">
              <span className="range-label">Price</span>
              <span className="range-label">$2,000 - $200,000</span>
            </div>
          </div>

          <button
            className="search-panel__content--btn"
            onClick={() => setTimeout(() => history.push("/search"), 1)}
            type="submit"
          >
            Submit
          </button>

          {/* <label htmlFor="platform-select">
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
          <div style={{ width: 250, margin: 40 }}>
            <Slider
              value={filterMinMaxYear}
              onChange={updateRange}
              valueLabelDisplay="auto"
              min={2000}
              max={2021}
            />
            <div style={{ width: 250, margin: 20 }}>
              <Slider
                value={minn}
                onChange={updateRange2}
                valueLabelDisplay="auto"
                min={2000}
                max={200000}
              />
            </div>
          </div> */}
          {/* <button
            className="search-panel__button"
            onClick={() => setTimeout(() => history.push("/search"), 1)}
            type="submit"
          >
            Submit
          </button> */}
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateFilteredCar: (filteredCar) => dispatch(updateFilteredCar(filteredCar)),
});

export default withRouter(connect(null, mapDispatchToProps)(SearchPanel));
