import React, { useState } from "react";
import "./multi-range-slider.style.css";
import GameList from "../carlist/gamelist.component";
import { Slider } from "@material-ui/core";

const MultiRangeSlider = () => {
  const [min, setMin] = useState([2000, 2021]);

  const updateRange = (e, data) => {
    setMin(data);
    const [a, b] = min;
    console.log(min);
  };

  return (
    <div>
      <div style={{ width: 250, margin: 20 }}>
        <Slider
          value={min}
          onChange={updateRange}
          valueLabelDisplay="auto"
          min={2000}
          max={2021}
        />
      </div>
      <GameList min={min} />
    </div>
  );
};

export default MultiRangeSlider;
