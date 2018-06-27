import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  selectCategory,
  fetchLinesIfNeeded,
  invalidateCategory,
  deleteItem
} from '../actions';
import { capitalize } from '../constants';
import Tabs from '../components/Tabs';
import Lines from '../components/Lines';
import Empty from '../components/Empty';
import Loading from '../components/Loading';

class List extends Component {
  static propTypes = {
    selectedCategory: PropTypes.string,
    lines: PropTypes.array,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { dispatch, selectedCategory } = this.props;
    dispatch(fetchLinesIfNeeded(selectedCategory));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedCategory !== this.props.selectedCategory) {
      const { dispatch, selectedCategory } = nextProps;
      dispatch(fetchLinesIfNeeded(selectedCategory));
    }
  }

  handleChange = nextCategory => {
    this.props.dispatch(selectCategory(nextCategory));
  };

  handleRefreshClick = e => {
    e.preventDefault();

    const { dispatch, selectedCategory } = this.props;
    dispatch(invalidateCategory(selectedCategory));
    dispatch(fetchLinesIfNeeded(selectedCategory));
  };

  handleDeleteItem = (e, itemId) => {
    e.preventDefault();

    const { dispatch, selectedCategory } = this.props;
    dispatch(deleteItem(selectedCategory, itemId));
  };

  render() {
    const {
      selectedCategory,
      lines,
      isFetching,
      lastUpdated,
      isAuthenticated
    } = this.props;
    const isEmpty = null === lines || lines.length === 0;
    return (
      <div className="column col-9 col-md-12">
        <h1>{capitalize(selectedCategory)}</h1>
        {lastUpdated && (
          <span className="chip">
            Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}
          </span>
        )}
        <Tabs
          handleRefreshClick={this.handleRefreshClick}
          isFetching={isFetching}
        />
        {isEmpty ? (
          isFetching ? (
            <div className="column col-3 centered">
              <Loading />
            </div>
          ) : (
            <Empty handleRefreshClick={this.handleRefreshClick} />
          )
        ) : (
          <div>
            <Lines
              lines={lines}
              isAuthenticated={isAuthenticated}
              handleDeleteItem={this.handleDeleteItem}
            />
          </div>
        )}
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
    items: []
  };

  return {
    isAuthenticated: authentication.isAuthenticated,
    selectedCategory,
    lines,
    isFetching,
    lastUpdated
  };
};

export default connect(mapStateToProps)(List);
