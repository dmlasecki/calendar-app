import React from "react";

import styles from "./TaskListRow.module.css";

export default function TaskListRowEmpty({ start, end, isEven }) {
	return <div className={styles.taskListItem}>{isEven ? <span>{start}</span> : null}</div>;
}
