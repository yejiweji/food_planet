import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Spinner from 'react-bootstrap/Spinner';
import EmptyResults from "./EmptyResults";
import RecipeCard from "./RecipeCard";
import "./SearchRecipes.css";

export default class SearchRecipes extends PureComponent {
  static propTypes = {
    handleIngredientRecipesSearch: PropTypes.func,
    updateParentState: PropTypes.func,
    searchQuery: PropTypes.string,
    isLoading: PropTypes.bool,
    recipes: PropTypes.array,
  };

  render() {
    const {
      isLoading,
      recipes,
      searchQuery,
      handleIngredientRecipesSearch,
      updateParentState,
    } = this.props;

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
            onChange={e => updateParentState({ searchQuery: e.target.value })}
            onKeyPress={event => {
              if (event.key === "Enter") {
                handleIngredientRecipesSearch();
              }
            }}
          />
          <Button
            variant="info"
            id="button-addon2"
            onClick={!isLoading ? handleIngredientRecipesSearch : null}
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
