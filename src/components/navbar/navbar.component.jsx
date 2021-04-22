import React from "react";
import "./navbar.styles.scss";
// import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-items">
      <div className="logo">
        <div className="logo-placeholder">Logo</div>
      </div>
      <div className="nav-links">
        <span className="nav-link">home</span>
        <span className="nav-link">shop</span>
        <span className="nav-link">signin</span>
        <span className="nav-link">contact</span>
      </div>
    </div>
  );
};

export default NavBar;
