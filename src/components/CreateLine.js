import React from 'react';

const CreateLine = ({ title, subtitle, isPublish }) => (
  <form className="form-horizontal">
    <div className="form-group">
      <div className="col-3">
        <label className="form-label" htmlFor="title">
          Title
        </label>
      </div>
      <div className="col-9">
        <input
          className="form-input"
          id="title"
          placeholder="Title"
          value={title}
          type="text"
        />
      </div>
    </div>
    <div className="form-group">
      <div className="col-3">
        <label className="form-label" htmlFor="subtitle">
          Subtitle
        </label>
      </div>
      <div className="col-9">
        <input
          className="form-input"
          id="subtitle"
          placeholder="Subtitle"
          value={subtitle}
          type="text"
        />
      </div>
    </div>
    <div className="form-group">
      <div className="col-3">
        <label className="form-label" htmlFor="isPublish">
          Publish ?
        </label>
      </div>
      <div className="col-9">
        <div className="form-group">
          <label className="form-switch">
            <input id="isPublish" checked={isPublish} type="checkbox" />
            <i className="form-icon" />
          </label>
        </div>
      </div>
    </div>
    <div className="col-4 col-mx-auto">
      <button className="btn btn-primary btn-block" type="submit">
        Submit
      </button>
    </div>
  </form>
);

export default CreateLine;
