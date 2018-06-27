import React from 'react';

const Empty = ({ handleRefreshClick }) => (
  <div className="empty">
    <div className="empty-icon">
      <i className="icon icon-stop icon-4x" />
    </div>
    <p className="empty-title h5">You have no data.</p>
    <p className="empty-subtitle">Click the button to refresh.</p>
    <div className="empty-action">
      <button className="btn btn-primary" onClick={handleRefreshClick}>
        Try to refresh
      </button>
    </div>
  </div>
);

export default Empty;
