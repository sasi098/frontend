import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="navbar">
      <div className="brand-name">MyCrudApp</div>
      <div className="navbar-inner">
        <Link to="/" id="link-text">
          Home
        </Link>
        <Link to="/Signup" id="link-text">
          SignUp
        </Link>
        <Link to="/Login" id="link-text">
          Login
        </Link>
        <Link to="/View" id="link-text">
          View
        </Link>
      </div>
    </div>
  );
}

export default Header;