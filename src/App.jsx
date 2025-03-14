import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import RecipeDetail from "./components/RecipeDetail";
import Login from "./components/Login";
import Register from "./components/Register";
import "./styles/App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <Router>
      <div className="app">
        <Navbar
          isAuthenticated={isAuthenticated}
          onLogout={handleLogout}
          user={user}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/recipes"
            element={isAuthenticated ? <Recipes /> : <Navigate to="/login" />}
          />
          <Route
            path="/recipe/:id"
            element={
              isAuthenticated ? <RecipeDetail /> : <Navigate to="/login" />
            }
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
