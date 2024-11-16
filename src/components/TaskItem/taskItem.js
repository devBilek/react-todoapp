import React from "react";
import binIcon from "../../assets/images/icons8-bin-32.png";
import upIcon from "../../assets/images/icons8-up-30.png";
import downIcon from "../../assets/images/icons8-down-30.png";
import editIcon from "../../assets/images/icons8-pencil-30.png";
import "./taskItem.css";

const TaskItem = ({
  task,
  index,
  darkMode,
  deleteTaskByIndex,
  moveTaskUpByIndex,
  moveTaskDownByIndex,
  editTaskByIndex,
  editIndex,
}) => (
  <li
    key={index}
    className={`container mt-2 px-4 pb-2 fs-5 rounded-4 ${
      darkMode ? "dark-mode" : "light-mode"
    }`}
  >
    {task}
    <div className="buttons d-flex justify-content-center">
      <button
        onClick={() => deleteTaskByIndex(index)}
        className="btn btn-danger mx-1"
        disabled={editIndex !== null}
      >
        <img src={binIcon} alt="bin" />
      </button>
      <button
        onClick={() => moveTaskUpByIndex(index)}
        className="btn btn-success "
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
        className="btn btn-primary mx-1"
      >
        <img src={editIcon} alt="edit" />
      </button>
    </div>
  </li>
);

export default TaskItem;
