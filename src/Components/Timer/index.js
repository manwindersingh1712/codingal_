import React from "react";
import "./index.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: this.props.min,
      sec: this.props.sec,
      interval: "",
    };
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
    this.props.setTime(this.state);
  }
  componentDidMount() {
    const interval = setInterval(() => {
      if (this.state.sec === 0 && this.state.min === 0) {
        clearInterval(interval);
        return;
      }
      if (this.state.sec === 0 && this.state.min !== 0) {
        this.setState({ min: this.state.min - 1, sec: 59 });
      } else {
        this.setState({ sec: this.state.sec - 1 });
      }
    }, 1000);
    this.setState({ interval: interval });
  }
  render() {
    return (
      <div className="timer">
        {this.state.min < 10 ? "0" + this.state.min : this.state.min}:
        {this.state.sec < 10 ? "0" + this.state.sec : this.state.sec}
      </div>
    );
  }
}

export default Timer;
