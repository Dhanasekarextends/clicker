import React, { Component } from "react";
import Minus from "./components/minus";
import Plus from "./components/plus";
import Reset from "./components/reset";
import Value from "./components/value";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="wapper">
        <div className="container">
          <Value />
          <div className="keys">
          <Plus />
          <Reset />
          <Minus />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
