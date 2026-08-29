import { Sun, Moon } from 'lucide-react';

function Theme({ theme, toggleTheme }) {
	return (
		<div className="buttonLabel">
			<button aria-label="Change Theme" className="themeButton" type="button" onClick={toggleTheme}>
				{theme === 'light' ? <Sun/> : <Moon/>}
			</button>
			<span className="label">{theme === 'light' ? 'Light' : 'Dark'}</span>
		</div>
	)
}

export default Theme;