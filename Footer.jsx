import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h2>NYC HALAL BITES</h2>
      <p>Fresh Halal Food. Big NYC Flavor.</p>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <p>© {new Date().getFullYear()} NYC Halal Bites</p>
    </footer>
  );
}

export default Footer;