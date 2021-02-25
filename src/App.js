import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/index";
import Modal from "./Components/Modal/index";

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
        <Modal show={this.state.show} setShow={this.setShow} />
      </div>
    );
  }
}

export default App;
