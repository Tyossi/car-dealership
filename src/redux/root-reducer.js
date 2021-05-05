import { combineReducers } from "redux";
import filteredCarsReducer from "./filteredCars/filteredCar.reducer";

export default combineReducers({
  searchFilterCars: filteredCarsReducer,
});
