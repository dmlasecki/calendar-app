import React from "react";
import styles from "./GridCalendarItem.module.css";
import cls from "classnames";

export default function GridCalendarItem({ day, firstDayOfMonth,numberOfTasks, isFade, isDayIndicator, onClick }) {
	return (
		<div
			className={cls(styles.gridCalendarItem, isFade && styles.fade, isDayIndicator && styles.dayIndicator)}
			style={firstDayOfMonth ? { gridColumnStart: firstDayOfMonth } : {}}
			onClick={onClick}
		>
			<span>{day}</span>
			{numberOfTasks > 0 ? <p className={styles.tasksCount}>{numberOfTasks}</p> : null}
		</div>
	);
}
