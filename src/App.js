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
      }]
    };

    this.handleRandomRecipeSearch = this.handleRandomRecipeSearch.bind(this);
    this.handleNavChange = this.handleNavChange.bind(this);
    this.handleIngredientRecipesSearch = this.handleIngredientRecipesSearch.bind(this);
    this.updateSearchQuery = this.updateSearchQuery.bind(this);
    this.completeItem = this.completeItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.handleChecklistSubmit = this.handleChecklistSubmit.bind(this);
    this.updateChecklistValue = this.updateChecklistValue.bind(this);
  }

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

    const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=1`;

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

    const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
    const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${searchQuery}`;

    $.getJSON(url)
      .done(data => { this.setState({ ingredientIsLoading: false, ingredientRecipes: data }); });
  }

  updateSearchQuery(e) {
    this.setState({ searchQuery: e.target.value })
  }

  updateChecklistValue(e) {
    this.setState({ groceryListValue: e.target.value });
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
    } = this.state;
  
    return (
      <div className="app">
        <Header />
        <div className="wrapper">
          <NavBar navChange={this.handleNavChange} cardSelected={cardSelected} />
          <Container
            handleRandomRecipeSearch={this.handleRandomRecipeSearch}
            handleIngredientRecipesSearch={this.handleIngredientRecipesSearch}
            updateSearchQuery={this.updateSearchQuery}
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
            updateChecklistValue={this.updateChecklistValue}
          />
        </div>
      </div>
    );
  }
}
