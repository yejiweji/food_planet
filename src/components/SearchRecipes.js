
import React, { Component } from "react";
import $ from 'jquery';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Spinner from 'react-bootstrap/Spinner';
import EmptyResults from "./EmptyResults";
import RecipeCard from "./RecipeCard";
import "./SearchRecipes.css";

export default class SearchRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      recipes: [],
      searchQuery: "",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { searchQuery } = this.state;

    this.setState({ isLoading: true });

    const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
    const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${searchQuery}`;

    $.getJSON(url)
      .done(data => { this.setState({ isLoading: false, recipes: data }); });
  }

  render() {
    const { isLoading, recipes, searchQuery } = this.state;

    let cards = null;
    if (recipes) {
      cards = recipes.map((item, i) => (
        <RecipeCard key={item.id} recipe={item} />
      ));
    }

    return (
      <div className="search_recipes_container">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Type your ingredients"
            aria-label="Type your ingredients"
            aria-describedby="ingredients-input-box"
            type="text"
            as="textarea"
            value={searchQuery}
            onChange={e => this.setState({ searchQuery: e.target.value })}
            onKeyPress={event => {
              if (event.key === "Enter") {
                this.handleClick();
              }
            }}
          />
          <Button
            variant="info"
            id="button-addon2"
            onClick={!isLoading ? this.handleClick : null}
          >
            {isLoading ?
              <span>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                 Loading...
              </span> : <span>Go find</span>}
          </Button>
        </InputGroup>
        { recipes ? <div className="recipes">{ cards }</div> : <EmptyResults />}
      </div>
    );
  }
}
