import React from "react";
import "./recentlyAdded.styles.scss";
import { connect } from "react-redux";

const RecentlyAdded = (carList) => {
  return (
    <div className="recently-added">
      <h1 className="heading">Recently Added</h1>
      <div className="car__card">
        <div className="car__card--image"></div>
        <div className="car__card--description"></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cars: state.cars.carList,
});

export default connect(mapStateToProps)(RecentlyAdded);
