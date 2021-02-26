import React from 'react';
import classNames from 'classnames';
import Timer from '../Timer';
import './index.css';

const Slidebar = ({ time, active, toggle, endClass }) => (
  <div className={classNames('slidebar_container', { active })}>
    <div className="grid">
      <Timer time={time} />
      <button
        onClick={() => {
          toggle();
          endClass();
        }}>
        End class
      </button>
    </div>
  </div>
);

export default Slidebar;
