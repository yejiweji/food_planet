import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import $ from 'jquery';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./RecipeCard.css";

export default class RecipeCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoadingUrl: false,
    };

    this.handleClick = this.handleDrilldown.bind(this);
  }

  static propTypes = {
    recipe: PropTypes.object,
  };

  handleDrilldown(id) {
    this.setState({ isLoadingUrl: true});

    const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=false`;

    $.getJSON(url)
      .done(data => {
        this.setState({ isLoadingUrl: false });
        window.open(data.sourceUrl, "_blank");
      });
  }

  render() {
    const {
      id,
      title,
      sourceUrl,
      image,
      summary,
      // All other available fields:
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
      // readyInMinutes,
      // servings,
      // imageType,
      // cuisines,
      // dishTypes,
      // diets,
      // occasions,
      // instructions,
      // spoonacularSourceUrl,
    } = this.props.recipe;
    const { isLoadingUrl } = this.state;

    return (
      <div className="recipe_card">
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <div className="recipe_description" dangerouslySetInnerHTML={{ __html: summary }}></div>
            {!sourceUrl ?
              <Button
                variant="outline-info"
                onClick={() => this.handleDrilldown(id)}
              >
                {isLoadingUrl ? 'Loading...' : 'See recipe'}
              </Button>
              : <Button variant="outline-info" href={sourceUrl} target="_blank">See recipe</Button>
            }
          </Card.Body>
        </Card>
      </div>
    );
  }
}

