import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Lines = ({ lines, isAuthenticated, handleDeleteItem }) => (
  <table className="table table-striped">
    <tbody>
      {lines.map((line, i) => (
        <tr key={i}>
          <td>{line.title}</td>
          {isAuthenticated && (
            <td>
              <button
                className="btn btn-action float-right mx-2"
                onClick={e => handleDeleteItem(e, line._id)}
              >
                <i className="icon icon-delete text-error" />
              </button>
              <NavLink
                className="btn btn-action float-right"
                exact
                activeClassName="active"
                to={`/edit/${line._id}`}
              >
                <i className="icon icon-edit text-warning" />
              </NavLink>
            </td>
          )}
        </tr>
      ))}
    </tbody>
  </table>
);

Lines.propTypes = {
  lines: PropTypes.array.isRequired
};

export default Lines;
