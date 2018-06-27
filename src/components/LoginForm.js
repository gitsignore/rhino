import React from 'react';

const LoginForm = ({
  email,
  password,
  isLoading,
  hasError,
  handleChange,
  isValidForm,
  handleSubmit
}) => (
  <form onSubmit={handleSubmit} className={hasError ? 'has-error' : ''}>
    <div className="panel-body">
      {hasError && (
        <div className="tile tile-centered">
          <p className="form-input-hint">Bad credentials.</p>
        </div>
      )}
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
    </div>
    <div className="panel-footer">
      <button
        className={`btn btn-primary btn-block ${
          !isValidForm() ? 'disabled' : ''
        } ${isLoading ? 'loading' : ''}`}
        type="submit"
      >
        Sign in
      </button>
    </div>
  </form>
);

export default LoginForm;
