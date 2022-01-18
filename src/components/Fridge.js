import React from "react";
import SearchRecipes from "./SearchRecipes";
import "./Fridge.css";

const Fridge = () =>(
  <div className="fridge_container">
    <div className="container_description">
      Do you ever run out of ideas on what to cook? Tired of the same old routine?
      Instead of searching based on the dish, let's search based on what you have in the fridge.
      Type the ingredients you wish to use below, <b>separated by comma</b>s:
    </div>
    <SearchRecipes />
  </div>
);

export default Fridge;
