import "./App.css";
import Axios from "axios";
import "./component/Recipe";
import { useState } from "react";
import Recipe from "./component/Recipe";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabel, sethealthLabels] = useState("vegan");

  const YOUR_APP_ID = "2bb994e7";
  const YOUR_APP_KEY = "2d2fb655a995d4bd3c688d56a02cb1da";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}& &health=${healthLabel}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="app">
      <h1>🍔Food Recipe App🍔</h1>
      <form className="app__SearchForm" onSubmit={onSubmit}>
        <input
          type="text"
          className="app__input"
          placeholder="Enter Recipe"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />
        <select className="app__healthlabels">
          <option onClick={() => sethealthLabels("vegan")}>Vegan </option>
        </select>
      </form>

      <div className="app__recipes">
        {recipes.map((recipe) => {
          return <Recipe recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
