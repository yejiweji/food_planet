
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import RandomRecipe from "./RandomRecipe";
import "./Random.css";

export default class Random extends PureComponent {
  static propTypes = {
    handleRandomRecipeSearch: PropTypes.func,
    isLoading: PropTypes.bool,
    recipes: PropTypes.array,
  };

  render() {
    const { isLoading, recipes, handleRandomRecipeSearch } = this.props;
    return (
      <div className="random_container">
        <div className="container_description">
          Are you feeling adventurous? Do you feel like cooking something but don't know what?
          Let's have some fun by randomly generating one. Click on the button below to get your special recipe:
        </div>
        <RandomRecipe
          handleRandomRecipeSearch={handleRandomRecipeSearch}
          isLoading={isLoading}
          recipes={recipes}
        />
      </div>
    );
  }
}
