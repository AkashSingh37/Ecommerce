import React from 'react';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <h1 className="navbar__title">Shopkart</h1>
        <div className="navbar__buttons">
          <button className="navbar__button">Login</button>
          <button className="navbar__button">Products</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
