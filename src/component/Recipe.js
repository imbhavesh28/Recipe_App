import React from "react";
import "../App.css";

export default function Recipe({ recipe }) {
  return (
    <div
      className="recipe"
      onClick={() => window.open(recipe["recipe"]["url"])}
    >
      <img className="recipe__img" src={recipe["recipe"]["image"]} alt="" />
      <p className="recipe_name">{recipe["recipe"]["label"]}</p>
    </div>
  );
}
