import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signOut } from '../actions';

class Logout extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.dispatch(signOut());
    this.props.history.push('/');
  }

  render() {
    return null;
  }
}

export default connect()(Logout);
