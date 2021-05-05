import React from "react";

const RenderGames = ({ name, platform, genre }) => {
  return (
    <div>
      {genre ? (
        <div>
          <h1>Name: {name}</h1>
          <h3>Platform: {platform}</h3>
          <h4>Genre: {genre}</h4>
        </div>
      ) : (
        <h1>Sorry, No Cars Found. Try Updating Your Search Criteria</h1>
      )}
    </div>
  );
};

export default RenderGames;
