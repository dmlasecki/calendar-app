import React, { useState } from "react";

import InputSelectTime from "./InputSelectTime";
import ModalButtons from "./ModalButtons";

import styles from "./Modal.module.css";

export default function Modal({ hours, date, currentTask, onClick, hideModal }) {
	const [timeInterval, setTimeInterval] = useState({
		start: currentTask.start,
		end: currentTask.end,
		endHours: hours.filter((h) => h > currentTask.start),
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
			...date,
			task: {
				...currentTask,
				content: content,
				start: timeInterval.start,
				end: timeInterval.end,
			},
		});
		hideModal();
	}

	return (
		<div className={styles.modalWrapper}>
			<div className={styles.modalContainer}>
				<input
					type="text"
					onChange={(e) => setContent(e.target.value)}
					value={content}
					placeholder={"Your task ..."}
				/>
				<InputSelectTime
					type={"Start"}
					onChange={(e) => handleChange("start", +e.target.value)}
					hours={hours}
					value={timeInterval.start}
				/>
				<InputSelectTime
					type={"End"}
					onChange={(e) => handleChange("end", +e.target.value)}
					hours={timeInterval.endHours}
					value={timeInterval.end}

				/>
				<ModalButtons hideModal={hideModal} handleSubmit={handleSubmit} />
			</div>
		</div>
	);
}
