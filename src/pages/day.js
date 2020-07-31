import React from "react";
import { connect } from "react-redux";
import { ActionCreators } from "../redux/actions";
import { MONTHS } from "../constants/constants";
import { getTodayTasks } from "../redux/selectors/selectors";

function DayPageComponent({ date, todayTasks }) {
	console.log(todayTasks);
    return (
    	<div>
			<b>{date.day}</b>
			{" "}
			<span>{MONTHS[date.month]}</span>
			{" "}
			<span>{date.year}</span>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		...state,
		todayTasks: getTodayTasks(state)
	};
};

const mapDispatchToProps = {
	addTask: ActionCreators.addTask,
};

const DayPage = connect(mapStateToProps, mapDispatchToProps)(DayPageComponent);
export default DayPage;
