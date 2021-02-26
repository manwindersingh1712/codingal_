import React from 'react';
import Timer from '../Timer';
import useTimer from './useTimer';
import Slidebar from '../SlideBar';
import EndClassModal from '../EndClassModal';
import { useModal } from '../ModalManager';
import './index.css';

const Navbar = () => {
  const { openModal } = useModal();
  const [time, stopTimer] = useTimer({ min: 10, sec: 0 });
  const [showSlidebar, setShowSlidebar] = React.useState(false);
  const toggleSlidebar = () => setShowSlidebar(!showSlidebar);

  const endClass = () => {
    openModal(({ onClose }) => <EndClassModal onEndClass={stopTimer} onClose={onClose} />);
  };

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
            <Timer time={time} />
          </div>
          <div className="end_class">
            <button onClick={endClass}>End class</button>
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
        <div className="hamburger" onClick={toggleSlidebar}>
          <i className="fas fa-bars"></i>
        </div>
      </div>

      <Slidebar time={time} active={showSlidebar} toggle={toggleSlidebar} endClass={endClass} />
    </div>
  );
};

export default Navbar;
