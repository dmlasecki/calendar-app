import React from "react";

export default function InputSelectTime({ type, onChange, hours, value }) {
	return (
		<>
			<label>{type}</label>
			<select name={type} id={type} onChange={onChange} value={value}>
				{hours.map((hour, index) => (
					<option key={index} value={hour}>
						{hour}
					</option>
				))}
			</select>
		</>
	);
}
