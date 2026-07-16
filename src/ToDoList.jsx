import ToDoItem from "./ToDoItem.jsx";

function ToDoList({ tasks, toggleTask, handleDelete }) {
	return (
		<ul>
			{tasks.map(task => (<ToDoItem key={task.id} task={task} toggleTask={toggleTask} handleDelete={handleDelete} />))}
		</ul>
	)
}

export default ToDoList;