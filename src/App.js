import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/index";
import Modal from "./Components/Modal/index";

function App() {
  const [min, setMin] = useState(10);
  const [sec, setSec] = useState(0);
  const [show, setShow] = useState(true);

  const setTime = ({ min, sec }) => {
    setMin(min);
    setSec(sec);
    // this.setState({ min: min, sec: sec });
  };

  return (
    <div className="App">
      <Navbar min={min} sec={sec} setTime={setTime} setShow={setShow} />
      <Modal show={show} setShow={setShow} />
    </div>
  );
}

export default App;
