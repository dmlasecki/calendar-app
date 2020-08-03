import React from "react";
import { connect } from "react-redux";
import { ActionCreators } from "../redux/actions";

import GridCalendarTile from "../components/GridCalendarTile/GridCalendarTile";
import GridCalendar from "../components/GridCalendar/GridCalendar";

import {
	getFirstDayOfMonth,
} from "../redux/selectors/selectors";

function CalendarPageComponent({
	firstDayOfMonth,
	date,
	setDate,
}) {
	return (
		<div>
			<GridCalendarTile
				date={date}
				setDate={setDate}
			/>
			<GridCalendar
				date={date}
				firstDayOfMonth={firstDayOfMonth}
				setDate={setDate}
			/>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		...state,
		firstDayOfMonth: getFirstDayOfMonth(state),
	};
};

const mapDispatchToProps = {
	setDate: ActionCreators.setDate,
};

const CalendarPage = connect(mapStateToProps, mapDispatchToProps)(CalendarPageComponent);
export default CalendarPage;
