
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import LoadingGlobe from "./LoadingGlobe";
import RecipeCard from "./RecipeCard";
import "./RandomRecipe.css";

export default class RandomRecipe extends PureComponent {
  static propTypes = {
    handleRandomRecipeSearch: PropTypes.func,
    isLoading: PropTypes.bool,
    recipes: PropTypes.array,
  };

  render() {
    const { isLoading, recipes, handleRandomRecipeSearch } = this.props;

    let cards = null;
    if (recipes) {
      cards = recipes.map((item, i) => (
        <RecipeCard key={item.id} recipe={item} isLoading={isLoading} />
      ));
    }

    return (
      <div className="random_recipe_container">
        <Button
          variant="info"
          id="button-addon2"
          onClick={handleRandomRecipeSearch}
          size="lg"
        >
          ✨ Get inspired ✨
        </Button>
        { isLoading ? <LoadingGlobe /> : <div className="recipes">{ cards }</div>}
      </div>
    );
  }
}
