import React, { useState } from 'react';
import './index.css';

const EndClassModal = ({ onEndClass, onClose }) => {
  const [reason, setReason] = useState('completed');
  const [intReason, setIntReason] = useState('i_disconnect');
  const [other, setOther] = useState('');

  const onChange = (e) => {
    if (e.target.name === 'reason') setReason(e.target.value);
    if (e.target.name === 'intReason') setIntReason(e.target.value);
    if (e.target.name === 'other') setOther(e.target.value);
  };

  return (
    <div className="end-class-modal">
      <h2>
        <strong>Select a reason to end class</strong>
      </h2>
      <div className="reasons">
        <label htmlFor="completed">
          <input
            type="radio"
            id="completed"
            name="reason"
            value="completed"
            onChange={(e) => {
              setIntReason('no_student');
              setOther('');
              onChange(e);
            }}
            defaultChecked="true"
          />
          <span id="custom_radio">
            <i className="fas fa-check"></i>
          </span>
          Class completed
        </label>

        <label htmlFor="interrupted">
          <input
            type="radio"
            id="interrupted"
            name="reason"
            value="interrupted"
            onChange={onChange}
          />
          <span id="custom_radio">
            <i className="fas fa-check"></i>
          </span>
          Class interrupted/aborted
        </label>

        <ul className={reason === 'interrupted' ? 'active' : undefined}>
          <label htmlFor="no_student">
            <input
              type="radio"
              id="no_student"
              name="intReason"
              value="no_student"
              onChange={onChange}
            />
            <span id="custom_radio">
              <i className="fas fa-check"></i>
            </span>
            Students didn't show up for class.
          </label>
          <label htmlFor="interset">
            <input
              type="radio"
              id="interset"
              name="intReason"
              value="interset"
              onChange={onChange}
            />
            <span id="custom_radio">
              <i className="fas fa-check"></i>
            </span>
            Students didn't show any interset.
          </label>
          <label htmlFor="disconnect">
            <input
              type="radio"
              id="disconnect"
              name="intReason"
              value="disconnect"
              onChange={onChange}
            />
            <span id="custom_radio">
              <i className="fas fa-check"></i>
            </span>
            Students got disconnected.
          </label>
          <label htmlFor="i_disconnect">
            <input
              type="radio"
              id="i_disconnect"
              name="intReason"
              value="i_disconnect"
              onChange={onChange}
              defaultChecked="true"
            />
            <span id="custom_radio">
              <i className="fas fa-check"></i>
            </span>
            I got disconnected.
          </label>
          <label htmlFor="other_reason">
            <input
              type="radio"
              id="other_reason"
              name="intReason"
              value="other_reason"
              onChange={onChange}
            />
            <span id="custom_radio">
              <i className="fas fa-check"></i>
            </span>
            Other reason.
          </label>

          <textarea
            className={intReason === 'other_reason' ? 'active' : undefined}
            name="other"
            value={other}
            onChange={onChange}
            placeholder="Type here"></textarea>
        </ul>
      </div>
      <button
        onClick={() => {
          onEndClass();
          onClose();
        }}
        className="end">
        End class
      </button>
      <button className="cancel_btn" onClick={onClose}>
        Cancel
      </button>
    </div>
  );
};

export default EndClassModal;
