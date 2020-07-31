import React from "react";

import styles from "./TaskListItem.module.css";

export default function TaskListItemEmpty({ start, end, isEven }) {
	return <div className={styles.taskListItem}>{isEven ? <span>{start}</span> : null}</div>;
}
