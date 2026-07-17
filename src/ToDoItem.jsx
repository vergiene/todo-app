import {useState} from "react";

function ToDoItem({ task, toggleTask, handleDelete, handleEditTask }) {
	const [newContent, setNewContent] = useState('');
	const [isEdit, setIsEdit] = useState(false);
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
				<input type="text" value={newContent} onChange={handleEditInput} onKeyDown={handleKeyDownForEdit} />
				<button type="button" onClick={editContent}>Save</button>
			</li> :
			<li>
				<input type="checkbox" id={task.id} checked={task.done} onChange={() => toggleTask(task.id)}/>
				<label htmlFor={task.id}>{task.content}</label>
				<button type="button" onClick={() => handleDelete(task.id)}>Delete</button>
				<button type="button" onClick={toggleEdit}>Edit</button>
			</li>
	)
}

export default ToDoItem
