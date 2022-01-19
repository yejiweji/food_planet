import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Checklist from "./Checklist";
import Map from "./Map";
import "./Grocery.css";

export default class Grocery extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
    items: PropTypes.array,
    completeItem: PropTypes.func,
    removeItem: PropTypes.func,
    handleSubmit: PropTypes.func,
    updateValue: PropTypes.func,
  };

  render() {
    const {
      value,
      items,
      completeItem,
      removeItem,
      handleSubmit,
      updateValue,
    } = this.props;

    return (
      <div className="grocery_container">
        <div className="container_description">
          What's missing in your fridge? Which items are you running low? Anything need replenishing?
          Instead of keeping a list in your 🧠, let's plan what to eat in advance.
          Use the calendar below to add what you'll be eating at each meal:
        </div>
        <div className="grocery_content_wrapper">
          <Checklist
            value={value}
            items={items}
            completeItem={completeItem}
            removeItem={removeItem}
            handleSubmit={handleSubmit}
            updateValue={updateValue}
          />
          <Map />
        </div>
      </div>
    );
  }
}
