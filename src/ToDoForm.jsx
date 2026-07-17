import {useState} from "react";

function ToDoForm({ onAddTask }) {
	const [newTask, setNewTask] = useState('');
	const [isBoxNeeded, setIsBoxNeeded] = useState(false);

	function toggleBoxNeeded() {
		setIsBoxNeeded(!isBoxNeeded);
	}

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
		setIsBoxNeeded(false);
	}

	return ( isBoxNeeded ?
		<>
			<input type="text" value={newTask} onChange={handleInput} onKeyDown={handleKeyDown}/>
			<button type="button" onClick={submitTask}>Add Task</button>
		</> :
			<button onClick={toggleBoxNeeded}>+</button>
	)
}

export default ToDoForm
