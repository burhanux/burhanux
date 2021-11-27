import React, { useEffect } from 'react';
import DarkLightSwitch from './components/DarkLightSwitch';
import MainContent from './components/MainContent';
import { Nav } from './components/nav/Nav';
import './styles/App.scss';
import './styles/darkmode.scss';

function App() {
  return (
    <div className="App" >
      <Nav />
      <h1>Hello There</h1>
      <DarkLightSwitch />
      <MainContent />
      <div className="overlay"></div>
    </div>
  );
}

export default App;
