import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import SearchRecipes from "./SearchRecipes";
import "./Fridge.css";

export default class Fridge extends PureComponent {
  static propTypes = {
    handleIngredientRecipesSearch: PropTypes.func,
    updateParentState: PropTypes.func,
    searchQuery: PropTypes.string,
    isLoading: PropTypes.bool,
    recipes: PropTypes.array,
  };

  render() {
    const {
      handleIngredientRecipesSearch,
      updateParentState,
      isLoading,
      recipes,
      searchQuery,
    } = this.props;

    return (
      <div className="fridge_container">
        <div className="container_description">
          Do you ever run out of ideas on what to cook? Tired of the same old routine?
          Instead of searching based on the dish, let's search based on what you have in the fridge.
          Type the ingredients you wish to use below, <b>separated by commas</b>:
        </div>
        <SearchRecipes
          handleIngredientRecipesSearch={handleIngredientRecipesSearch}
          isLoading={isLoading}
          recipes={recipes}
          searchQuery={searchQuery}
          updateParentState={updateParentState}
        />
      </div>
    );
  }
}
