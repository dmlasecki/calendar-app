import React from "react";

import GridCalendarItem from "./GridCalendarItem/GridCalendarItem";
import styles from "./GridCalendar.module.css";

const BASE_GRID_NUM = 6 * 7;

export default function GridCalendar({ numOfDaysInMonth, numOfDaysInMonthPrev, firstDayOfMonth }) {
	let arrayOfDays = getIterableArrayFromNum(numOfDaysInMonthPrev).slice(
		firstDayOfMonth ? -firstDayOfMonth : numOfDaysInMonthPrev
	);
	arrayOfDays = [...arrayOfDays, ...getIterableArrayFromNum(numOfDaysInMonth)];
	arrayOfDays = [
		...arrayOfDays,
		...getIterableArrayFromNum(BASE_GRID_NUM - numOfDaysInMonth - firstDayOfMonth),
	];

	function getIterableArrayFromNum(num) {
		return Array.from({ length: num }, (k, v) => v + 1);
	}

	return (
		<div className={styles.gridCalendar}>
			{arrayOfDays.map((num, index) => (
				<GridCalendarItem
					key={index}
					firstDayOfMonth={num === 0 ? firstDayOfMonth : ""}
					day={num}
					isFade={
						index < firstDayOfMonth || index > numOfDaysInMonth + firstDayOfMonth - 1
					}
				/>
			))}
		</div>
	);
}
