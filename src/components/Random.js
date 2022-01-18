
import React, { PureComponent } from "react";
import Recipes from "./Recipes";
import "./Random.css";

export default class Random extends PureComponent {
  render() {
    return (
      <div className="random_container">
        <div className="container_description">
          Are you feeling adventurous? Do you feel like cooking something but don't know what?
          Let's have some fun by randomly generating one. Click on the button below to get your special recipe:
        </div>
        <Recipes />
      </div>
    );
  }
}
