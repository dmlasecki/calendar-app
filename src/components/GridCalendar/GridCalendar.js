import React from "react";
import { useHistory } from "react-router-dom";
import GridCalendarItem from "./GridCalendarItem/GridCalendarItem";
import { crateFullCalendarForMonth } from "../../utils/calendarLogic";
import { DAYS } from "../../constants/constants";
import styles from "./GridCalendar.module.css";

export default function GridCalendar({
	numOfDaysInMonth,
	numOfDaysInMonthPrev,
	firstDayOfMonth,
	setDay,
}) {
	let history = useHistory();

	function onItemClickHandle(num) {
		setDay(num);
		history.push("/day");
	}

	const arrayOfDays = crateFullCalendarForMonth(
		numOfDaysInMonth,
		numOfDaysInMonthPrev,
		firstDayOfMonth
	);

	function isFade(index) {
		return index < firstDayOfMonth || index > numOfDaysInMonth + firstDayOfMonth - 1;
	}

	return (
		<div className={styles.gridCalendar}>
			{DAYS.map((day, index) => (
				<GridCalendarItem key={index} day={day} onClick={() => {}} isDayIndicator={true} />
			))}
			{arrayOfDays.map((num, index) => (
				<GridCalendarItem
					key={index}
					firstDayOfMonth={num === 0 ? firstDayOfMonth : ""}
					day={num}
					dayOfWeek={index % 7}
					isFade={isFade(index)}
					isDayIndicator={false}
					onClick={() => onItemClickHandle(num)}
				/>
			))}
		</div>
	);
}
