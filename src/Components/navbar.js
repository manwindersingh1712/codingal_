import React from "react";
import "../utils/css/navbar.css";
import Timer from "./timer";

class Navbar extends React.PureComponent {
  render() {
    return (
      <div className="navbar_container">
        <div className="left">
          <div className="logo">
            <img
              src="https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/vjy90lorwsscoql3h1sg"
              alt="logo"
            />
          </div>
          <div>
            <p>Trial Lesson[Grade 1-3]</p>
          </div>
        </div>

        <div className="right">
          <div className="timer">
            <Timer time={this.props.time} setTime={this.props.setTime} />
          </div>
          <div className="end_class">
            <button>End class</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
