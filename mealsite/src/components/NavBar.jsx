import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu with delay when a link is clicked
  const closeMenuWithDelay = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">MealSite</div>
      <button
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <NavLink
            to="/"
            exact
            activeClassName="active-link"
            onClick={closeMenuWithDelay}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/recipe"
            activeClassName="active-link"
            onClick={closeMenuWithDelay}
          >
            Recipe
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/explore-meals"
            activeClassName="active-link"
            onClick={closeMenuWithDelay}
          >
            Explore Meals
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tips-nutrition"
            activeClassName="active-link"
            onClick={closeMenuWithDelay}
          >
            Tips & Nutrition
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/benefits"
            activeClassName="active-link"
            onClick={closeMenuWithDelay}
          >
            Benefits
          </NavLink>
        </li>
        <li className="contact-button">
          <NavLink to="/contact" onClick={closeMenuWithDelay}>
            <button className="contact-button1">Contact Us</button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
