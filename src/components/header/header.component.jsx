import React from "react";
import SearchPanel from "../searchpanel/searchpanel.component";
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <SearchPanel />
    </div>
  );
};

export default Header;
