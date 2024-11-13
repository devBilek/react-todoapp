import React, { useState } from "react";
import useBodyClass from "../useBodyClass/useBodyClass.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import binIcon from "../../assets/images/icons8-bin-32.png";
import upIcon from "../../assets/images/icons8-up-30.png";
import downIcon from "../../assets/images/icons8-down-30.png";

export default function App() {
  const [tasks, setTasks] = useState(["cos tam 1", "cos tam 2"]);
  const [newTask, setNewTask] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useBodyClass(darkMode ? "dark-mode" : "light-mode");

  function toggleDarkMode() {
    setDarkMode((old) => !old);
  }

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((old) => [...old, newTask]);
      setNewTask("");
    }
  }

  function deleteTaskByIndex(index) {
    setTasks((old) => {
      const updatedTasks = old.filter((_, i) => i !== index);
      return updatedTasks;
    });
  }

  function moveTaskUpByIndex(index) {
    setTasks((old) => {
      if (index > 0) {
        const updatedTasks = [...old];

        [updatedTasks[index], updatedTasks[index - 1]] = [
          updatedTasks[index - 1],
          updatedTasks[index],
        ];

        return updatedTasks;
      }
      return old;
    });
  }

  function moveTaskDownByIndex(index) {
    setTasks((old) => {
      if (old.length - 1 > index) {
        const updatedTasks = [...old];

        let x = updatedTasks[index];
        updatedTasks[index] = updatedTasks[index + 1];
        updatedTasks[index + 1] = x;
        return updatedTasks;
      }
      return old;
    });
  }

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div
        className={`container col-lg-6 col-12 mx-auto mt-5 p-2 rounded-2 ${
          darkMode ? "dark-mode" : "light-mode"
        }`}
      >
        <button onClick={toggleDarkMode} className="btn btn-dark">
          {darkMode ? "light mode" : "dark mode"}
        </button>
        <div className="text-center">
          <h1 className="fw-bold">lista rzeczy do zrobienia</h1>
          <div className="d-flex justify-content-center">
            <input value={newTask} onChange={handleInputChange} />
            <button onClick={addTask} className="btn btn-light">
              dodaj
            </button>
          </div>
        </div>

        <div>
          <ol>
            {tasks.map((task, index) => (
              <li
                key={index}
                className={`container mt-2 px-4 pb-2 fs-5 text-left rounded-2 ${
                  darkMode ? "dark-mode" : "light-mode"
                }`}
              >
                {task}
                <div className="buttons d-flex justify-content-center">
                  <button
                    onClick={() => deleteTaskByIndex(index)}
                    className="btn btn-danger"
                  >
                    <img src={binIcon} alt="bin" />
                  </button>
                  <button
                    onClick={() => moveTaskUpByIndex(index)}
                    className="btn btn-success mx-1"
                  >
                    <img src={upIcon} alt="up" />
                  </button>
                  <button
                    onClick={() => moveTaskDownByIndex(index)}
                    className="btn btn-warning"
                  >
                    <img src={downIcon} alt="down" />
                  </button>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
