
import React, { Component } from "react";
import $ from 'jquery';
import Button from 'react-bootstrap/Button';
import LoadingGlobe from "./LoadingGlobe";
import RecipeCard from "./RecipeCard";
import "./RandomRecipe.css";

export default class RandomRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      recipes: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isLoading: true });

    const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=1`;

    $.getJSON(url)
      .done(data => { this.setState({ isLoading: false, recipes: data.recipes }); });
  }

  render() {
    const { isLoading, recipes } = this.state;

    let cards = null;
    if (recipes) {
      cards = recipes.map((item, i) => (
        <RecipeCard key={item.id} recipe={item} />
      ));
    }

    return (
      <div className="random_recipe_container">
        <Button
          variant="info"
          id="button-addon2"
          onClick={this.handleClick}
          size="lg"
        >
          ✨ Get inspired ✨
        </Button>
        { isLoading ? <LoadingGlobe /> : <div className="recipes">{ cards }</div>}
      </div>
    );
  }
}
