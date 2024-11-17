import React from "react";
import "./toggleSwitch.css";

const ToggleSwitch = ({ toggleDarkMode, darkMode }) => (
  <div id="toggleSwitch">
    <input
      type="checkbox"
      id="check"
      checked={darkMode}
      onChange={toggleDarkMode}
    />
    <label htmlFor="check" id="button"></label>
    <p>darkmode</p>
  </div>
);

export default ToggleSwitch;
