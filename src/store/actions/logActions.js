import axios from 'axios';
import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SEARCH_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../types';

const headers = {
  headers: {
    'Content-Type': 'application/json'
  }
};

export const setLoading = () => ({
  type: SET_LOADING
});

export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const { data } = await axios.get('/logs');
    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const addLog = () => async (dispatch) => {
  try {
    setLoading();
    const { data } = await axios.post('/logs', headers);
    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();
    axios.delete(`/logs/${id}`);
    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const { data } = await axios.put(`/logs/${log.id}`, headers);
    dispatch({
      type: UPDATE_LOG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const searchLogs = (text) => async (dispatch) => {
  try {
    setLoading();
    const { data } = await axios.get(`/logs?q=${text}`);
    dispatch({
      type: SEARCH_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const setCurrent = (log) => ({
  type: SET_CURRENT,
  payload: log
});

export const clearCurrent = () => ({
  type: CLEAR_CURRENT
});
