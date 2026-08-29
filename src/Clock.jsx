import {useState, useEffect} from "react";

function Clock() {
	const [date, setDate] = useState(new Date());

	function formatDate(date) {
		let timeNow = date.toLocaleTimeString("en-US", {hour12: true, hour: '2-digit', minute: '2-digit'});
		let dayNow = date.toLocaleDateString("en-US", {day: "numeric", month: "short"})
		return {day: dayNow, time: timeNow};
	}

	useEffect(() => {
		const id = setInterval(() => {
			setDate(new Date())
		}, 1000);
		return () => {
			clearInterval(id);
		};
	}, []);

	const dateNow = formatDate(date);

	return (
		<>
			<h3>{dateNow.day} | <br className="clockBreak"/> {dateNow.time}</h3>
		</>
	)
}

export default Clock;