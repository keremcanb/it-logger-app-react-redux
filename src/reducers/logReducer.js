import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  // DELETE_LOG,
  // UPDATE_LOG,
  // SEARCH_LOGS,
  // SET_CURRENT,
  // CLEAR_CURRENT,
} from '../actions/types';

const initialState = { logs: null, curent: null, loading: false, error: null };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case ADD_LOG:
      return { ...state, logs: [...state.logs, payload], loading: false };
    case GET_LOGS:
      return { ...state, logs: payload, loading: false };
    case LOGS_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
}
