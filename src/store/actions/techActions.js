import { GET_TECHS, ADD_TECH, DELETE_TECH, SET_LOADING, TECHS_ERROR } from '../types';

export const setLoading = () => ({
  type: SET_LOADING
});

export const getTechs = () => async (dispatch) => {
  try {
    setLoading();
    const { data } = await axios.get('/techs');
    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading();
    const { data } = await axios.post('/techs', {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // const res = await fetch('/techs', {
    //   method: 'POST',
    //   body: JSON.stringify(tech),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
    // const data = await res.json();
    dispatch({
      type: ADD_TECH,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading();
    axios.delete(`/techs/${id}`);
    dispatch({
      type: DELETE_TECH,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};
