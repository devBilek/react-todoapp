import React from "react";
import TaskItem from "../TaskItem/taskItem";

const TaskList = ({
  tasks,
  darkMode,
  deleteTaskByIndex,
  moveTaskUpByIndex,
  moveTaskDownByIndex,
  editTaskByIndex,
  editIndex,
}) => (
  <ol>
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
