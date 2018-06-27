import React from 'react';
import { capitalize } from '../constants';

const Menu = ({
  isStacked,
  items,
  value,
  lastUpdated,
  handleChange,
  handleStackedPill,
  handleRefresh
}) => (
  <div className="column col-3 col-md-12">
    <ul className="menu">
      <li className="menu-item">
        <div className="tile tile-centered">
          <div className="tile-content">
            <button
              className="btn btn-link"
              onClick={e => handleStackedPill(e)}
            >
              <i className={`icon icon-arrow-${isStacked ? 'down' : 'up'}`} />{' '}
              Categories
            </button>
          </div>
          <button className="btn btn-link" onClick={e => handleRefresh(e)}>
            <i className="form-icon icon icon-refresh" />
          </button>
        </div>
        {lastUpdated && (
          <span className="chip">
            Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}
          </span>
        )}
      </li>
      {!isStacked && (
        <div>
          <li className="divider" />
          {!items.length && <li className="menu-item">No categories.</li>}
          {Object.keys(items).map(key => (
            <li key={key} className="menu-item">
              <div className="menu-badge">
                <label className="label label-primary">
                  {items[key].items ? items[key].items.length : 0}
                </label>
              </div>
              <button
                className={`btn btn-link ${value === key ? 'active' : ''}`}
                onClick={() => handleChange(key)}
              >
                {capitalize(key)}
              </button>
            </li>
          ))}
        </div>
      )}
    </ul>
  </div>
);

export default Menu;
