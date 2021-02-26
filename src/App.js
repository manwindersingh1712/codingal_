import React from 'react';
import Navbar from './Components/Navbar';
import ModalManager from './Components/ModalManager';
import './App.css';

const App = () => (
  <div className="App">
    <ModalManager>
      <Navbar />
    </ModalManager>
  </div>
);

export default App;
