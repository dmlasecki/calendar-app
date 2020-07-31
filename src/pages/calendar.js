import React from "react";
import { connect } from "react-redux";
import { ActionCreators } from "../redux/actions";

import GridCalendarTile from "../components/GridCalendarTile/GridCalendarTile";
import GridCalendar from "../components/GridCalendar/GridCalendar";

import {
	getFirstDayOfMonth,
	getNumOfDaysInMonth,
	getNumOfDaysInMonthPrev,
} from "../redux/selectors/selectors";

function CalendarPageComponent({
	numOfDaysInMonth,
	firstDayOfMonth,
	numOfDaysInMonthPrev,
	date,
	setMonth,
	setMonthAndYear,
	setDay,
}) {
	return (
		<div>
			<GridCalendarTile date={date} setMonth={setMonth} setMonthAndYear={setMonthAndYear} />
			<GridCalendar
				numOfDaysInMonth={numOfDaysInMonth}
				numOfDaysInMonthPrev={numOfDaysInMonthPrev}
				firstDayOfMonth={firstDayOfMonth}
				setDay={setDay}
			/>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		...state,
		numOfDaysInMonth: getNumOfDaysInMonth(state),
		numOfDaysInMonthPrev: getNumOfDaysInMonthPrev(state),
		firstDayOfMonth: getFirstDayOfMonth(state),
	};
};

const mapDispatchToProps = {
	setMonth: ActionCreators.setMonth,
	setMonthAndYear: ActionCreators.setMonthAndYear,
	setDay: ActionCreators.setDay,
};

const CalendarPage = connect(mapStateToProps, mapDispatchToProps)(CalendarPageComponent);
export default CalendarPage;
