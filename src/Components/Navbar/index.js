import React from "react";
import "./index.css";
import Timer from "../Timer";
import Slidebar from "../SlideBar";

class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.clickref = React.createRef();
    this.state = {
      hamburger: false,
      min: 10,
      sec: 0,
    };
  }

  setTime = ({ min, sec }) => {
    this.setState({ min: min, sec: sec });
  };

  turnOff = (bool) => {
    this.setState({ hamburger: bool });
  };

  onClick = () => {
    this.clickref.current.onClick();
  };

  render() {
    return (
      <div>
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
              <Timer
                sec={this.state.sec}
                min={this.state.min}
                ref={this.clickref}
                setTime={this.setTime}
              />
            </div>
            <div className="end_class">
              <button
                onClick={() => {
                  this.props.setShow(true);
                }}
              >
                End class
              </button>
            </div>
          </div>
        </div>

        <div className="navbar_mb_container">
          <div className="logo">
            <img
              src="https://cdn.codingal.com/images/logos/logos-main/logo-with-text.svg"
              alt="logo"
            />
          </div>
          <div
            className="hamburger"
            onClick={() => this.setState({ hamburger: !this.state.hamburger })}
          >
            <i className="fas fa-bars"></i>
          </div>
        </div>

        <Slidebar
          setTime={this.setTime}
          sec={this.state.sec}
          min={this.state.min}
          click={this.props.setShow}
          turnOff={this.turnOff}
          ham={this.state.hamburger}
        />
      </div>
    );
  }
}

export default Navbar;
