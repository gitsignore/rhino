import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Client from "@gitsignore/http-client";
import { signIn } from "../actions";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import logo from "../rhino.jpg";

class Login extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      hasError: false,
      email: "",
      password: "",
      lastName: "",
      firstName: ""
    };
    this.isValidForm = this.isValidForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  isValidForm() {
    const emailRegexValidator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return emailRegexValidator.test(this.state.email);
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
      hasError: false
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });

    try {
      const response = await Client.POST(
        "/auth/login",
        { email: this.state.email, password: this.state.password },
        {
          url: process.env.REACT_APP_API_URI,
          port: process.env.REACT_APP_API_PORT,
          entrypoint: process.env.REACT_APP_API_ENTRYPOINT
        }
      );
      this.props.dispatch(signIn(response));
      this.props.history.push("/");
    } catch (err) {
      this.setState({ isLoading: false, hasError: true });
    }
  };

  render() {
    const { path } = this.props.match;
    const {
      email,
      password,
      lastName,
      firstName,
      isLoading,
      hasError
    } = this.state;
    return (
      <div className="container">
        <div className="columns">
          <div className="column col-12">
            <div className="column col-4 col-xs-4 col-mx-auto">
              <div className="panel">
                <div className="panel-header text-center">
                  <figure className="avatar avatar-xl">
                    <img src={logo} alt="Rhino" />
                  </figure>
                  <div className="panel-title h5 mt-10">Rhino</div>
                  <div className="panel-subtitle">THE HULK</div>
                </div>
                <nav className="panel-nav">
                  <ul className="tab tab-block">
                    <li className="tab-item">
                      <NavLink activeClassName="active" to="/sign-in">
                        Sign in
                      </NavLink>
                    </li>
                    <li className="tab-item">
                      <NavLink activeClassName="active" to="/sign-up">
                        Sign up
                      </NavLink>
                    </li>
                  </ul>
                </nav>
                {path === "/sign-in" ? (
                  <LoginForm
                    email={email}
                    password={password}
                    isLoading={isLoading}
                    hasError={hasError}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    isValidForm={this.isValidForm}
                  />
                ) : (
                  <RegisterForm
                    email={email}
                    password={password}
                    lastName={lastName}
                    firstName={firstName}
                    isLoading={isLoading}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    isValidForm={this.isValidForm}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Login);
