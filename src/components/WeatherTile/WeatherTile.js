import React, { useState, useEffect } from "react";

export default function WeatherTile() {
	const [weatherData, setWeatherData] = useState(null);

	useEffect(() => {
		function fetchData() {
			fetch(
				"http://api.openweathermap.org/data/2.5/weather?q=poznan&appid=f7d6fcd7e63ae91f3838bb7ab50b6ddb&units=metric"
			)
				.then((response) => response.json())
				.then((data) => setWeatherData(data))
				.catch((e) => console.error(e));
		}
		fetchData();
	}, []);

	return (
		<div>
			<div>
				{weatherData ? (
					<>
						<p>City: {weatherData.name}</p>
						<p>Temperature: {weatherData.main.temp} °C</p>
						<p>Wind: {weatherData.wind.speed} m/s</p>
					</>
				) : null}
			</div>
		</div>
	);
}
