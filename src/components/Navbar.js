
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">Home</Link>
        <Link to="/posts" className="nav-link">Posts</Link>      
        <Link to="/add-post" className="nav-link">Add Post</Link>
        <Link to="/favorites" className="nav-link">Favorites</Link>
        <Link to="/news-feed" className="nav-link">News Feed</Link>
        <Link to="/about" className="nav-link">About Us</Link>




      </div>
    </nav>
  );
};

export default Navbar;
