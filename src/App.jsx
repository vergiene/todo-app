// import './App.css'
import { useState, useEffect } from "react";
import ToDoList from "./ToDoList.jsx";
import ToDoForm from "./ToDoForm.jsx";

function App() {

  const [tasks, setTasks] = useState( () => {
   return JSON.parse(localStorage.getItem('tasks')) ?? [
    {id: 1, content: 'Task 1', done: false},
    {id: 2, content: 'Task 2', done: false},
    {id: 3, content: 'Task 3', done: false},
    {id: 4, content: 'Task 4', done: true},
    {id: 5, content: 'Task 5', done: true},
  ]});

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

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
        return {...task, done: !task.done};
      }
      return task;
    });
    setTasks(updatedList);
  }

  function handleDelete(id) {
    let deletedList = tasks.filter(task => task.id !== id);
    setTasks(deletedList);
  }

  const activeTasks = tasks.filter(task => !task.done);
  const completedTasks = tasks.filter(task => task.done);

  return (
    <>
      <h2>To Do List</h2>
      <ToDoForm onAddTask={onAddTask}/>
      <div><h3>ACTIVE TASKS</h3><ToDoList tasks={activeTasks} toggleTask={toggleTask} handleDelete={handleDelete}/>
      </div>
      <div><h3>COMPLETED TASKS</h3><ToDoList tasks={completedTasks} toggleTask={toggleTask}
                                             handleDelete={handleDelete}/></div>
    </>
  )
}

export default App
