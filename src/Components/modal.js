import React from "react";
import "../utils/css/modal.css";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reason: "completed",
      int_reason: "no_student",
      other: "",
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onClick = () => {
    console.log(this.state);
  };
  onEnd = () => {
    this.props.setShow(false);
  };
  render() {
    return (
      <div className="modal_container">
        <div className="container">
          <div
            className="cancel"
            onClick={() => {
              this.props.setShow(false);
            }}
          >
            x
          </div>
          <h2>Select a reason to end class</h2>
          <div className="reasons">
            <label for="completed">
              <input
                type="radio"
                id="completed"
                name="reason"
                value="completed"
                onChange={(e) => {
                  this.setState({ int_reason: "no_student", other: "" });
                  this.onChange(e);
                }}
                defaultChecked="true"
              />
              <span id="custom_radio">
                <i className="fas fa-check"></i>
              </span>
              Class completed
            </label>

            <label for="interrupted">
              <input
                type="radio"
                id="interrupted"
                name="reason"
                value="interrupted"
                onChange={this.onChange}
              />
              <span id="custom_radio">
                <i className="fas fa-check"></i>
              </span>
              Class interrupted/aborted
            </label>

            {this.state.reason === "interrupted" && (
              <ul>
                <label for="no_student">
                  <input
                    type="radio"
                    id="no_student"
                    name="int_reason"
                    value="no_student"
                    onChange={this.onChange}
                    defaultChecked="true"
                  />
                  <span id="custom_radio">
                    <i className="fas fa-check"></i>
                  </span>
                  Students didn't show up for class.
                </label>
                <label for="interset">
                  <input
                    type="radio"
                    id="interset"
                    name="int_reason"
                    value="interset"
                    onChange={this.onChange}
                  />
                  <span id="custom_radio">
                    <i className="fas fa-check"></i>
                  </span>
                  Students didn't show any interset.
                </label>
                <label for="disconnect">
                  <input
                    type="radio"
                    id="disconnect"
                    name="int_reason"
                    value="disconnect"
                    onChange={this.onChange}
                  />
                  <span id="custom_radio">
                    <i className="fas fa-check"></i>
                  </span>
                  Students got disconnected.
                </label>
                <label for="i_disconnect">
                  <input
                    type="radio"
                    id="i_disconnect"
                    name="int_reason"
                    value="i_disconnect"
                    onChange={this.onChange}
                  />
                  <span id="custom_radio">
                    <i className="fas fa-check"></i>
                  </span>
                  I got disconnected.
                </label>
                <label for="other_reason">
                  <input
                    type="radio"
                    id="other_reason"
                    name="int_reason"
                    value="other_reason"
                    onChange={this.onChange}
                  />
                  <span id="custom_radio">
                    <i className="fas fa-check"></i>
                  </span>
                  Other reason.
                </label>

                <textarea
                  className={
                    this.state.int_reason === "other_reason" && "active"
                  }
                  name="other"
                  value={this.state.other}
                  onChange={this.onChange}
                  placeholder="Type here"
                ></textarea>
              </ul>
            )}
          </div>
          <button onClick={this.onEnd} className="end">
            End class
          </button>
          <button
            className="cancel_btn"
            onClick={() => {
              this.props.setShow(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
