import React, { useState, useEffect } from 'react';
import About from './Components/About';
import Home from './Components/Home';
import Nav from './Components/Nav';
import StyleSwitcher from './Components/StyleSwitcher';
import './styleSwitcher.css';

function App() {
  const [light, setLight] = useState(true);
  const [switcher, setSwitcher] = useState(false);
  const colorSwitcher = () => {
    setSwitcher(!switcher);
    window.addEventListener('scroll', () => {
      setSwitcher(false);
    });
  };
  const ToggleDark = () => {
    setLight(!light);
  };

  return (
    <div className={light ? 'App' : 'dark'}>
      <Nav></Nav>
      <Home></Home>
      <About></About>
      <StyleSwitcher
        switcher={switcher}
        colorSwitcher={colorSwitcher}
        ToggleDark={ToggleDark}
        light={light}
      ></StyleSwitcher>
    </div>
  );
}

export default App;
