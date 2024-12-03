import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About and Links Section */}
        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#community">Join Our Community</a>
            </li>
            <li>
              <a href="#updates">Meal Updates</a>
            </li>
            <li>
              <a href="#recipes">Popular Recipes</a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
            >
              <FontAwesomeIcon icon={faPinterest} />
            </a>
          </div>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>
            Subscribe to our newsletter for the latest meal ideas, tips, and
            recipes.
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} MealMaster. All rights reserved.
        </p>
        <p>Designed with ❤️ by Humphrey Omondi</p>
      </div>
    </footer>
  );
};

export default Footer;
