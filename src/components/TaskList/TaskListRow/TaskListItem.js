import React from "react";
import style from "./TaskListItem.module.css";

export default function TaskListItem({ task, onClick }) {
	return (
		<div
			className={style.taskListItem}
			style={{ height: task.duration, top: task.offsetY, left: `${task.offsetX * 20}%` }}
			onClick={onClick}
		>
			<span>{task.content}</span>
		</div>
	);
}
