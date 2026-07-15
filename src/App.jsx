// import './App.css'

function App() {
  const tasks = [
    {id: 1, content: 'Task 1', done: false},
    {id: 2, content: 'Task 2', done: false},
    {id: 3, content: 'Task 3', done: false},
    {id: 4, content: 'Task 4', done: false},
  ]
  return (
    <>
      <h2>Let's get started with my first pet-project! 🤓</h2>
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
