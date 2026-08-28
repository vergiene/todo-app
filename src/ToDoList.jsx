import ToDoItem from "./ToDoItem.jsx";

function ToDoList({tasks, toggleTask, handleDelete, handleEditTask, message}) {
	return (tasks.length > 0 ?
			<ul className="tasksList">
				{tasks.map(task => (<ToDoItem key={task.id} task={task} toggleTask={toggleTask} handleDelete={handleDelete}
				                              handleEditTask={handleEditTask}/>))}
			</ul> : <h4 className="emptyMessage">{message}</h4>
	)
}

export default ToDoList;
