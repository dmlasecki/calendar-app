import React from "react";
import styles from "./GridCalendarItem.module.css";

export default function GridCalendarItem({ day, firstDayOfMonth }) {
	return (
		<div
			className={styles.gridCalendarItem}
			style={firstDayOfMonth ? { gridColumnStart: firstDayOfMonth } : {}}
		>
			{day}
		</div>
	);
}
