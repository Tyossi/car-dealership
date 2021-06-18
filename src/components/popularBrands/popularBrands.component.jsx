import React from "react";
import "./popularBrands.styles.scss";
import { ReactComponent as ToyotaLogo } from "../../assets/brandLogos/Toyota.svg";
import { ReactComponent as HondaLogo } from "../../assets/brandLogos/honda-3.svg";
import { ReactComponent as BMWLogo } from "../../assets/brandLogos/BMW.svg";
import { ReactComponent as FordLogo } from "../../assets/brandLogos/ford-1.svg";
import { ReactComponent as Jaguar } from "../../assets/brandLogos/jaguar-cars.svg";
import { ReactComponent as KIA } from "../../assets/brandLogos/KIA.svg";
import { ReactComponent as Landrover } from "../../assets/brandLogos/land-rover-1.svg";
import { ReactComponent as Lexus } from "../../assets/brandLogos/lexus-2.svg";
import { ReactComponent as Mercedes } from "../../assets/brandLogos/mercedes-benz-4.svg";
import { ReactComponent as Volkswagen } from "../../assets/brandLogos/volkswagen-3.svg";
import { ReactComponent as Peugeot } from "../../assets/brandLogos/peugeot-5.svg";
import { ReactComponent as Volvo } from "../../assets/brandLogos/volvo-3.svg";

const PopularBrands = () => {
  return (
    <div className="popular__brands">
      <h1 className="popular__brands--heading">Popular Brands</h1>
      <div className="popular__brands__logos--box1">
        <span className="brand">
          <ToyotaLogo className="brand__logo" />
          <p className="brand__name">Toyota</p>
        </span>
        <span className="brand">
          <Peugeot className="brand__logo" />
          <p className="brand__name">Peugeot</p>
        </span>
        <span className="brand">
          <BMWLogo className="brand__logo" />
          <p className="brand__name">BMW</p>
        </span>
        <span className="brand">
          <FordLogo className="brand__logo" />
          <p className="brand__name">Ford</p>
        </span>
        <span className="brand">
          <Jaguar className="brand__logo" />
          <p className="brand__name">Jaguar</p>
        </span>
        <span className="brand">
          <KIA className="brand__logo" />
          <p className="brand__name">KIA</p>
        </span>
      </div>

      <div className="popular__brands__logos--box2">
        <span className="brand">
          <Landrover className="brand__logo" />
          <p className="brand__name">Landrover</p>
        </span>
        <span className="brand">
          <Lexus className="brand__logo" />
          <p className="brand__name">Lexus</p>
        </span>
        <span className="brand">
          <Mercedes className="brand__logo" />
          <p className="brand__name">Mercedes</p>
        </span>
        <span className="brand">
          <Volkswagen className="brand__logo" />
          <p className="brand__name">Volkswagen</p>
        </span>
        <span className="brand">
          <HondaLogo className="brand__logo" />
          <p className="brand__name">Honda</p>
        </span>
        <span className="brand">
          <Volvo className="brand__logo" />
          <p className="brand__name">Volvo</p>
        </span>
      </div>
    </div>
  );
};

export default PopularBrands;
