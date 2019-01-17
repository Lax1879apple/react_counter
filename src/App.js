import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 10
    };
  }
  onClickPlus = () => {
    const newCounter = this.state.counter + 1;
    if (newCounter <= 100) {
      this.setState({ counter: newCounter });
    }
  };
  onClickMinus = () => {
    const newCounter = this.state.counter - 1;
    if (newCounter >= 0) {
      this.setState({ counter: newCounter });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.counter}</h1>
        <button onClick={this.onClickPlus}>+</button>
        <button onClick={this.onClickMinus}>-</button>
      </div>
    );
  }
}

export default App;
