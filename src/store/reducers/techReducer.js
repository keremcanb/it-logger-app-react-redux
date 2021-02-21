import { GET_TECHS, ADD_TECH, DELETE_TECH, SET_LOADING, TECHS_ERROR } from '../types';

const initialState = {
  techs: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  const { techs } = state;

  switch (type) {
    case GET_TECHS:
      return {
        ...state,
        techs: payload,
        loading: false
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...techs, payload],
        loading: false
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: techs.filter((tech) => tech.id !== payload),
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case TECHS_ERROR:
      console.error(payload);
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
};
