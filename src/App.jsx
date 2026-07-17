// import './App.css'
import useLocalStorage from './useLocalStorage.js';
import ToDoList from "./ToDoList.jsx";
import ToDoForm from "./ToDoForm.jsx";
import Clock from "./Clock.jsx";

function App() {
  const [tasks, setTasks] = useLocalStorage('tasks', [
    {id: 1, content: 'Task 1', done: false},
    {id: 2, content: 'Task 2', done: false},
    {id: 3, content: 'Task 3', done: false},
    {id: 4, content: 'Task 4', done: true},
    {id: 5, content: 'Task 5', done: true},]);

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

  function handleEditTask(id, newContent) {
    let updatedList = tasks.map((task) => {
      if (task.id === id) {
        return {...task, content: newContent};
      }
      return task;
    });
    setTasks(updatedList);
  }

  function handleClearAll() {
    setTasks([]);
  }

  const activeTasks = tasks.filter(task => !task.done);
  const completedTasks = tasks.filter(task => task.done);

  const activeMessage = 'No active tasks — enjoy the calm.';
  const completedMessage = 'Nothing finished yet. Let\'s start, shall we?';

  return (
    <>
      <h2>To Do List</h2>
      <Clock/>
      <ToDoForm onAddTask={onAddTask}/>
      <button type="button" onClick={handleClearAll} disabled={!tasks.length}>Clear all</button>
      <div><h3>ACTIVE TASKS</h3><ToDoList tasks={activeTasks} toggleTask={toggleTask} handleDelete={handleDelete}
                                          handleEditTask={handleEditTask} message={activeMessage}/>
      </div>
      <div><h3>COMPLETED TASKS</h3><ToDoList tasks={completedTasks} toggleTask={toggleTask}
                                             handleDelete={handleDelete} handleEditTask={handleEditTask}
                                             message={completedMessage}/></div>
    </>
  )
}

export default App
