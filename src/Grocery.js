
import React, { PureComponent } from "react";
import "./Grocery.css";

export default class Grocery extends PureComponent {
  render() {
    return (
      <div className="grocery_container">
        <div className="container_description">
          What's missing in your fridge? Which items are you running low? Anything need replenishing?
          Instead of keeping a list in your 🧠, let's plan what to eat in advance.
          Use the calendar below to add what you'll be eating at each meal:
        </div>
      </div>
    );
  }
}
