import React from 'react';
import 'tachyons'
import './App.css';
import BackGround from './components/BackGround/BackGround';
import Navigation from './components/Navigation/Navigation';
import InputField from './components/InputField/InputField';

function App() {
  return (
      <div className="App">
      <div className="particles">
        <BackGround />
      </div>
        <Navigation />
        <InputField />
      </div>
  );
}

export default App;
