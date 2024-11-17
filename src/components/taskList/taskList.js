import React from "react";
import TaskItem from "../TaskItem/taskItem.js";
import "./taskList.css";

const TaskList = ({
  tasks,
  darkMode,
  deleteTaskByIndex,
  moveTaskUpByIndex,
  moveTaskDownByIndex,
  editTaskByIndex,
  editIndex,
}) => (
  <ol id="taskList">
    {tasks.map((task, index) => (
      <TaskItem
        key={index}
        task={task}
        index={index}
        darkMode={darkMode}
        deleteTaskByIndex={deleteTaskByIndex}
        moveTaskUpByIndex={moveTaskUpByIndex}
        moveTaskDownByIndex={moveTaskDownByIndex}
        editTaskByIndex={editTaskByIndex}
        editIndex={editIndex}
      />
    ))}
  </ol>
);

export default TaskList;
