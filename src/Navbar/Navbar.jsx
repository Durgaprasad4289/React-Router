import { NavLink } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">AlgoFlow</h2>

      <div className="nav-links">
        <NavLink to="/" end className="link">
          Home
        </NavLink>

        <NavLink to="/products" className="link">
          Products
        </NavLink>

        <NavLink to="/contact" className="link">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;