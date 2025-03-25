import { Link } from "react-router-dom";
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="nav-header">
            <div className="logo">Logo here</div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/aboutus">AboutUs</Link></li>
        <li><Link to="/contactus">ContactUs</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
    </header>
  );
};

export default Navbar;
