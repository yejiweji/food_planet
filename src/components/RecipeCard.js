import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import "./RecipeCard.css";

export default class RecipeCard extends PureComponent {
  static propTypes = {
    recipe: PropTypes.object,
  };

  render() {
    const {
      // vegetarian,
      // vegan,
      // glutenFree,
      // dairyFree,
      // veryHealthy,
      // cheap,
      // veryPopular,
      // sustainable,
      // weightWatcherSmartPoints,
      // gaps,
      // lowFodmap,
      // aggregateLikes,
      // spoonacularScore,
      // healthScore,
      // creditsText,
      // license,
      // sourceName,
      // pricePerServing,
      title,
      // readyInMinutes,
      // servings,
      sourceUrl,
      image,
      // imageType,
      summary,
      // cuisines,
      // dishTypes,
      // diets,
      // occasions,
      // instructions,
      // spoonacularSourceUrl,
    } = this.props.recipe;

    return (
      <div className="recipe_card">
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <div className="recipe_description" dangerouslySetInnerHTML={{ __html: summary }}></div>
            <Button variant="outline-info" href={sourceUrl} target="_blank">See recipe</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

