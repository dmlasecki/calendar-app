import React from "react";
import { connect } from "react-redux";
import { setDate } from "../redux/actions";

import CalendarTile from "../components/CalendarTile/CalendarTile";
import GridCalendar from "../components/GridCalendar/GridCalendar";

import { getFirstDayOfMonth, getNumOfTasksPerDays } from "../redux/selectors/selectors";

function CalendarPageComponent({ firstDayOfMonth, numOfTasksPerDays, date, setDate }) {
	return (
		<div>
			<CalendarTile date={date} setDate={setDate} type={"month"} />
			<GridCalendar
				date={date}
				firstDayOfMonth={firstDayOfMonth}
				numOfTasksPerDays={numOfTasksPerDays}
				setDate={setDate}
			/>
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
	setDate: setDate
};

const CalendarPage = connect(mapStateToProps, mapDispatchToProps)(CalendarPageComponent);
export default CalendarPage;
