import React from "react";
import TaskListRow from "./TaskListRow/TaskListRow";
import TaskListItem from "./TaskListRow/TaskListItem";
import style from "./TaskList.module.css";

export default function TaskList({ todayTasks, hours }) {
	return (
		<div className={style.taskList}>
			{hours.map((hour, index) => (
				<TaskListRow
					key={index}
					start={hour}
					end={hours[index + 1]}
					isEven={isEven(index)}
				/>
			))}
			{todayTasks.map((task, index) => (
				<TaskListItem
					key={index}
					task={task}
					duration={getTaskDuration(task)}
					offsetY={getOffsetY(task)}
				/>
			))}
		</div>
	);

	function isEven(index) {
		return index % 2 === 0;
	}

	function getTaskDuration(task) {
		return (task.end - task.start) * 80;
	}

	function getOffsetY(task) {
		return (task.start - 8) * 80;
	}
}
