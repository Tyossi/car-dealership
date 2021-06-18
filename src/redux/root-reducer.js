import { combineReducers } from "redux";
import filteredCarsReducer from "./filteredCars/filteredCar.reducer";
import carLotReducer from "./carLot/carLot.reducer";

export default combineReducers({
  searchFilterCars: filteredCarsReducer,
  cars: carLotReducer,
});
