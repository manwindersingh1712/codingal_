import React from "react";
import "./App.css";
import Navbar from "./Components/navbar";
import NavbarRes from "./Components/navbar_mb";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      sec: 10,
    };
  }
  setTime = ({ min, sec }) => {
    this.setState({ min: min, sec: sec });
  };
  render() {
    return (
      <div className="App">
        <Navbar time={this.state} setTime={this.setTime} />
        <NavbarRes time={this.state} setTime={this.setTime} />
      </div>
    );
  }
}

export default App;
