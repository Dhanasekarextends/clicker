import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="wapper">
        <div className="container">
          <div className="value" />
          <div className="keys">
            <div className="key">+</div>
            <div className="key">r</div>
            <div className="key">-</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
