import React from "react";
import { ReactComponent as Star } from "../../assets/icons/star.svg";
import "./recentlyAdded.styles.scss";
import { connect } from "react-redux";

const RecentlyAdded = ({ cars }) => {
  return (
    <div className="recently-added">
      <h1 className="heading">Recently Added</h1>
      <div className="car__card--container">
        {cars
          .filter((car, index) => index < 3)
          .map((car) => {
            return (
              <div className="car__card">
                <div
                  className="car__card--image"
                  style={{
                    backgroundImage: `url(${car.imageUrl})`,
                  }}
                >
                  <div className="car-condition_and_favorite-icon">
                    <div>
                      <p
                        className={
                          car.condition === "Great Condition"
                            ? "green"
                            : car.condition === "Good Condition"
                            ? "yellow"
                            : "red"
                        }
                      >
                        {car.condition}
                      </p>
                    </div>
                    <div className="favorite-icon">
                      <div className="star">
                        <Star />
                      </div>
                    </div>
                  </div>
                  <p className="price">${car.price}</p>
                </div>
                <div className="car__card--description">
                  <div className="car__card--description-top">
                    <p className="make">{car.make}</p>
                    <p className="model">{car.model}</p>
                    <p className="year">{car.year}</p>
                  </div>
                  <div className="car__card--description-bottom">
                    <p className="mileage">
                      <span className="mileage__tag">Mileage</span>
                      <br />
                      {car.mileage}Km
                    </p>
                    <p className="fuel">
                      <span className="fuel__tag">Fuel</span>
                      <br />
                      {car.fuelType}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cars: state.cars.carList,
});

export default connect(mapStateToProps)(RecentlyAdded);
