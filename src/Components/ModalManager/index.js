import React from 'react';
import classNames from 'classnames';
import './index.css';

const Context = React.createContext();

export default function ModalManager({ children }) {
  const [modal, setModal] = React.useState(null);

  const onClose = () => setModal(null);

  return (
    <Context.Provider value={{ openModal: (m) => setModal(() => m), closeModal: onClose }}>
      {children}
      <div className={classNames('modal_container', { active: !!modal })}>
        <div className={classNames('container', { active: !!modal })}>
          <div
            className="cancel"
            onClick={() => {
              setModal(null);
            }}>
            x
          </div>
          {modal && modal({ onClose })}
        </div>
      </div>
    </Context.Provider>
  );
}

export const useModal = () => React.useContext(Context);
