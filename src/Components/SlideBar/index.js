import React from "react";
import Timer from "../Timer";
import "./index.css";

function Slidebar(props) {
  const timerRef = React.createRef();

  return (
    <div
      className={props.ham ? "slidebar_container active" : "slidebar_container"}
    >
      <div className="grid">
        <Timer
          ref={timerRef}
          min={props.min}
          sec={props.sec}
          setTime={props.setTime}
        />
        <button
          onClick={() => {
            props.turnOff(false);
            props.click(true);
          }}
        >
          End class
        </button>
      </div>
    </div>
  );
}

export default Slidebar;
