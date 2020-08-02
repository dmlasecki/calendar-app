import React, { useState } from "react";

import InputSelectTime from "./InputSelectTime";

export default function Modal({ hours, dateInfo, currentTask, onClick, hideModal }) {
	const [timeInterval, setTimeInterval] = useState({
		start: currentTask.start,
		end: currentTask.end,
		endHours: hours.slice(1),
	});

	const [content, setContent] = useState(currentTask.content || "");

	function handleChange(type, value) {
		if (type === "start") {
			const endHours = hours.filter((h) => h > value);
			setTimeInterval({
				start: value,
				end: endHours[0],
				endHours: endHours,
			});
		} else {
			setTimeInterval({
				...timeInterval,
				end: value,
			});
		}
	}

	function handleSubmit() {
		onClick({
			id: dateInfo.id,
			task: {
				id: currentTask.id,
				content: content,
				start: timeInterval.start,
				end: timeInterval.end,
			}
		});
		hideModal();
	}

	return (
		<div>
			<input type="text" onChange={(e) => setContent(e.target.value)} value={content} />
			<InputSelectTime
				type={"start"}
				onChange={(e) => handleChange("start", +e.target.value)}
				hours={hours}
				value={timeInterval.start}
			/>
			<InputSelectTime
				type={"end"}
				onChange={(e) => handleChange("end", +e.target.value)}
				hours={timeInterval.endHours}
				value={timeInterval.end}
			/>
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
}
