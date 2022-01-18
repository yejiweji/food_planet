import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Fridge from "./Fridge";
import Grocery from "./Grocery";
import Calendar from "./Calendar";
import Random from "./Random";

import "./Container.css";

export default class Container extends PureComponent {
  static propTypes = {
    navCard: PropTypes.string,
    title: PropTypes.string,
  };

  render() {
    const { navCard, title } = this.props;

    return (
      <div className="app_container">
        <div className="container_title">{title}</div>
        {navCard === "fridge" ? <Fridge /> : null}
        {navCard === "grocery" ? <Grocery /> : null}
        {navCard === "calendar" ? <Calendar /> : null}
        {navCard === "random" ? <Random /> : null}
      </div>
    );
  }
}
