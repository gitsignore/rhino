import React from 'react';
import { NavLink } from 'react-router-dom';

const Tabs = ({ handleRefreshClick, isFetching }) => (
  <ul className="tab tab-block">
    <li className="tab-item">
      <NavLink className="has-icon-right" exact activeClassName="active" to="/">
        List
        <button
          className={`btn btn-link form-icon icon ${
            isFetching ? 'loading' : 'icon-refresh'
          }`}
          onClick={e => handleRefreshClick(e)}
        />
      </NavLink>
    </li>
    <li className="tab-item">
      <NavLink
        className="has-icon-right"
        exact
        activeClassName="active"
        to="/create"
      >
        Create
      </NavLink>
    </li>
    <li className="tab-item">
      <NavLink
        className="has-icon-right c-not-allowed"
        activeClassName="active"
        to="/edit"
        onClick={e => e.preventDefault()}
      >
        Edit
      </NavLink>
    </li>
  </ul>
);

export default Tabs;
