// import './App.css'
import { useState } from "react";
import ToDoList from "./ToDoList.jsx";
import ToDoForm from "./ToDoForm.jsx";

function App() {
  const [tasks, setTasks] = useState([
    {id: 1, content: 'Task 1', done: false},
    {id: 2, content: 'Task 2', done: false},
    {id: 3, content: 'Task 3', done: false},
    {id: 4, content: 'Task 4', done: false},
    {id: 5, content: 'Task 5', done: false},
  ]);

  function onAddTask(newTask) {
    const addedTask = {
      id: Date.now(),
      content: newTask,
      done: false
    };
    const updatedTasks = [...tasks, addedTask];
    setTasks(updatedTasks);
  }

  function toggleTask(id) {
    let updatedList = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(updatedList);
  }

  function handleDelete(id) {
    let deletedList = tasks.filter(task => task.id !== id);
    setTasks(deletedList);
  }

  return (
    <>
      <h2>To Do List</h2>
      <ToDoForm onAddTask={onAddTask} />
      <ToDoList tasks={tasks} toggleTask={toggleTask} handleDelete={handleDelete} />
    </>
  )
}

export default App
