import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to TastyRecipes</h1>
        <p>Discover delicious recipes from around the world</p>
        <Link to="/recipes" className="cta-button">
          Explore Recipes
        </Link>
      </div>
      <div className="features">
        <Link to="/recipes" className="Asbutton">
        <div className="feature">
          <h2>Asian Cuisine</h2>
          <p>Explore authentic Asian recipes</p>
        </div>
        </Link>
        <Link to="/recipes" className="Asbutton">
        
        <div className="feature">
          <h2>Indian Dishes</h2>
          <p>Discover rich Indian flavors</p>
        </div></Link>
        <Link to="/recipes" className="Asbutton">
        
        <div className="feature">
          <h2>Seafood</h2>
          <p>Fresh and delicious seafood recipes</p>
        </div></Link>
      </div>
    </div>
  );
}

export default Home;
