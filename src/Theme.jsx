import { useState, useEffect } from "react";
import { Sun, Moon } from 'lucide-react';

// false = light, true = dark

function Theme() {
	const [theme, setTheme] = useState('light');
	const [changeTheme, setChangeTheme] = useState(false);

	function toggleTheme() {
		setChangeTheme(!changeTheme);
		if (changeTheme) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}

	return (
		changeTheme ?
			<div className="buttonLabel">
				<button aria-label="Change Theme" className="themeButton" type="button" onClick={toggleTheme}><Sun/></button>
				<span className="label">Light Theme</span>
			</div> : <div className="buttonLabel">
				<button aria-label="Change Theme" className="themeButton" type="button" onClick={toggleTheme}><Moon/></button>
				<span className="label">Dark Theme</span>
			</div>
	)
}

export default Theme;