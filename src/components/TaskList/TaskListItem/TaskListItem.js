import React from "react";
import styles from "./TaskListItem.module.css";
import cls from "classnames";

export default function TaskListItem({ start, end, isEven, task }) {
	return (
		<div className={cls(styles.taskListItem, task.length > 0 ? styles.taskListItemFilled : {})}>
			{isEven ? <span>{start}</span> : null}
		</div>
	);
}
