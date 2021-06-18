import React from "react";
import PopularBrands from "../../components/popularBrands/popularBrands.component";
import Header from "../../components/header/header.component";
import "./homepage.styles.scss";
import ServiceDetails from "../../components/serviceDetails/serviceDetails.component";
import RecentlyAdded from "../../components/recentlyAdded/recentlyAdded.component";
const HomePage = () => {
  return (
    <div>
      <Header />
      <PopularBrands />
      <ServiceDetails />
      <RecentlyAdded />
    </div>
  );
};

export default HomePage;
