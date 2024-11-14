import React, { useState, useEffect } from "react";
import useBodyClass from "../useBodyClass/useBodyClass.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import {
  getInitialDarkMode,
  getInitialTasks,
} from "../../utils/localStorageUtils.js";
import TaskList from "../taskList/taskList.js";

export default function App() {
  const [tasks, setTasks] = useState(getInitialTasks);
  const [newTask, setNewTask] = useState("");
  const [darkMode, setDarkMode] = useState(getInitialDarkMode);

  useBodyClass(darkMode ? "dark-mode" : "light-mode");

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
            <button
              onClick={addTask}
              className="btn btn-light"
              id="addTaskButton"
            >
              dodaj
            </button>
          </div>
        </div>
        <div>
          <TaskList
            tasks={tasks}
            darkMode={darkMode}
            deleteTaskByIndex={deleteTaskByIndex}
            moveTaskUpByIndex={moveTaskUpByIndex}
            moveTaskDownByIndex={moveTaskDownByIndex}
          />
        </div>
      </div>
    </div>
  );
}
