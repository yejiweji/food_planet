import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { BsCalendar2Check } from "react-icons/bs"
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { RiFridgeLine, RiMagicLine } from "react-icons/ri";

import "./NavBar.css";

export default class NavBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cardSelected: "fridge",
    };
  }

  static propTypes = {
    navChange: PropTypes.func,
  };

  handleClick = event => {
    let title = "";

    switch(event) {
      case "fridge":
        title = "What's in your fridge? 🔍";
        break;
      case "grocery":
        title = "What do you need? 🛒";
        break;
      case "calendar":
        title = "What's planned for the week? 🗓";
        break;
      case "random":
        title = "Want to get inspired 🔮?";
        break;
      default:
        title = "";
    }

    this.props.navChange([event, title]);
    this.setState({ cardSelected: event });
  };

  render() {
    const { cardSelected } = this.state;

    return (
      <div className="app_navbar">
        <div
          className={`nav_card ${cardSelected == 'fridge' ? 'card_selected' : ''}`}
          onClick={() => this.handleClick("fridge")}
        >
          <RiFridgeLine />
        </div>
        <div
          className={`nav_card ${cardSelected == 'grocery' ? 'card_selected' : ''}`}
          onClick={() => this.handleClick("grocery")}
        >
          <MdOutlineLocalGroceryStore />
        </div>
        <div
          className={`nav_card ${cardSelected == 'calendar' ? 'card_selected' : ''}`}
          onClick={() => this.handleClick("calendar")}
        >
          <BsCalendar2Check />
        </div>
        <div
          className={`nav_card ${cardSelected == 'random' ? 'card_selected' : ''}`}
          onClick={() => this.handleClick("random")}
        >
          <RiMagicLine />
        </div>
      </div>
    );
  }
}

