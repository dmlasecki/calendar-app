import React from "react";
import { connect } from "react-redux";
import { ActionCreators } from "../redux/actions";

import GridCalendarTile from "../components/GridCalendarTile/GridCalendarTile";
import GridCalendar from "../components/GridCalendar/GridCalendar";

import { getFirstDayOfMonth, getNumOfTasksPerDays } from "../redux/selectors/selectors";

function CalendarPageComponent({ firstDayOfMonth, numOfTasksPerDays, date, setDate }) {
	return (
		<div>
			<GridCalendarTile date={date} setDate={setDate} />
			<GridCalendar date={date} firstDayOfMonth={firstDayOfMonth} numOfTasksPerDays={numOfTasksPerDays} setDate={setDate} />
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		...state,
		firstDayOfMonth: getFirstDayOfMonth(state),
		numOfTasksPerDays: getNumOfTasksPerDays(state),
	};
};

const mapDispatchToProps = {
	setDate: ActionCreators.setDate,
};

const CalendarPage = connect(mapStateToProps, mapDispatchToProps)(CalendarPageComponent);
export default CalendarPage;
