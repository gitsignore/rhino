import { combineReducers } from 'redux';
import {
  REQUEST_LINES,
  RECEIVE_LINES,
  SELECT_CATEGORY,
  INVALIDATE_CATEGORY,
  RECEIVE_RESUME,
  SIGN_IN,
  SIGN_OUT
} from '../constants';

const authentication = (state = null, action) => {
  switch (action.type) {
    case SIGN_IN:
      const authInformations = {
        isAuthenticated: true,
        token: action.token,
        ...action.user
      };
      localStorage.setItem('authentication', JSON.stringify(authInformations));
      return authInformations;
    case SIGN_OUT:
      localStorage.removeItem('authentication');
      return { isAuthenticated: false };
    default:
      const retrievedAuthInformations = JSON.parse(
        localStorage.getItem('authentication')
      );
      return retrievedAuthInformations
        ? retrievedAuthInformations
        : { isAuthenticated: false };
  }
};

const selectedCategory = (state = 'headers', action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.category;
    default:
      return state;
  }
};

const lines = (
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) => {
  switch (action.type) {
    case INVALIDATE_CATEGORY:
      return {
        ...state,
        didInvalidate: true
      };
    case REQUEST_LINES:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case RECEIVE_RESUME:
    case RECEIVE_LINES:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.lines,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
};

const linesByCategory = (state = {}, action) => {
  switch (action.type) {
    case INVALIDATE_CATEGORY:
    case RECEIVE_LINES:
    case REQUEST_LINES:
      return {
        ...state,
        [action.category]: lines(state[action.category], action)
      };
    case RECEIVE_RESUME:
      const newState = {};

      for (let key in action.lines) {
        newState[key] = lines(state[action.category], {
          type: action.type,
          lines: action.lines[key],
          receivedAt: action.receivedAt
        });
      }

      return newState;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  linesByCategory,
  selectedCategory,
  authentication
});

export default rootReducer;
