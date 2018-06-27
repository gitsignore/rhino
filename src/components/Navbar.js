import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ logo, alt, authentication }) => (
  <div className="navbar">
    <div className="navbar-section">
      <img src={logo} alt={alt} style={{ width: 50 }} />
      <button className="btn btn-link btn-lg active">Rhino</button>
    </div>
    {!authentication.isAuthenticated && (
      <div className="navbar-section">
        <NavLink
          className="btn btn-link"
          activeClassName="active"
          to="/sign-in"
        >
          Sign in
        </NavLink>
        <NavLink
          className="btn btn-link"
          activeClassName="active"
          to="/sign-up"
        >
          Sign up
        </NavLink>
      </div>
    )}
    {authentication.isAuthenticated && (
      <div className="navbar-section">
        <button className="btn btn-link input-group-btn disabled">
          {`${authentication.firstName} ${authentication.lastName}`}
        </button>
        <button className="btn btn-link input-group-btn disabled">
          {authentication.role}
        </button>
        <NavLink
          className="btn btn-link"
          activeClassName="active"
          to="/sign-out"
        >
          Sign out
        </NavLink>
      </div>
    )}
  </div>
);

export default Navbar;
