import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Fridge from "./Fridge";

import "./Container.css";

export default class Container extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    const { title } = this.props;

    return (
      <div className="app_container">
        <div className="page_title">{title}</div>
        <Fridge />
      </div>
    );
  }
}
