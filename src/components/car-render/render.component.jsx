import React from "react";

const RenderGames = ({ name, make, model }) => {
  return (
    <div>
      {make ? (
        <div>
          <h1>Name: {name}</h1>
          <h3>Platform: {make}</h3>
          <h4>Genre: {model}</h4>
        </div>
      ) : (
        <h1>Sorry, No Cars Found. Try Updating Your Search Criteria</h1>
      )}
    </div>
  );
};

export default RenderGames;
