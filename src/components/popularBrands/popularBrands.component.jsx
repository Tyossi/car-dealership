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
    <div className="back">
      <div className="popular__brands">
        <h1 className="popular__brands-heading">Popular Brands</h1>
        <div className="brand_logo-box1">
          <span className="brand_logo-and-name">
            <ToyotaLogo className="brand_logo" />
            <p>Toyota</p>
          </span>
          <span className="brand_logo-and-name">
            <Peugeot className="brand_logo" />
            <p>Peugeot</p>
          </span>
          <span className="brand_logo-and-name">
            <BMWLogo className="brand_logo" />
            <p>BMW</p>
          </span>
          <span className="brand_logo-and-name">
            <FordLogo className="brand_logo" />
            <p>Ford</p>
          </span>
          <span className="brand_logo-and-name">
            <Jaguar className="brand_logo" />
            <p>Jaguar</p>
          </span>
          <span className="brand_logo-and-name">
            <KIA className="brand_logo" />
            <p>KIA</p>
          </span>
        </div>

        <div className="brand_logo-box2">
          <span className="brand_logo-and-name">
            <Landrover className="brand_logo" />
            <p>Landrover</p>
          </span>
          <span className="brand_logo-and-name">
            <Lexus className="brand_logo" />
            <p>Lexus</p>
          </span>
          <span className="brand_logo-and-name">
            <Mercedes className="brand_logo" />
            <p>Mercedes</p>
          </span>
          <span className="brand_logo-and-name">
            <Volkswagen className="brand_logo" />
            <p>Volkswagen</p>
          </span>
          <span className="brand_logo-and-name">
            <HondaLogo className="brand_logo" />
            <p>Honda</p>
          </span>
          <span className="brand_logo-and-name">
            <Volvo className="brand_logo" />
            <p>Volvo</p>
          </span>
        </div>
      </div>
      <div className="services">
        <div className="services__heading">
          <h1>
            Leading Dealer In
            <br />
            New & Used Cars
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PopularBrands;
