import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar({ isAuthenticated, onLogout, user }) {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">KEC Recipes</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        {isAuthenticated && <Link to="/recipes">Recipes</Link>}
        {!isAuthenticated ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <div className="user-menu">
            <span>Welcome, {user.username}!</span>
            <button onClick={onLogout}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
