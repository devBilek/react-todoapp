import React from "react";
import binIcon from "../../assets/images/icons8-bin-16.png";
import upIcon from "../../assets/images/icons8-thick-arrow-pointing-up-16.png";
import downIcon from "../../assets/images/icons8-thick-arrow-pointing-down-16.png";
import editIcon from "../../assets/images/icons8-pencil-16.png";
import "./taskItem.css";

const TaskItem = ({
  task,
  index,
  darkMode,
  deleteTaskByIndex,
  moveTaskUpByIndex,
  moveTaskDownByIndex,
  editTaskByIndex,
  editIndex}) => (
  <li
    key={index}
    className={`container mt-2 px-4 py-2 fs-5 rounded-4 shadow-sm ${
      darkMode ? "dark-mode" : "light-mode"
    }`}
    id="taskItem"
  >
    {task}
    <div className="buttons d-flex justify-content-center btn-group w-50 mx-auto" id="buttons">
      <button
        onClick={() => deleteTaskByIndex(index)}
        className="btn btn-danger"
        disabled={editIndex !== null}
      >
        <img src={binIcon} alt="bin" />
      </button>
      <button
        onClick={() => moveTaskUpByIndex(index)}
        className="btn btn-success"
        disabled={editIndex !== null}
      >
        <img src={upIcon} alt="up" />
      </button>
      <button
        onClick={() => moveTaskDownByIndex(index)}
        className="btn btn-warning "
        disabled={editIndex !== null}
      >
        <img src={downIcon} alt="down" />
      </button>
      <button
        onClick={() => editTaskByIndex(index)}
        className="btn btn-primary"
      >
        <img src={editIcon} alt="edit" />
      </button>
    </div>
  </li>
);

export default TaskItem;
