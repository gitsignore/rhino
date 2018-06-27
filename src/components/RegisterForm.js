import React from 'react';

const RegisterForm = ({
  email,
  password,
  firstName,
  lastName,
  isLoading,
  handleChange,
  isValidForm,
  handleSubmit
}) => (
  <form onSubmit={handleSubmit}>
    <div className="panel-body">
      <div className="tile tile-centered">
        <div className="tile-content">
          <div className="has-icon-right">
            <input
              id="email"
              className="form-input input-lg"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
            {isValidForm() ? (
              <i className="form-icon icon icon-check text-success" />
            ) : (
              <i className="form-icon icon icon-cross text-error" />
            )}
          </div>
        </div>
      </div>
      <div className="tile tile-centered">
        <div className="tile-content">
          <input
            id="password"
            className="form-input input-lg"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="input-group">
        <input
          id="firstName"
          className="form-input input-lg"
          type="text"
          placeholder="FirstName"
          value={firstName}
          onChange={handleChange}
        />
        <input
          id="lastName"
          className="form-input input-lg"
          type="text"
          placeholder="LastName"
          value={lastName}
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="panel-footer">
      <button
        className={`btn btn-primary btn-block ${
          !isValidForm() ? 'disabled' : ''
        } ${isLoading ? 'loading' : ''}`}
        type="submit"
      >
        Sign up
      </button>
    </div>
  </form>
);

export default RegisterForm;
