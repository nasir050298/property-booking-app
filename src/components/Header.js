import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">PropertyListings</Link>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;