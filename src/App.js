import React, { Component } from "react";
import Minus from "./components/minus";
import Plus from "./components/plus";
import Reset from "./components/reset";
import Value from "./components/value";
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
  }

  increment() {
    this.setState({
      value: this.state.value+1
    })
    console.log(this.state.value)
  }

  decrement() {
    this.setState({
      value: this.state.value-1
    })
    console.log(this.state.value)
  }

  reset() {
    this.setState({
      value: 0
    })
    console.log(this.state.value)
  }

  render() {
    return (
      <div className="wapper">
        <div className="container">
          <Value sendVal={this.state.value}/>
          <div className="keys">
          <Plus onClick={this.increment.bind(this)}/>
          <Reset onClick={this.reset.bind(this)}/>
          <Minus onClick={this.decrement.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
