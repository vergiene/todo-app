import {useEffect, useRef, useState} from "react";
import { Plus, Check } from 'lucide-react';

function ToDoForm({ onAddTask }) {
	const [newTask, setNewTask] = useState('');
	const [isBoxNeeded, setIsBoxNeeded] = useState(false);
	const inputRef = useRef(null);

	useEffect(() => {
		if (isBoxNeeded) {
			inputRef.current.focus();
		}
	}, [isBoxNeeded]);

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

	return (isBoxNeeded ?
			<>
				<input type="text" value={newTask} ref={inputRef} onChange={handleInput} onKeyDown={handleKeyDown}/>
				<button aria-label="Save changes" className="saveButton" type="button" onClick={submitTask}><Check/></button>
			</> :
		<div className="buttonLabel">
			<button aria-label="Add Task" className="addNewTaskButton" type="button" onClick={toggleBoxNeeded}><Plus /></button>
			<span className="label">Add Task</span>
		</div>
	)
}

export default ToDoForm
