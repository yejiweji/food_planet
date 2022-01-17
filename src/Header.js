import React from "react";
import logo from './logo.png';
import "./Header.css";

function Header() {
  return (
    <header className="app_header">
        <div className="app_logo">
          <div className="logo_center"></div>
          <img src={logo} className="logo_icon" alt="logo" />
        </div>
        <p>FoodPlanet</p>
    </header>
  );
}

export default Header;
