import "./styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>ProductHub</h1>
      <nav>
        <ul>
          <li>
            <Link to="/" className="menu-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/category/electronics" className="menu-item">
              Electronics
            </Link>
          </li>
          <li>
            <Link to="/category/jewelery" className="menu-item">
              Jewelry
            </Link>
          </li>
          <li>
            <Link to="/category/men's clothing" className="menu-item">
              Men's Clothing
            </Link>
          </li>
          <li>
            <Link to="/category/women's clothing" className="menu-item">
              Women's Clothing
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
