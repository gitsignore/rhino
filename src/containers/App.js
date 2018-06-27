import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectCategory, fetchResume } from '../actions';
import { InternalsRoutes } from '../routes';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import logo from '../rhino.jpg';

class App extends Component {
  static propTypes = {
    selectedCategory: PropTypes.string,
    linesByCategory: PropTypes.object,
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      isStacked: false
    };
    this.handleStackedPill = this.handleStackedPill.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchResume('resume'));
  }

  handleChange = nextCategory => {
    this.props.dispatch(selectCategory(nextCategory));
  };

  handleRefreshClick = e => {
    e.preventDefault();

    const { dispatch } = this.props;
    dispatch(fetchResume('resume'));
  };

  handleStackedPill = e => {
    e.preventDefault();

    this.setState({
      isStacked: !this.state.isStacked
    });
  };

  render() {
    const { selectedCategory, linesByCategory, authentication } = this.props;
    const { isStacked } = this.state;

    return (
      <main>
        <div className="container">
          <Navbar logo={logo} alt="rhino" authentication={authentication} />
          <div className="columns">
            <Menu
              isStacked={isStacked}
              items={linesByCategory}
              value={selectedCategory}
              handleChange={this.handleChange}
              handleRefresh={this.handleRefreshClick}
              handleStackedPill={this.handleStackedPill}
            />
            <InternalsRoutes />
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  const { selectedCategory, linesByCategory, authentication } = state;

  return {
    authentication,
    selectedCategory,
    linesByCategory
  };
};

export default connect(mapStateToProps)(App);
