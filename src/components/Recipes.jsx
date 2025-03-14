import { Link } from "react-router-dom";
import { recipeData } from "../data/recipes";
import "../styles/Recipes.css";

function Recipes() {
  return (
    <div className="recipes-container">
      <h1>Our Recipes</h1>
      <div className="recipes-grid">
        {recipeData.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <div className="recipe-content">
              <h2>{recipe.name}</h2>
              <p>{recipe.description}</p>
              <div className="recipe-meta">
                <span>Prep Time: {recipe.prepTime}</span>
                <span>Cuisine: {recipe.cuisine}</span>
              </div>
              <Link to={`/recipe/${recipe.id}`} className="view-recipe">
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
