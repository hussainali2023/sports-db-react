import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <nav className="header">
      <div>
        <h1>Sports DB</h1>
      </div>
      <div>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Nav;
