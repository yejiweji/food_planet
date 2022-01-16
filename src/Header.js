import React, { PureComponent } from "react";
import "./Header.css";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Foodie</p>
      </header>
    );
  }
}
