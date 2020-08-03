import React from "react";
import { useHistory } from "react-router-dom";
import GridCalendarItem from "./GridCalendarItem/GridCalendarItem";
import { crateFullCalendarForMonth } from "../../utils/calendarLogic";
import { DAYS } from "../../constants/constants";
import styles from "./GridCalendar.module.css";

export default function GridCalendar({
	date,
	firstDayOfMonth,
	numOfTasksPerDays,
	setDate,
}) {
	let history = useHistory();

	function onItemClickHandle(num) {
		setDate({
			day: num,
		});
		history.push("/day");
	}

	const arrayOfDays = crateFullCalendarForMonth(
		date.numOfDaysInMonth,
		date.numOfDaysInMonthPrev,
		firstDayOfMonth
	);

	function isNotFromActualMonth(index) {
		return index < firstDayOfMonth || index > date.numOfDaysInMonth + firstDayOfMonth - 1;
	}

	function numberOfTasks(index) {
		if (isNotFromActualMonth(index)) {
			return 0;
		} else {
			const idx = numOfTasksPerDays.findIndex(n => n.day === arrayOfDays[index]);
			if (idx > -1) {
				return numOfTasksPerDays[idx].tasks;
			} else {
				return 0;
			}
		}
	}

	return (
		<div className={styles.gridCalendar}>
			{DAYS.map((day, index) => (
				<GridCalendarItem key={index} day={day} isDayIndicator={true} />
			))}
			{arrayOfDays.map((num, index) => (
				<GridCalendarItem
					key={index}
					firstDayOfMonth={num === 0 ? firstDayOfMonth : ""}
					day={num}
					dayOfWeek={index % 7}
					isFade={isNotFromActualMonth(index)}
					numberOfTasks={numberOfTasks(index)}
					isDayIndicator={false}
					onClick={() => onItemClickHandle(num)}
				/>
			))}
		</div>
	);
}
