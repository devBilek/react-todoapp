import React from "react";
import "./toggleSwitch.css";

const ToggleSwitchButton = ({ toggleDarkMode, darkMode }) => (
  <div className="buttonContainer">
    <input
      type="checkbox"
      id="check"
      checked={darkMode}
      onChange={toggleDarkMode}
    />
    <label htmlFor="check" className="button"></label>
    <p>darkmode</p>
  </div>
);

export default ToggleSwitchButton;
