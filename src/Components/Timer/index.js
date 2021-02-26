import React from 'react';
import './index.css';

const Timer = React.memo(({ time: { min, sec } }) => (
  <div className="timer">
    {min < 10 ? '0' + min : min}:{sec < 10 ? '0' + sec : sec}
  </div>
));

export default Timer;
