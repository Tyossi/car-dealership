import React, { useState } from "react";
import CAR_LIST from "./carList";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { filter } from "../../type.js";
import { Slider } from "@material-ui/core";
import { MAKE, MODEL, FUEL, BODY_TYPE } from "../../constants";
import "./searchPanel.styles.scss";
import { connect } from "react-redux";
import { updateFilteredCar } from "../../redux/filteredCars/filteredCar.action";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 170,
    color: "red",
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
    make: "toyota",
    model: "camry",
  });

  const [carList] = useState(CAR_LIST);

  const [filterMinMaxYear, setFilterMinMaxYear] = useState([2005, 2018]);

  const [minn, setMinn] = useState([2000, 200000]);

  const [makeOptionValue, setMakeOptionValue] = useState("toyota");

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
    setMakeOptionValue(e.target.value);
  };

  const handleMakeOption = (e) => {
    setFilterCar((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
    console.log("Make Value: " + makeOptionValue);
  };

  const handleSelectedOptions = (e) => {
    e.preventDefault();
    const [minYear, maxYear] = filterMinMaxYear;
    updateFilteredCar(
      carList.filter((car) => {
        if (car.releaseDate >= minYear && car.releaseDate <= maxYear) {
          return (
            car.model.toLowerCase().includes(filterCar.model.toLowerCase()) &&
            car.make.toLowerCase().includes(filterCar.make.toLowerCase())
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
                htmlFor="outlined-age-native-simple"
                className={classes.text}
                // id="label"
              >
                Make
              </InputLabel>
              <Select
                native
                onChange={handleOnChange}
                label="Make"
                className={classes.text}
                name="make"
                id="outlined-age-native-simple"
                labelId="label"
              >
                <option aria-label="None" value="" />
                {MAKE.map((make) => (
                  <option
                    key={make.value}
                    value={make.value}
                    className={classes.textTwo}
                  >
                    {make.displayTag}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel
                htmlFor="outlined-age-native-simple"
                className={classes.text}
              >
                Model
              </InputLabel>
              <Select
                native
                onChange={handleMakeOption}
                label="Model"
                className={classes.text}
                name="model"
                id="outlined-age-native-simple"
              >
                <option aria-label="" value="" />
                {MODEL.map((model) =>
                  model.makeValue === makeOptionValue ? (
                    <option
                      key={model.value}
                      value={model.value}
                      className={classes.textTwo}
                    >
                      {model.displayTag}
                    </option>
                  ) : null
                )}
              </Select>
            </FormControl>
          </div>
          <div className="form-fields2">
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel
                id="demo-simple-select-outlined-label"
                className={classes.text}
              >
                Fuel
              </InputLabel>
              <Select
                native
                onChange={handleOnChange}
                label="Fuel"
                className={classes.text}
                inputProps={{
                  name: "fuel",
                  id: "outlined-age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                {FUEL.map((fuel) => (
                  <option
                    key={fuel.value}
                    value={fuel.value}
                    className={classes.textTwo}
                  >
                    {fuel.displayTag}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel
                id="demo-simple-select-outlined-label"
                className={classes.text}
              >
                Body Type
              </InputLabel>
              <Select
                native
                onChange={handleOnChange}
                label="Body Type"
                className={classes.text}
                inputProps={{
                  name: "bodyType",
                  id: "outlined-age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                {BODY_TYPE.map((bodyType) => (
                  <option
                    key={bodyType.value}
                    value={bodyType.value}
                    className={classes.textTwo}
                  >
                    {bodyType.displayTag}
                  </option>
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
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateFilteredCar: (filteredCar) => dispatch(updateFilteredCar(filteredCar)),
});

export default withRouter(connect(null, mapDispatchToProps)(SearchPanel));
