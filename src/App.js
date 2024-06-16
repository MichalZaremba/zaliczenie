import "./App.css";
import { Searchbar } from "./Searchbar.js";
import { useState } from "react";
import { RecipesList } from "react";
import { Header } from "./Header.js";

function App() {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);
  return (
    <div className="App">
      <Header />
      <Searchbar setRecipes={setRecipes} />
      <RecipesList recipes={recipes} />
    </div>
  );
}

export default App;
