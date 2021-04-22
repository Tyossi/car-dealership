import React from "react";
import "./navbar.styles.scss";
// import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <div className="logo-placeholder">Logo</div>
      </div>
      <div className="navbar__links">
        <span className="nav-link">home</span>
        <span className="nav-link">shop</span>
        <span className="nav-link">contact</span>
        <span className="nav-link">signin</span>
      </div>
    </div>
  );
};

export default NavBar;
