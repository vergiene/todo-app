import {useState, useEffect, useRef} from "react";
import {Trash, Pen, Check} from 'lucide-react'

function ToDoItem({task, toggleTask, handleDelete, handleEditTask}) {
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
		if (e.key === 'Enter' && !e.shiftKey) {
			editContent();
		} else if (e.key === 'Escape') {
			toggleEdit();
		}
	}

	function editContent() {
		handleEditTask(task.id, newContent);
		setIsEdit(false);
	}

	return (isEdit ? <li className="editTaskForm">
				<textarea className="editTaskFormInput" value={newContent} ref={inputRef} onChange={handleEditInput}
				          onKeyDown={handleKeyDownForEdit}/>
				<button aria-label="Save changes" className="saveButton" type="button" onClick={editContent}><Check size={20}/>
				</button>
			</li> :
			<li className="taskRow" onClick={() => toggleTask(task.id)}>
				<div className="taskInfo">
					<input type="checkbox" id={task.id} checked={task.done} onChange={(e) => {
						e.stopPropagation();
						toggleTask(task.id);
					}}/>
					<label htmlFor={task.id} className="taskContent">{task.content}</label>
				</div>
				<div className="taskActions">
					<button aria-label="Edit task" className="taskButton" type="button" onClick={(e) => {
						e.stopPropagation();
						toggleEdit();
					}}><Pen size={15}/>
					</button>
					<button aria-label="Delete task" className="taskButton" type="button" onClick={(e) => {
						e.stopPropagation();
						handleDelete(task.id);
					}}>
						<Trash size={15}/></button>
				</div>
			</li>
	)
}

export default ToDoItem
