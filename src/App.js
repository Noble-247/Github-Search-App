import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import "./App.css";
import Footer from "./components/layout/Footer";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessge, setErrorMessge] = useState("");
  const [alert, setAlert] = useState(null);

  //display first 30 github users

  useEffect(() => {
    setLoading(true);
    const fetchFirst30Users = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        );
        console.log(response.data);
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setErrorMessge(error.message);
        setLoading(false);
      }
    };
    fetchFirst30Users();
  }, []);

  //Search Github users
  const searchUsers = async (text) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      console.log(response.data);
      setUsers(response.data.items);
      setLoading(false);
      /* if (response.data.items === 0) {
        throw new SyntaxError(
          "Sorry, but your search did not return any result"
        );
      } else {
        this.setState({ users: response.data.items, loading: false });
      } */
    } catch (error) {
      console.log(error.message);
    }
  };

  // Get a user
  const getUser = async (username) => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      console.log(response.data);

      setUser(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  //Get users repos
  const getUserRepos = async (username) => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      console.log(response.data);

      setRepos(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // Clear users from state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  //Show search validation alert message
  const showAlert = (message, type) => {
    setAlert({ message, type });

    //Make the alert go away after 6sec
    setTimeout(() => {
      setAlert(null);
    }, 6000);
  };

  //Conditionally render the clear users button
  const showOrHideClearButton = () => {
    return users.length > 0 ? true : false;
  };

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <Fragment>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showOrHideClearButton={showOrHideClearButton()}
                    showAlert={showAlert}
                  />
                  <Users
                    loading={loading}
                    users={users}
                    errorMessage={errorMessge}
                  />
                </Fragment>
              )}
            />
            <Route exact path='/about' component={About} />
            <Route
              exact
              path='/user/:login'
              render={(props) => (
                <User
                  {...props}
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  repos={repos}
                  loading={loading}
                  user={user}
                />
              )}
            />
          </Switch>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
