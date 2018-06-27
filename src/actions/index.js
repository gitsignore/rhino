import Client from '@gitsignore/http-client';
import {
  REQUEST_LINES,
  RECEIVE_LINES,
  SELECT_CATEGORY,
  INVALIDATE_CATEGORY,
  REQUEST_RESUME,
  RECEIVE_RESUME,
  SIGN_IN,
  SIGN_OUT,
} from '../constants';

export const selectCategory = category => ({
  type: SELECT_CATEGORY,
  category,
});

export const invalidateCategory = category => ({
  type: INVALIDATE_CATEGORY,
  category,
});

export const deleteItem = (category, itemId) => dispatch => {
  // dispatch(requestResume());
  // return client
  //   .request({
  //     path: `/${category}/${itemId}`,
  //     method: 'DELETE'
  //   })
  //   .then(
  //     response =>
  //       dispatch(invalidateCategory(category)) &&
  //       dispatch(fetchLinesIfNeeded(category))
  //   )
  //   .catch(() => console.log('FAILED TO DELETE ITEM'));
};

export const requestLines = category => ({
  type: REQUEST_LINES,
  category,
});

export const requestResume = () => ({
  type: REQUEST_RESUME,
  category: 'resume',
});

export const receiveLines = (category, lines) => ({
  type: RECEIVE_LINES,
  category,
  lines,
  receivedAt: Date.now(),
});

export const receiveResume = (category, lines) => ({
  type: RECEIVE_RESUME,
  category,
  lines,
  receivedAt: Date.now(),
});

const getResume = category => async dispatch => {
  dispatch(requestResume());
  try {
    const response = await Client.GET('/resume', {
      url: process.env.REACT_APP_API_URI,
      port: process.env.REACT_APP_API_PORT,
      entrypoint: process.env.REACT_APP_API_ENTRYPOINT,
    });
    return dispatch(receiveResume(category, response));
  } catch (err) {
    dispatch(receiveResume(category, []));
  }
};

const fetchLines = category => async dispatch => {
  dispatch(requestLines(category));
  try {
    const response = await Client.GET(
      `/${category.replace(/([A-Z])/g, '-$1')}`,
      {
        url: process.env.REACT_APP_API_URI,
        port: process.env.REACT_APP_API_PORT,
        entrypoint: process.env.REACT_APP_API_ENTRYPOINT,
      }
    );
    return dispatch(receiveLines(category, response));
  } catch (err) {
    dispatch(receiveLines(category, []));
  }
};

const shouldFetchLines = (state, category) => {
  const lines = state.linesByCategory[category];
  if (!lines) {
    return true;
  }
  if (lines.isFetching) {
    return false;
  }
  return lines.didInvalidate;
};

export const fetchLinesIfNeeded = category => (dispatch, getState) => {
  if (shouldFetchLines(getState(), category)) {
    return dispatch(fetchLines(category));
  }
};

export const fetchResume = category => dispatch =>
  dispatch(getResume(category));

export const signIn = login => dispatch =>
  dispatch({
    type: SIGN_IN,
    ...login,
  });

export const signOut = () => ({ type: SIGN_OUT });
