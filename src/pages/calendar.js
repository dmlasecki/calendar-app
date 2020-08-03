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
	setDate,
	setDay,
}) {
	return (
		<div>
			<GridCalendarTile
				date={date}
				setDate={setDate}
			/>
			<GridCalendar
				numOfDaysInMonth={numOfDaysInMonth}
				numOfDaysInMonthPrev={numOfDaysInMonthPrev}
				firstDayOfMonth={firstDayOfMonth}
				setDate={setDate}
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
	setDate: ActionCreators.setDate,
};

const CalendarPage = connect(mapStateToProps, mapDispatchToProps)(CalendarPageComponent);
export default CalendarPage;
