import React from "react";
import { connect } from "react-redux";
import { ActionCreators } from "../redux/actions";
import { MONTHS } from "../constants/constants";
import { getTodayTasks } from "../redux/selectors/selectors";
import { getListOfIntervals } from "../utils/tasksListLogic";
import TaskList from "../components/TaskList/TaskList";
function DayPageComponent({ date, todayTasks }) {
	const hours = getListOfIntervals(8, 16);

    return (
    	<div>
			<b>{date.day}</b>
			{" "}
			<span>{MONTHS[date.month]}</span>
			{" "}
			<span>{date.year}</span>
			<TaskList todayTasks={todayTasks} hours={hours} />
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
