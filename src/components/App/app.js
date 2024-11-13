import React, { useState } from "react";
import useBodyClass from "../useBodyClass/useBodyClass.js"
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

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
        className={`container text-center col-lg-6 col-12 mx-auto mt-5 p-2 rounded-2 ${
          darkMode ? "dark-mode" : "light-mode"
        }`}
      >
        <h1>lista rzeczy do zrobienia</h1>
        <button onClick={toggleDarkMode}>dark mode</button>
        <input value={newTask} onChange={handleInputChange} />
        <button onClick={addTask}>dodaj</button>
        <div>
          <ol>
            {tasks.map((task, index) => (
              <li
                key={index}
                className={`container mt-2 p-1 rounded-2 ${
                  darkMode ? "dark-mode" : "light-mode"
                }`}
              >
                {task}
                <div className="buttons">
                  <button
                    onClick={() => deleteTaskByIndex(index)}
                    className="btn btn-danger"
                  >
                    usuń
                  </button>
                  <button
                    onClick={() => moveTaskUpByIndex(index)}
                    className="btn btn-success m-1"
                  >
                    do góry
                  </button>
                  <button
                    onClick={() => moveTaskDownByIndex(index)}
                    className="btn btn-warning"
                  >
                    do dołu
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