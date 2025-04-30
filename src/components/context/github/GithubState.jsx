/* eslint-disable react/prop-types */
import { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_ERROR_MESSAGE,
  FETCH_FIRST_30_USERS,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    errorMessage: "",
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Get first 30 users
  const fetchFirst30Users = async () => {
    setLoading();
    try {
      const response = await axios.get(
        `https://api.github.com/users?client_id=${
          import.meta.env.VITE_GITHUB_CLIENT_ID
        }&client_secret=${import.meta.env.VITE_GITHUB_CLIENT_SECRET}`
      );
      console.log(response.data);
      dispatch({
        type: FETCH_FIRST_30_USERS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: SET_ERROR_MESSAGE,
        payload: error.message,
      });
    }
  };

  // Search Users
  const searchUsers = async (text) => {
    setLoading();
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${
          import.meta.env.VITE_GITHUB_CLIENT_ID
        }&client_secret=${import.meta.env.VITE_GITHUB_CLIENT_SECRET}`
      );
      console.log(response.data);
      dispatch({
        type: SEARCH_USERS,
        payload: response.data.items,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  // Clear users from state
  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };

  // Get a user
  const getUser = async (username) => {
    setLoading();

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}?client_id=${
          import.meta.env.VITE_GITHUB_CLIENT_ID
        }&client_secret=${import.meta.env.VITE_GITHUB_CLIENT_SECRET}`
      );
      console.log(response.data);
      dispatch({
        type: GET_USER,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Get users repos
  const getUserRepos = async (username) => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${
          import.meta.env.VITE_GITHUB_CLIENT_ID
        }&client_secret=${import.meta.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      console.log(response.data);
      dispatch({
        type: GET_REPOS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        errorMessage: state.errorMessage,
        searchUsers,
        fetchFirst30Users,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
