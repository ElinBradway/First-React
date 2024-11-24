import { Link } from "react-router-dom";
import './components/navbar.css';

function NavBar() {

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Fishtank</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;