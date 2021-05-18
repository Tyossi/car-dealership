import FilteredCarsActionTypes from "./filteredCars.types";

const INITIAL_STATE = {
  filteredCars: [
    // {
    //   id: 0,
    //   name: "Baby Girl",
    //   make: "playstation",
    //   model: "avensis",
    //   releaseDate: "2016",
    // },
  ],
};

const filteredCarsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FilteredCarsActionTypes.UPDATE_FILTERED_CAR:
      return {
        ...state,
        filteredCars: action.payload,
      };
    default:
      return state;
  }
};

export default filteredCarsReducer;
