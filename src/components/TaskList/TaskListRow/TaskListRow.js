import React from "react";

import styles from "./TaskListRow.module.css";

export default function TaskListRowEmpty({ start, end, isEven, onClick }) {
	return <div className={styles.taskListItem} onClick={onClick}>{isEven ? <span>{start}</span> : null}</div>;
}
