import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Fridge from "./Fridge";
import Grocery from "./Grocery";
import Calendar from "./Calendar";
import Random from "./Random";
import "./Container.css";

export default class Container extends PureComponent {
  static propTypes = {
    handleRandomRecipeSearch: PropTypes.func,
    updateSearchQuery: PropTypes.func,
    handleIngredientRecipesSearch: PropTypes.func,
    navCard: PropTypes.string,
    title: PropTypes.string,
    randomIsLoading: PropTypes.bool,
    ingredientIsLoading: PropTypes.bool,
    randomRecipes: PropTypes.array,
    ingredientRecipes: PropTypes.array,
    searchQuery: PropTypes.string,
    groceryListValue: PropTypes.string,
    groceryListItems: PropTypes.array,
    completeItem: PropTypes.func,
    removeItem: PropTypes.func,
    handleChecklistSubmit: PropTypes.func,
    updateChecklistValue: PropTypes.func,
    zoom: PropTypes.number,
    currentCoords: PropTypes.object,
    resultLocations: PropTypes.array,
    showPinDetails: PropTypes.bool,
    pinDetails: PropTypes.object,
    updateCoordinateState: PropTypes.func,
  };

  render() {
    const {
      navCard,
      title,
      handleIngredientRecipesSearch,
      handleRandomRecipeSearch,
      updateSearchQuery,
      searchQuery,
      ingredientIsLoading,
      randomIsLoading,
      ingredientRecipes,
      randomRecipes,
      groceryListValue,
      groceryListItems,
      completeItem,
      removeItem,
      handleChecklistSubmit,
      updateChecklistValue,
      zoom,
      currentCoords,
      resultLocations,
      showPinDetails,
      pinDetails,
      updateCoordinateState,
    } = this.props;

    return (
      <div className="app_container">
        <div className="container_title">{title}</div>
        {navCard === "fridge" ?
          <Fridge
            handleIngredientRecipesSearch={handleIngredientRecipesSearch}
            updateSearchQuery={updateSearchQuery}
            searchQuery={searchQuery}
            isLoading={ingredientIsLoading}
            recipes={ingredientRecipes}
          /> : null}
        {navCard === "grocery" ?
          <Grocery
            value={groceryListValue}
            items={groceryListItems}
            completeItem={completeItem}
            removeItem={removeItem}
            handleSubmit={handleChecklistSubmit}
            updateValue={updateChecklistValue}
            zoom={zoom}
            currentCoords={currentCoords}
            resultLocations={resultLocations}
            showPinDetails={showPinDetails}
            pinDetails={pinDetails}
            updateCoordinateState={updateCoordinateState}
          /> : null}
        {navCard === "calendar" ? <Calendar /> : null}
        {navCard === "random" ?
          <Random
            handleRandomRecipeSearch={handleRandomRecipeSearch}
            isLoading={randomIsLoading}
            recipes={randomRecipes}
          /> : null}
      </div>
    );
  }
}
