import { NavLink, Link } from "react-router-dom";
import headerLogo from "../assets/images/header-logo.svg";
const Nav = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-center">
        <img src={headerLogo} alt="Website Logo" className="h-6 mr-2" />
      </div>
      <ul className="flex text-lg">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
      </ul>
      <div>
        <Link to="/signup">Join Us</Link> / <Link to="/login"> Login</Link>
      </div>
    </nav>
  );
};

export default Nav;
