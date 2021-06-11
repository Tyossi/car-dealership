import React from "react";
import PopularBrands from "../../components/popularBrands/popularBrands.component";
import Header from "../../components/header/header.component";
import "./homepage.styles.scss";
const HomePage = () => {
  return (
    <div>
      <Header />
      <PopularBrands />
    </div>
  );
};

export default HomePage;
