import React, { useState } from "react";
import TaskListRow from "./TaskListRow/TaskListRow";
import TaskListItem from "./TaskListRow/TaskListItem";
import Modal from "../Modals/Modal";
import style from "./TaskList.module.css";

export default function TaskList({
	todayTasks,
	date,
	hours,
	addTask,
	updateTask,
	openModal,
	hideModal,
	isModalOpen,
}) {
	const [currentTask, setCurrentTask] = useState({});

	function handleClickOnTask(obj) {
		setCurrentTask({ ...obj });
		openModal();
	}
	
	return (
		<div className={style.taskList}>
			{hours.map((hour, index) => (
				<TaskListRow
					key={index}
					start={hour}
					end={hours[index + 1]}
					isEven={isEven(index)}
					onClick={() => handleClickOnTask({start: hour, end: hours[index + 1]})}
				/>
			))}
			{todayTasks.map((task, index) => (
				<TaskListItem
					key={index}
					task={task}
					duration={task.duration}
					offsetY={task.offsetY}
					offsetX={task.offsetX * 20}
					onClick={() => handleClickOnTask({ ...task })}
				/>
			))}
			{isModalOpen && (
				<Modal
					date={date}
					currentTask={currentTask}
					hours={hours}
					onClick={currentTask.id ? updateTask : addTask}
					hideModal={hideModal}
				/>
			)}
		</div>
	);

	function isEven(index) {
		return index % 2 === 0;
	}
}
