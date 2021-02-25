import React from "react";
import "../utils/css/navbar_mb.css";
// import Timer from "./timer";

class Navbar_Res extends React.Component {
  render() {
    return (
      <div className="navbar_mb_container">
        <div className="logo">
          <img
            src="https://cdn.codingal.com/images/logos/logos-main/logo-with-text.svg"
            alt="logo"
          />
        </div>
        {/* <Timer time={this.props.time} setTime={this.props.setTime} /> */}
        <div className="hamburger">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    );
  }
}

export default Navbar_Res;
