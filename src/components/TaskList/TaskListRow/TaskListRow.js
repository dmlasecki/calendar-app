import React from "react";
import cls from "classnames";

import styles from "./TaskListRow.module.css";

export default function TaskListRowEmpty({ start, isEven, isLast, onClick }) {
	return (
		<div className={cls(styles.taskListItem, isLast ? styles.noClick : {})} onClick={onClick}>
			{isEven ? <span>{start}</span> : null}
		</div>
	);
}
