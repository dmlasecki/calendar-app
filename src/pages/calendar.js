import React from "react";
import { connect } from "react-redux";
import { ActionCreators } from "../redux/actions";
import GridCalendarTile from "../components/GridCalendar/GridCalendarTile/GridCalendarTile";

function CalendarPageComponent({ date, setMonth, setMonthAndYear, setDay }) {
	return (
		<div>
			<GridCalendarTile date={date} setMonth={setMonth} setMonthAndYear={setMonthAndYear} />
			<p>{`${date.month} ${date.year}`}</p>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		...state,
	};
};

const mapDispatchToProps = {
	setMonth: ActionCreators.setMonth,
	setMonthAndYear: ActionCreators.setMonthAndYear,
	setDay: ActionCreators.setDay,
};

const CalendarPage = connect(mapStateToProps, mapDispatchToProps)(CalendarPageComponent);
export default CalendarPage;
