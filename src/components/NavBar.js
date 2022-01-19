import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { BsCalendar2Check } from "react-icons/bs"
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { RiFridgeLine, RiMagicLine } from "react-icons/ri";

import "./NavBar.css";

export default class NavBar extends PureComponent {
  static propTypes = {
    navChange: PropTypes.func,
    cardSelected: PropTypes.string,
  };

  render() {
    const { cardSelected, navChange } = this.props;

    return (
      <div className="app_navbar">
        <div
          className={`nav_card ${cardSelected === 'fridge' ? 'card_selected' : ''}`}
          onClick={() => navChange("fridge")}
        >
          <RiFridgeLine />
        </div>
        <div
          className={`nav_card ${cardSelected === 'grocery' ? 'card_selected' : ''}`}
          onClick={() => navChange("grocery")}
        >
          <MdOutlineLocalGroceryStore />
        </div>
        <div
          className={`nav_card ${cardSelected === 'calendar' ? 'card_selected' : ''}`}
          onClick={() => navChange("calendar")}
        >
          <BsCalendar2Check />
        </div>
        <div
          className={`nav_card ${cardSelected === 'random' ? 'card_selected' : ''}`}
          onClick={() => navChange("random")}
        >
          <RiMagicLine />
        </div>
      </div>
    );
  }
}

