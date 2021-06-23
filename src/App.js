import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";
import NotFound from "./components/pages/NotFound";
import GithubState from "./components/context/github/GithubState";
import Home from "./components/pages/Home";
import AlertState from "./components/context/alert/AlertState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert alert={alert} />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route exact path='*' component={NotFound} />
              </Switch>
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
