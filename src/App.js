import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import List from "./List.js";

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
