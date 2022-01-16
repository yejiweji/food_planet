import React, { PureComponent } from "react";
import "./Header.css";
import logo from './logo.png';

function Header() {
  return (
    <header className="app_header">
        <img src={logo} className="app_logo" alt="logo" />
        <p>Foodie</p>
    </header>
  );
}

export default Header;
