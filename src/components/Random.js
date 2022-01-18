
import React from "react";
import RandomRecipe from "./RandomRecipe";
import "./Random.css";

const Random = () => (
  <div className="random_container">
    <div className="container_description">
      Are you feeling adventurous? Do you feel like cooking something but don't know what?
      Let's have some fun by randomly generating one. Click on the button below to get your special recipe:
    </div>
    <RandomRecipe />
  </div>
);

export default Random;
