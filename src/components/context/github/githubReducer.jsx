import {
  CLEAR_USERS,
  FETCH_FIRST_30_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_ERROR_MESSAGE,
  SET_LOADING,
} from "../types";

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case FETCH_FIRST_30_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        errorMessage: "",
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        errorMessage: "",
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        loading: false,
        users: "",
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
