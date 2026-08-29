// TODO Закрытие input при нажатии на любое место
// TODO Многострочный input через Shift/Enter
// TODO Добавить md на input и на TaskRow
import './App.css'
import useLocalStorage from './useLocalStorage.js';
import ToDoList from "./ToDoList.jsx";
import ToDoForm from "./ToDoForm.jsx";
import Clock from "./Clock.jsx";
import Theme from "./Theme.jsx";
import {Trash2} from 'lucide-react'
import {useEffect} from "react";

function App() {
	const [theme, setTheme] = useLocalStorage('theme', 'light');

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);

	function toggleTheme() {
		setTheme(theme === 'light' ? 'dark' : 'light');
	}

	const [tasks, setTasks] = useLocalStorage('tasks', []);

	function onAddTask(newTask) {
		const addedTask = {
			id: Date.now(),
			content: newTask,
			done: false
		};
		const updatedTasks = [...tasks, addedTask];
		setTasks(updatedTasks);
	}

	function toggleTask(id) {
		let updatedList = tasks.map((task) => {
			if (task.id === id) {
				return {...task, done: !task.done};
			}
			return task;
		});
		setTasks(updatedList);
	}

	function handleDelete(id) {
		let deletedList = tasks.filter(task => task.id !== id);
		setTasks(deletedList);
	}

	function handleEditTask(id, newContent) {
		let updatedList = tasks.map((task) => {
			if (task.id === id) {
				return {...task, content: newContent};
			}
			return task;
		});
		setTasks(updatedList);
	}

	function handleClearAll() {
		const message = 'Do you want to clear all tasks? You won\'t be able to restore them.';
		const result = window.confirm(message);
		if (result) setTasks([]);
	}

	const activeTasks = tasks.filter(task => !task.done);
	const completedTasks = tasks.filter(task => task.done);

	const activeMessage = 'No active tasks — enjoy the calm.';
	const completedMessage = 'Nothing finished yet. Let\'s start, shall we?';

	return (
		<>
			<header className="header">
				<div className="clock">
					<Clock/>
				</div>
				<h1 className="title">TO DO LIST</h1>
				<div className="headerActions">
					<div className="buttonLabel">
						<button aria-label="Clear All" className="clearAllButton" type="button" onClick={handleClearAll}
						        disabled={!tasks.length}><Trash2/>
						</button>
						<span className="label">Clear All</span>
					</div>
					<Theme theme={theme} toggleTheme={toggleTheme}/>
				</div>
				<ToDoForm onAddTask={onAddTask}/>
			</header>
			<main className="content">
				<section className="activeTasks"><h3 className="cardTitle">ACTIVE TASKS</h3><ToDoList tasks={activeTasks}
				                                                                                      toggleTask={toggleTask}
				                                                                                      handleDelete={handleDelete}
				                                                                                      handleEditTask={handleEditTask}
				                                                                                      message={activeMessage}/>
				</section>
				<section className="completedTasks"><h3 className="cardTitle">COMPLETED TASKS</h3><ToDoList
					tasks={completedTasks}
					toggleTask={toggleTask}
					handleDelete={handleDelete}
					handleEditTask={handleEditTask}
					message={completedMessage}/>
				</section>
			</main>
		</>
	)
}

export default App
