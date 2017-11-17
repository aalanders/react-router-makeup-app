import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import List from "./List.js";

//will send to list of brands
class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={List} />
        <Route path="/brands" component={List} />
      </div>
    );
  }
}

export default App;
