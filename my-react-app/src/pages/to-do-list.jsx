import React, { useState } from 'react';
import '../components/to-do-list.css';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
  
    // Function to add a task
    const addTask = () => {
      if (task.trim()) {
        setTasks([...tasks, task]);
        setTask('');
      }
    };
  
    // Function to remove a task
    const removeTask = (index) => {
      setTasks(tasks.filter((_, i) => i !== index));
    };
  
    return (
      <div className="todo-container">
        <h1 className="todo-header">To-Do List</h1>
        <div className="todo-input-container">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
            className="todo-input"
          />
          <button onClick={addTask} className="todo-add-button">
            Add Task
          </button>
        </div>
  
        <ul className="todo-list">
          {tasks.map((t, index) => (
            <li key={index} className="todo-item">
              <span className="todo-task">{t}</span>
              <button onClick={() => removeTask(index)} className="todo-remove-button">
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TodoList;