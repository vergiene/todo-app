import ToDoItem from "./ToDoItem.jsx";

function ToDoList({ tasks, toggleTask, handleDelete }) {
	return ( tasks.length > 0 ?
		<ul>
			{tasks.map(task => (<ToDoItem key={task.id} task={task} toggleTask={toggleTask} handleDelete={handleDelete} />))}
		</ul> : <h4>Your list is empty. Let's get started, shall we?</h4>
	)
}

export default ToDoList;
