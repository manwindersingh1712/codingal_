import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/index";
import Modal from "./Components/Modal/index";

function App() {
  const [show, setShow] = useState(false);
  const end = React.createRef();

  const onEnd = () => {
    end.current.onClick();
  };

  return (
    <div className="App">
      <Navbar ref={end} setShow={setShow} />
      <Modal show={show} setShow={setShow} onEnd={onEnd} />
    </div>
  );
}

export default App;
