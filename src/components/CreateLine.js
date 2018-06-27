import React from 'react';

const CreateLine = () => (
  <form className="form-horizontal" action="#forms">
    <div className="form-group">
      <div className="col-3">
        <label className="form-label" htmlFor="input-example-8">
          Email
        </label>
      </div>
      <div className="col-9">
        <input
          className="form-input"
          id="input-example-8"
          placeholder="Email"
          value="spectre@example.com"
          pattern="[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
          type="email"
        />
      </div>
    </div>
    <div className="form-group">
      <div className="col-3">
        <label className="form-label" htmlFor="input-example-9">
          URL
        </label>
      </div>
      <div className="col-9">
        <input
          className="form-input"
          id="input-example-9"
          placeholder="URL"
          value="https://github.com/picturepan2/spectre"
          type="url"
        />
      </div>
    </div>
    <div className="form-group">
      <div className="col-3">
        <label className="form-label" htmlFor="input-example-10">
          Search
        </label>
      </div>
      <div className="col-9">
        <input
          className="form-input"
          id="input-example-10"
          placeholder="Search"
          type="search"
        />
      </div>
    </div>
    <div className="form-group">
      <div className="col-3">
        <label className="form-label" htmlFor="input-example-11">
          Tel
        </label>
      </div>
      <div className="col-9">
        <input
          className="form-input"
          id="input-example-11"
          placeholder="Tel"
          value="1-(888)-888-8888"
          type="tel"
        />
      </div>
    </div>
    <div className="form-group">
      <div className="col-3">
        <label className="form-label" htmlFor="input-example-12">
          Password
        </label>
      </div>
      <div className="col-9">
        <input
          className="form-input"
          id="input-example-12"
          placeholder="Password"
          value="123456789"
          type="password"
        />
      </div>
    </div>
    <div className="form-group">
      <div className="col-3">
        <label className="form-label" htmlFor="input-example-13">
          Number
        </label>
      </div>
      <div className="col-9">
        <input
          className="form-input"
          id="input-example-13"
          placeholder="00"
          value="66"
          type="number"
        />
      </div>
    </div>
    <div className="form-group">
      <div className="col-3">
        <label className="form-label" htmlFor="input-example-14">
          Date
        </label>
      </div>
      <div className="col-9">
        <input
          className="form-input"
          id="input-example-14"
          value="2016-12-31"
          type="date"
        />
      </div>
    </div>
    <div className="form-group">
      <div className="col-3">
        <label className="form-label" htmlFor="input-example-16">
          File
        </label>
      </div>
      <div className="col-9">
        <input className="form-input" id="input-example-16" type="file" />
      </div>
    </div>
  </form>
);

export default CreateLine;
