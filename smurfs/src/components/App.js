/** @format */

import React from "react";
import "./App.css";

import Smurfs from "./Smurfs";
import Form from "./Form";
import Profile from "./Profile";
//react router
import { Link, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/">
      <Link to="/profile">Profile</Link>
        <Form />
        <Smurfs />
      </Route>

      <Route path="/profile">
        <Link to="/">Home</Link>
          <Profile />
      </Route>
    </div>
  );
};

export default App;
