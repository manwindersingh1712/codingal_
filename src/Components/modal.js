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
            <div>
              <input
                type="radio"
                id="completed"
                name="reason"
                value="completed"
                onChange={this.onChange}
                defaultChecked="true"
              />
              <label for="completed">Class completed</label>
            </div>
            <div>
              <input
                type="radio"
                id="interrupted"
                name="reason"
                value="interrupted"
                onChange={this.onChange}
              />
              <label for="interrupted">Class interrupted/aborted</label>
            </div>
            {this.state.reason === "interrupted" && (
              <ul>
                <div>
                  <input
                    type="radio"
                    id="no_student"
                    name="int_reason"
                    value="no_student"
                    onChange={this.onChange}
                    defaultChecked="true"
                  />
                  <label for="no_student">
                    Students didn't show up for class.
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="interset"
                    name="int_reason"
                    value="interset"
                    onChange={this.onChange}
                  />
                  <label for="interset">
                    Students didn't show any interset.
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="disconnect"
                    name="int_reason"
                    value="disconnect"
                    onChange={this.onChange}
                  />
                  <label for="disconnect">Students got disconnected.</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="i_disconnect"
                    name="int_reason"
                    value="i_disconnect"
                    onChange={this.onChange}
                  />
                  <label for="i_disconnect">I got disconnected.</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="other_reason"
                    name="int_reason"
                    value="other_reason"
                    onChange={this.onChange}
                  />
                  <label for="other_reason">Other reason.</label>
                </div>

                {this.state.int_reason === "other_reason" && (
                  <div>
                    <textarea
                      name="other"
                      value={this.state.other}
                      onChange={this.onChange}
                    ></textarea>
                  </div>
                )}
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
