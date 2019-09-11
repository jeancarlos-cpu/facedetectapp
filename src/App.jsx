import React from 'react';
import 'tachyons'
import './App.css';
import BackGround from './components/BackGround/BackGround';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div>
      <div className="background">
        <BackGround/>
      </div>
      <div className="App">
        <Navigation />
      </div>
    </div>
  );
}

export default App;
