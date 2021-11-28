import React, { useEffect } from 'react';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import { Nav } from './components/nav/Nav';
import './styles/App.scss';
import './styles/darkmode.scss';

function App() {
  return (
    <div className="App" >
      <Nav />
      <MainContent />
      <hr />
      <Footer />
      <div className="overlay"></div>
    </div>
  );
}

export default App;
