import {
  GET_LOGS
  // SET_LOADING,
  // LOGS_ERROR,
  // ADD_LOG,
  // DELETE_LOG,
  // UPDATE_LOG,
  // SEARCH_LOGS,
  // SET_CURRENT,
  // CLEAR_CURRENT,
} from './types';

export const getLogs = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/');

    dispatch({
      type: GET_LOGS
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: hede,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
