import {useState, useEffect} from "react";

function Clock() {
	const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const [date, setDate] = useState(new Date());

	function formatDate(date) {
		const day = date.getDate().toString().padStart(2, '0');
		const dayName = weekDays[date.getDay()];
		const month = date.getMonth();
		const monthName = monthNames[month];
		const hour = date.getHours().toString().padStart(2, '0');
		const minute = date.getMinutes().toString().padStart(2, '0');
		return `${day} of ${monthName}, ${dayName} | ${hour}:${minute}`;
	}

	useEffect(() => {
		const id = setInterval(() => {setDate(new Date())}, 60000);
		return () => {
			clearInterval(id);
		};
	}, []);

	const dateNow = formatDate(date);

	return (
		<>
			<h3>{dateNow}</h3>
		</>
	)
}

export default Clock;