import React, { useState } from "react";
// import CAR_LIST from "./carList";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
// import { filter } from "../../type.js";
import { Slider } from "@material-ui/core";
import CustomButton from "../custom-button/custom-button.component";
import { MAKE, MODEL, FUEL, BODY_TYPE } from "../../constants";
import "./searchPanel.styles.scss";
import { connect } from "react-redux";
import { updateFilteredCar } from "../../redux/filteredCars/filteredCar.action";
import { withRouter } from "react-router-dom";

///////// MUI Class Config
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

//////////// Component Handles The Different Search Inputs and Their States
const SearchPanel = ({ updateFilteredCar, history, cars }) => {
  const classes = useStyles();

  const [filterCar, setFilterCar] = useState({
    // ...filter,
    // make: "honda",
    // model: "camry",
    // fuelType: "petrol",
    // bodyType: "sedan",
  });

  // const [carList] = useState(cars);

  const [MinMaxYear, setMinMaxYear] = useState([2005, 2018]);

  const [minMaxPrice, setMinMaxPrice] = useState([25000, 500000]);

  const [minMaxMileage, setMinMaxMileage] = useState([2000, 200000]);

  const [makeOptionValue, setMakeOptionValue] = useState();

  const updateYearRange = (e, data) => {
    setMinMaxYear(data);
  };
  const updateMileageRange = (e, data) => {
    setMinMaxMileage(data);
  };
  const updatePriceRange = (e, data) => {
    setMinMaxPrice(data);
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
    console.log(filterCar);
    console.log("Make Value: " + makeOptionValue);
  };

  const handleSelectedOptions = (e) => {
    e.preventDefault();
    const [minYear, maxYear] = MinMaxYear;
    const [minMileage, maxMileage] = minMaxMileage;
    const [minPrice, maxPrice] = minMaxPrice;
    updateFilteredCar(
      cars.filter((car) => {
        if (car.releaseDate >= minYear && car.releaseDate <= maxYear) {
          if (car.mileage >= minMileage && car.mileage <= maxMileage) {
            if (car.price >= minPrice && car.price <= maxPrice) {
              return (
                car.make.includes(filterCar.make) &&
                car.model.includes(filterCar.model) &&
                car.fuelType.includes(filterCar.fuelType) &&
                car.bodyType.includes(filterCar.bodyType)
              );
            }
          }
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
                Fuel Type
              </InputLabel>
              <Select
                native
                // onChange={handleOnChange}
                onChange={handleMakeOption}
                label="Fuel"
                className={classes.text}
                inputProps={{
                  name: "fuelType",
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
                onChange={handleMakeOption}
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
              value={MinMaxYear}
              onChange={updateYearRange}
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
              value={minMaxMileage}
              onChange={updateMileageRange}
              valueLabelDisplay="auto"
              min={30000}
              max={200000}
            />
            <div className="range-label-box">
              <span className="range-label">Milleage</span>
              <span className="range-label">30,0000Km - 200,000Km</span>
            </div>
          </div>
          <div style={{ width: 350, margin: 10 }}>
            <Slider
              value={minMaxPrice}
              onChange={updatePriceRange}
              valueLabelDisplay="auto"
              min={2000}
              max={200000}
            />

            <div className="range-label-box">
              <span className="range-label">Price</span>
              <span className="range-label">$2,000 - $200,000</span>
            </div>
          </div>

          <CustomButton
            className="search-panel__content--btn"
            onClick={() => setTimeout(() => history.push("/search"), 1)}
            type="submit"
          >
            Search
          </CustomButton>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateFilteredCar: (filteredCar) => dispatch(updateFilteredCar(filteredCar)),
});

const mapStateToProps = (state) => ({
  cars: state.cars.carList,
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchPanel)
);
