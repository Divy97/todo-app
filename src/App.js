import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [todo, setTodo] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const addTask = () => {
    setTodo([...todo, currentTask]);
    setCurrentTask("");
  };

  const deleteTask = (taskToDelete) => {
    setTodo(
      todo.filter((key) => {
        return key !== taskToDelete;
      })
    );
  };

  const completeTask = () => {};

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Enter Task...."
        onChange={(e) => setCurrentTask(e.target.value)}
        value={currentTask}
      />
      <button onClick={addTask}>Add text</button>
      <hr />
      <div>
        <ul>
          {todo.map((val, key) => {
            return (
              <div className="list">
                <li key={key}>{val}</li>
                <button onClick={() => deleteTask(val)}>🗑️</button>
                <button onClick={() => completeTask(val)}>✔️</button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
