import FilteredCarsActionTypes from "./filteredCars.types";

const INITIAL_STATE = {
  filteredCars: [
    {
      // id: 0,
      // name: "god of war",
      // platform: "playstation",
      // genre: "adventure",
      // releaseDate: "2016",
    },
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
