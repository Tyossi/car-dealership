import React from "react";
import "./serviceDetails.styles.scss";

const ServiceDetails = () => {
  return (
    <div className="services">
      <h1 className="services__heading">
        Leading Dealer in
        <br />
        New & Used Cars
      </h1>
      <div className="services__details__container">
        <div className="services__details__container--row1">
          <div className="container--row1-details">
            <h2 className="title">New & Used</h2>
            <p className="description">
              Consectetur adipiscing elit. Quisque pellentesque viverra quam.
            </p>
          </div>
          <div className="container--row1-details">
            <h2 className="title">0% APR Financing</h2>
            <p className="description">
              Consectetur adipiscing elit. Quisque pellentesque viverra quam.
            </p>
          </div>
          <div className="container--row1-details">
            <h2 className="title">Maintenance Packages</h2>
            <p className="description">
              Consectetur adipiscing elit. Quisque pellentesque viverra quam.
            </p>
          </div>
        </div>
        <div className="services__details__container--row2">
          <div className="container--row2-details">
            <h2 className="title">Free Test Drives</h2>
            <p className="description">
              Consectetur adipiscing elit. Quisque pellentesque viverra quam.
            </p>
          </div>
          <div className="container--row2-details">
            <h2 className="title">Vehicle History Reports</h2>
            <p className="description">
              Consectetur adipiscing elit. Quisque pellentesque viverra quam.
            </p>
          </div>
          <div className="container--row2-details">
            <h2 className="title">Buy, Sell, Trade</h2>
            <p className="description">
              Consectetur adipiscing elit. Quisque pellentesque viverra quam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
