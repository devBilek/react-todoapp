import React from "react";
import TaskItem from "../TaskItem/taskItem";

const TaskList = ({
  tasks,
  darkMode,
  deleteTaskByIndex,
  moveTaskUpByIndex,
  moveTaskDownByIndex,
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
      />
    ))}
  </ol>
);

export default TaskList;
