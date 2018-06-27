import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  selectCategory,
  fetchLinesIfNeeded,
  invalidateCategory,
} from '../actions';
import { capitalize } from '../constants';
import Tabs from '../components/Tabs';
import CreateLine from '../components/CreateLine';

class Create extends Component {
  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.push('/sign-in');
    }
  }

  render() {
    const { selectedCategory, lines, isFetching, lastUpdated } = this.props;
    return (
      <div className="column col-9 col-md-12">
        <h1>{capitalize(selectedCategory)}</h1>
        <Tabs
          handleRefreshClick={this.handleRefreshClick}
          isFetching={isFetching}
        />
        <CreateLine />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { linesByCategory, selectedCategory, authentication } = state;
  const { isFetching, lastUpdated, items: lines } = linesByCategory[
    selectedCategory
  ] || {
    isFetching: true,
    items: [],
  };

  return {
    isAuthenticated: authentication.isAuthenticated,
    selectedCategory,
    lines,
    isFetching,
    lastUpdated,
  };
};

export default connect(mapStateToProps)(Create);
