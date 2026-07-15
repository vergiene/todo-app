// import './App.css'
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {id: 1, content: 'Task 1', done: false},
    {id: 2, content: 'Task 2', done: false},
    {id: 3, content: 'Task 3', done: false},
    {id: 4, content: 'Task 4', done: false},
    {id: 5, content: 'Task 5', done: false},
  ]);
  const [newTask, setNewTask] = useState('');

  function handleInput(e) {
    setNewTask(e.target.value);
  }

  function handleAddTask() {
    if (newTask.trim() === '') return;
    const addedTask = {
      id: Date.now(),
      content: newTask,
      done: false
    };
    const updatedTasks = [...tasks, addedTask];
    setTasks(updatedTasks);
    setNewTask('');
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  }

  return (
    <>
      <h2>To Do List</h2>
      <input type="text" value={newTask} onChange={handleInput} onKeyDown={handleKeyDown}/>
      <button type="button" onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map(task => (<li key={task.id}>
          <input type="checkbox" id={task.id} checked={task.done}/>
          <label htmlFor={task.id}>{task.content}</label>
        </li>))}
      </ul>
    </>
  )
}

export default App
