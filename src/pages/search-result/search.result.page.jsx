import React from "react";
import RenderGames from "../../components/car-render/render.component";
import { connect } from "react-redux";

const SearchResult = ({ filteredCars }) => {
  return (
    <div>
      {filteredCars ? (
        filteredCars.map((car) => <RenderGames key={car.id} {...car} />)
      ) : (
        <h1>Sorry, No Cars Found. Try Updating Your Search Criteria</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  filteredCars: state.searchFilterCars.filteredCars,
});

export default connect(mapStateToProps)(SearchResult);
