import React from "react";
import logo from './logo.png';
import "./Header.css";

function Header() {
  return (
    <header className="app_header">
        <img src={logo} className="app_logo" alt="logo" />
        <p>Foodie</p>
    </header>
  );
}

export default Header;
