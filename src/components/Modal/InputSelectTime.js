import React from "react";
import { formatHour } from "../../utils/tasksListLogic";

export default function InputSelectTime({ type, onChange, hours, value }) {
	return (
		<>
			<label>{type}:</label>
			<select name={type} id={type} onChange={(e) => onChange(type, +e.target.value)} value={value}>
				{hours.map((hour, index) => (
					<option key={index} value={hour}>
						{formatHour(hour)}
					</option>
				))}
			</select>
		</>
	);
}
