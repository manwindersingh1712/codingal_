import React from "react";
import "./App.css";
import Navbar from "./Components/navbar";
import NavbarRes from "./Components/navbar_mb";
import Modal from "./Components/modal";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 10,
      sec: 0,
      show: false,
    };
  }
  setTime = ({ min, sec }) => {
    this.setState({ min: min, sec: sec });
  };
  setShow = (bool) => {
    this.setState({ show: bool });
  };
  render() {
    return (
      <div className="App">
        <Navbar
          time={this.state}
          setTime={this.setTime}
          setShow={this.setShow}
        />
        <NavbarRes time={this.state} setTime={this.setTime} />
        {this.state.show ? <Modal setShow={this.setShow} /> : ""}
      </div>
    );
  }
}

export default App;
