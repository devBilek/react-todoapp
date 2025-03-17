import React from "react";
import "./taskInput.css";

const TaskInput = ({
  newTask,
  handleInputChange,
  handleAddTask,
  handleAcceptEditButton,
  handleCancelEditButton,
  editIndex,
  handleInputOnKeyDown,
  btnRef,
  inputRef
}) => (
  <div className="d-flex justify-content-center" id="taskInput">
    <div className="shadow-sm">
    <input value={newTask} onChange={handleInputChange} onKeyDown={handleInputOnKeyDown} ref={inputRef}/>
    {editIndex === null ? (
      <button
        onClick={handleAddTask}
        className="btn btn-light"
        id="addTaskButton"
        ref={btnRef}
      >
        Add
      </button>
    ) : null}
    {editIndex !== null ? (
      <>
        <button
          onClick={handleAcceptEditButton}
          className="btn btn-light"
          id="acceptEditTaskButton"
          ref={btnRef}
        >
          Accept
        </button>
        <button
          onClick={handleCancelEditButton}
          className="btn btn-light"
          id="cancelEditTaskButton"
        >
          Cancel
        </button>
      </>
    ) : null}
  </div>
  </div>
);

export default TaskInput;
