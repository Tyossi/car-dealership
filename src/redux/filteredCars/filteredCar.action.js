import FilteredCarsActionTypes from "./filteredCars.types";

export const updateFilteredCar = (filteredCar) => ({
  type: FilteredCarsActionTypes.UPDATE_FILTERED_CAR,
  payload: filteredCar,
});
