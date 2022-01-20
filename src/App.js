import React, { PureComponent } from "react";
import $ from 'jquery';
import Container from "./components/Container";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import './App.css';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      navCard: "fridge",
      title: "What's in your fridge?",
      cardSelected: "fridge",
      ingredientIsLoading: false,
      randomIsLoading: true,
      randomRecipes: [],
      ingredientRecipes: [],
      searchQuery: "",
      groceryListValue: "",
      groceryListItems: [{
        text: "(Example) buy 2 onions",
        isCompleted: false
      }],
      zoom: 8,
      currentCoords: {
        lat: 45.55,
        lng: -74.01,
      },
      resultLocations: [],
      pinDetails: {},
      showPinDetails: false,
      mealPreps: [],
      mealPrepIsLoading: false,
    };

    this.handleRandomRecipeSearch = this.handleRandomRecipeSearch.bind(this);
    this.handleNavChange = this.handleNavChange.bind(this);
    this.handleIngredientRecipesSearch = this.handleIngredientRecipesSearch.bind(this);
    this.completeItem = this.completeItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.handleChecklistSubmit = this.handleChecklistSubmit.bind(this);
    this.updateParentState = this.updateParentState.bind(this);
    this.handleMealPlanSearch = this.handleMealPlanSearch.bind(this);
  }

  updateParentState = (state) => {
    this.setState(state);
  };

  addItem = text => {
    const { groceryListItems } = this.state;
  
    const newItems = [...groceryListItems, { text }];
    this.setState({ groceryListItems: newItems });
  };

  completeItem = index => {
    const { groceryListItems } = this.state;

    const newItems = [...groceryListItems];
    newItems[index].isCompleted = true;
    this.setState({ groceryListItems: newItems });
  };

  removeItem = index => {
    const { groceryListItems } = this.state;

    const newItems = [...groceryListItems];
    newItems.splice(index, 1);
    this.setState({ groceryListItems: newItems });
  };

  handleChecklistSubmit = e => {
    const { groceryListValue } = this.state;
    e.preventDefault();

    if (!groceryListValue) {
      return;
    }
    this.addItem(groceryListValue);
    this.setState({ groceryListValue: "" });
  };

  handleRandomRecipeSearch() {
    this.setState({ randomIsLoading: true });
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=1`;

    $.getJSON(url)
      .done(data => { this.setState({ randomIsLoading: false, randomRecipes: data.recipes }); });
  }

  handleNavChange = event => {
    let title = "";

    switch(event) {
      case "fridge":
        title = "What's in your fridge? 🔍";
        break;
      case "grocery":
        title = "What do you need? 🛒";
        break;
      case "calendar":
        title = "What's planned for the week? 🗓";
        break;
      case "random":
        title = "Want to get inspired 🔮?";
        break;
      default:
        title = "";
    }

    this.setState({
      navCard: event,
      title: title,
      cardSelected: event,
    });
  };

  handleIngredientRecipesSearch() {
    const { searchQuery } = this.state;

    this.setState({ ingredientIsLoading: true });
    const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&ingredients=${searchQuery}`;

    $.getJSON(url)
      .done(data => { this.setState({ ingredientIsLoading: false, ingredientRecipes: data }); });
  }

  handleMealPlanSearch() {
    this.setState({ mealPrepIsLoading: true });
    const url = `https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&timeFrame=week`;

    $.getJSON(url)
      .done(data => { this.setState({ mealPrepIsLoading: false, mealPreps: data.week }); });
  }

  render() {
    const {
      navCard,
      title,
      cardSelected,
      ingredientIsLoading,
      randomIsLoading,
      randomRecipes,
      ingredientRecipes,
      searchQuery,
      groceryListValue,
      groceryListItems,
      zoom,
      currentCoords,
      resultLocations,
      showPinDetails,
      pinDetails,
      mealPrepIsLoading,
      mealPreps,
    } = this.state;
  
    return (
      <div className="app">
        <Header />
        <div className="wrapper">
          <NavBar navChange={this.handleNavChange} cardSelected={cardSelected} />
          <Container
            handleRandomRecipeSearch={this.handleRandomRecipeSearch}
            handleIngredientRecipesSearch={this.handleIngredientRecipesSearch}
            title={title}
            navCard={navCard}
            ingredientIsLoading={ingredientIsLoading}
            randomIsLoading={randomIsLoading}
            randomRecipes={randomRecipes}
            ingredientRecipes={ingredientRecipes}
            searchQuery={searchQuery}
            groceryListValue={groceryListValue}
            groceryListItems={groceryListItems}
            completeItem={this.completeItem}
            removeItem={this.removeItem}
            handleChecklistSubmit={this.handleChecklistSubmit}
            zoom={zoom}
            currentCoords={currentCoords}
            resultLocations={resultLocations}
            showPinDetails={showPinDetails}
            pinDetails={pinDetails}
            updateParentState={this.updateParentState}
            handleMealPlanSearch={this.handleMealPlanSearch}
            mealPrepIsLoading={mealPrepIsLoading}
            mealPreps={mealPreps}
          />
        </div>
      </div>
    );
  }
}
