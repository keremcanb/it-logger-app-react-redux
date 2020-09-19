import {
  GET_LOGS,
  // SET_LOADING,
  // LOGS_ERROR,
  // ADD_LOG,
  // DELETE_LOG,
  // UPDATE_LOG,
  // SEARCH_LOGS,
  // SET_CURRENT,
  // CLEAR_CURRENT,
} from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_LOGS:
      return [...state, payload];
    default:
      return state;
  }
}
