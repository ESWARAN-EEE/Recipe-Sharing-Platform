import { useParams } from "react-router-dom";
import { recipeData } from "../data/recipes";
import "../styles/RecipeDetail.css";

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipeData.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="recipe-detail">
      <img
        src="/api/placeholder/800/400"
        alt={recipe.name}
        className="recipe-hero-image"
      />
      <div className="recipe-info">
        <h1>{recipe.name}</h1>
        <div className="recipe-meta">
          <span>Prep Time: {recipe.prepTime}</span>
          <span>Cook Time: {recipe.cookTime}</span>
          <span>Cuisine: {recipe.cuisine}</span>
        </div>
        <div className="recipe-description">
          <p>{recipe.description}</p>
        </div>
        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="recipe-instructions">
          <h2>Instructions</h2>
          <ol>
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
