import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

function ToDoList() {
  const [tasks, setTasks] = useState(["dupa1" , "dupa2"])
  const [newTask, setNewTask] = useState("")

  function handleInputChange(event) {
    setNewTask(event.target.value)
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks(old => [...old, newTask])
      setNewTask("")
    }
  }

  function deleteTaskByIndex(index) {
    setTasks(old => {
      const updatedTasks = old.filter((_, i)=> i !== index)
      return updatedTasks
    })
  }

  function moveTaskUpByIndex(index) {
    setTasks(old => {
      if (index > 0) {
        const updatedTasks = [...old]
  
        let x = updatedTasks[index]
        updatedTasks[index] = updatedTasks[index - 1]
        updatedTasks[index - 1] = x

        return updatedTasks
      }
      return old
    })
  }

  function moveTaskDownByIndex(index) {
    setTasks(old => {
      if (old.length - 1 > index) {
        const updatedTasks = [...old]
  
        let x = updatedTasks[index]
        updatedTasks[index] = updatedTasks[index + 1]
        updatedTasks[index + 1] = x
        return updatedTasks
      }
      return old
    })
  }

  return (
    <div className="container bg-info text-center w-50 mx-auto mt-5 p-2 rounded-2">
      <h1>lista rzeczy do zrobienia</h1>
      <input
        value={newTask}
        onChange={handleInputChange}
      />
      <button onClick={addTask}>dodaj</button>
      <div>
        <ol>
          {tasks.map((task, index)=>
            <li key={index} className="container bg-light mt-2 p-1 rounded-2">
              {task}
              <div className="buttons">
                <button onClick={() => deleteTaskByIndex(index)} className="btn btn-danger">usuń</button>
                <button onClick={() => moveTaskUpByIndex(index)} className="btn btn-success m-1">do góry</button>
                <button onClick={() => moveTaskDownByIndex(index)} className="btn btn-warning">do dołu</button>
              </div>
            </li>
          )}
        </ol>
      </div>
    </div>
    
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ToDoList />);