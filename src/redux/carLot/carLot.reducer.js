import CAR_LIST from "./carList";

const INITIAL_STATE = {
  carList: CAR_LIST,
};

const carLotReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default carLotReducer;
