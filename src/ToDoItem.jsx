import { useState, useEffect, useRef} from "react";

function ToDoItem({ task, toggleTask, handleDelete, handleEditTask }) {
	const [newContent, setNewContent] = useState('');
	const [isEdit, setIsEdit] = useState(false);
	const inputRef = useRef(null);

	useEffect(() => {
		if (isEdit) {
			inputRef.current.focus();
			inputRef.current.select();
		}
	}, [isEdit]);

	function toggleEdit() {
		setIsEdit(!isEdit);
		setNewContent(task.content);
	}

	function handleEditInput(e) {
		setNewContent(e.target.value);
	}

	function handleKeyDownForEdit(e) {
		if (e.key === 'Enter') {
			editContent();
		}
	}

	function editContent() {
		handleEditTask(task.id, newContent);
		setIsEdit(false);
	}

	return (isEdit ? <li>
				<input type="text" value={newContent} ref={inputRef} onChange={handleEditInput} onKeyDown={handleKeyDownForEdit}/>
				<button type="button" onClick={editContent}>Save</button>
			</li> :
			<li className="taskRow">
				<div className="taskInfo">
				<input type="checkbox" id={task.id} checked={task.done} onChange={() => toggleTask(task.id)}/>
				<label htmlFor={task.id}>{task.content}</label>
				</div>
				<div className="taskActions">
				<button className="taskButton" type="button" onClick={() => handleDelete(task.id)}>Delete</button>
				<button className="taskButton" type="button" onClick={toggleEdit}>Edit</button>
				</div>
			</li>
	)
}

export default ToDoItem
