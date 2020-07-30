import React from "react";

import GridCalendarItem from "./GridCalendarItem/GridCalendarItem";
import styles from "./GridCalendar.module.css"

export default function GridCalendar({ numOfDaysInMonth, firstDayOfMonth }) {
	return (
		<div className={styles.gridCalendar}>
			{[...Array(numOfDaysInMonth).keys()].map(index => (
				<GridCalendarItem firstDayOfMonth={index === 0  ? firstDayOfMonth : ""} day={index + 1} />
			))}
		</div>
	);
}
