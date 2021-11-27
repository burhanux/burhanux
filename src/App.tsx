import React, { useEffect } from 'react';
import MainContent from './components/MainContent';
import { Nav } from './components/nav/Nav';
import './styles/App.scss';
import './styles/darkmode.scss';

function App() {
  return (
    <div className="App" >
      <Nav />
      <MainContent />
      <div className="overlay"></div>
    </div>
  );
}

export default App;
