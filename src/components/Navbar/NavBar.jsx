import { Link } from "react-router-dom";
import "./navbar.css";
const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/user/login">Login</Link>
      <section className="navSection">
        <Link to="/user/registration">Sign up</Link>
      </section>
    </div>
  );
};

export default NavBar;
