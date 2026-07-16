import {useState} from "react";

function ToDoForm({ onAddTask }) {
	const [newTask, setNewTask] = useState('');

	function handleInput(e) {
		setNewTask(e.target.value);
	}

	function handleKeyDown(e) {
		if (e.key === 'Enter') {
			submitTask();
		}
	}

	function submitTask() {
		if (newTask.trim() === '') return;
		onAddTask(newTask);
		setNewTask('');
	}

	return (
		<>
			<input type="text" value={newTask} onChange={handleInput} onKeyDown={handleKeyDown}/>
			<button type="button" onClick={submitTask}>Add Task</button>
		</>
	)
}

export default ToDoForm
