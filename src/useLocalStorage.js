import {useEffect, useState} from "react";

function useLocalStorage(key, initialValue) {
	const [data, setData] = useState(() => {
		return JSON.parse(localStorage.getItem(key)) ?? initialValue;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(data));
	}, [data]);

	return [data, setData];
}

export default useLocalStorage;