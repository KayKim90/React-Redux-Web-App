import React, { useState } from 'react';
import Toggle from './Toggle';
const DARK_CLASS = "dark";

function Navbar() {
  let [isDarkmode, setIsDarkMode] = useState(false);

  const onDarkmodeChange = (checked) => {
    setIsDarkMode(checked);
    if(checked) {
      document.documentElement.classList.add(DARK_CLASS);
    }
    else {
      document.documentElement.classList.remove(DARK_CLASS);
    }
  }
  return (
    <div className="navbar">
      <h1 className="heading-1">
        React-Redux Web App
      </h1>
      <div style={{marginTop: 16, marginRight:16}}>
        <Toggle id="darkmode" checked={ isDarkmode } onChange={ onDarkmodeChange } />
      </div>
    </div>
  );
}

export default Navbar;
