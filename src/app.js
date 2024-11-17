import React, { useState, useCallback } from "react";
import useBodyClass from "./hooks/useBodyClass.js";
import useLocalStorage from "./hooks/useLocalStorage.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import ToggleSwitch from "./components/ToggleSwitch/toggleSwitch.js";
import TaskInput from "./components/TaskInput/taskInput.js";
import TaskList from "./components/TaskList/taskList.js";

export default function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", [
    "number 1",
    "number 2",
  ]);
  const [newTask, setNewTask] = useState("");
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const [editIndex, setEditIndex] = useState(null);

  useBodyClass(darkMode ? "dark-mode" : "light-mode");

  const toggleDarkMode = useCallback(() => {
    setDarkMode((old) => !old);
  }, [setDarkMode]);

  const handleInputChange = useCallback((event) => {
    setNewTask(event.target.value);
  }, []);

  const handleAddTask = useCallback(() => {
    if (newTask.trim() !== "") {
      setTasks((old) => [...old, newTask]);
      setNewTask("");
    }
  }, [newTask, setTasks]);

  const deleteTaskByIndex = useCallback(
    (index) => {
      setTasks((old) => {
        const updatedTasks = old.filter((_, i) => i !== index);
        return updatedTasks;
      });
    },
    [setTasks]
  );

  const moveTaskUpByIndex = useCallback(
    (index) => {
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
    },
    [setTasks]
  );

  const moveTaskDownByIndex = useCallback(
    (index) => {
      setTasks((old) => {
        if (old.length - 1 > index) {
          const updatedTasks = [...old];

          [updatedTasks[index], updatedTasks[index + 1]] = [
            updatedTasks[index + 1],
            updatedTasks[index],
          ];

          return updatedTasks;
        }
        return old;
      });
    },
    [setTasks]
  );

  const editTaskByIndex = useCallback(
    (index) => {
      setEditIndex(index);
      setNewTask(tasks[index]);
    },
    [tasks]
  );

  const handleAcceptEditButton = useCallback(() => {
    if (newTask.trim() !== "") {
      setTasks((old) => {
        const updatedTasks = [...old];
        updatedTasks[editIndex] = newTask;
        return updatedTasks;
      });
      setEditIndex(null);
      setNewTask("");
    }
  }, [newTask, editIndex, setTasks]);

  const handleCancelEditButton = useCallback(() => {
    setEditIndex(null);
    setNewTask("");
  }, []);

  return (
    <>
      <header className="container-fluid bg-dark p-3 d-flex justify-content-between">
        <h1 className="text-light mb-0 fw-bold">ToDoApp by devBilek</h1>
        <ToggleSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </header>
      <div
        className={`container col-lg-6 col-12 mx-auto mt-5 mb-2 p-2 rounded-5 ${
          darkMode ? "dark-mode" : "light-mode"
        }`}
        id="appContainer"
      >
        <h2 className="fw-bold m-2 text-center">to-do list</h2>
        <TaskInput
          newTask={newTask}
          handleInputChange={handleInputChange}
          handleAddTask={handleAddTask}
          handleAcceptEditButton={handleAcceptEditButton}
          handleCancelEditButton={handleCancelEditButton}
          editIndex={editIndex}
        />
        <TaskList
          tasks={tasks}
          darkMode={darkMode}
          deleteTaskByIndex={deleteTaskByIndex}
          moveTaskUpByIndex={moveTaskUpByIndex}
          moveTaskDownByIndex={moveTaskDownByIndex}
          editTaskByIndex={editTaskByIndex}
          editIndex={editIndex}
        />
      </div>
    </>
  );
}
