import React from "react";
import "./taskInput.css";

const TaskInput = ({
  newTask,
  handleInputChange,
  handleAddTask,
  handleAcceptEditButton,
  handleCancelEditButton,
  editIndex,
}) => (
  <div className="d-flex justify-content-center" id="taskInput">
    <input value={newTask} onChange={handleInputChange} />
    {editIndex === null ? (
      <button
        onClick={handleAddTask}
        className="btn btn-light"
        id="addTaskButton"
      >
        dodaj
      </button>
    ) : null}
    {editIndex !== null ? (
      <>
        <button
          onClick={handleAcceptEditButton}
          className="btn btn-light"
          id="acceptEditTaskButton"
        >
          akceptuj
        </button>
        <button
          onClick={handleCancelEditButton}
          className="btn btn-light"
          id="cancelEditTaskButton"
        >
          anuluj
        </button>
      </>
    ) : null}
  </div>
);

export default TaskInput;
