function ToDoItem({ task, toggleTask, handleDelete }) {
	return (
		<li>
			<input type="checkbox" id={task.id} checked={task.done} onChange={() => toggleTask(task.id)}/>
			<label htmlFor={task.id}>{task.content}</label>
			<button type="button" onClick={() => handleDelete(task.id)}>🗑️</button>
		</li>
	)
}

export default ToDoItem
