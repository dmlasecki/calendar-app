import React from "react";
import styles from "./GridCalendarItem.module.css";
import cls from "classnames";

export default function GridCalendarItem({ day, firstDayOfMonth, isFade }) {
	function handleClick() {
		console.log("Handle");
	}
	return (
		<div
			className={cls(styles.gridCalendarItem, isFade && styles.fade)}
			style={firstDayOfMonth ? { gridColumnStart: firstDayOfMonth } : {}}
			onClick={handleClick}
		>
			{day}
		</div>
	);
}
