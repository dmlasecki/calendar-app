import React from "react";
import { connect } from "react-redux";
import { ActionCreators } from "../redux/actions";
import { MONTHS } from "../constants/constants";
import {getTodayTasks, getDateInfo, getNumOfDaysInMonth, getNumOfDaysInMonthPrev} from "../redux/selectors/selectors";
import { getListOfIntervals } from "../utils/tasksListLogic";
import TaskList from "../components/TaskList/TaskList";
import WeatherTile from "../components/WeatherTile/WeatherTile";

function DayPageComponent({ date, todayTasks, addTask, numOfDaysInMonth, numOfDaysInMonthPrev, setDate, updateTask, openModal, hideModal, ui }) {
	const hours = getListOfIntervals(8, 16);
	return (
		<div>
			<WeatherTile />
			<b>{date.day}</b> <span>{MONTHS[date.month]}</span> <span>{date.year}</span>
			<TaskList
				todayTasks={todayTasks}
				date={date}
				hours={hours}
				addTask={addTask}
				updateTask={updateTask}
				openModal={openModal}
				hideModal={hideModal}
				setDate={setDate}
				numOfDaysInMonth={numOfDaysInMonth}
				numOfDaysInMonthPrev={numOfDaysInMonthPrev}
				isModalOpen={ui.isModalOpen}
			/>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		...state,
		todayTasks: getTodayTasks(state),
		dateInfo: getDateInfo(state),
		numOfDaysInMonth: getNumOfDaysInMonth(state),
		numOfDaysInMonthPrev: getNumOfDaysInMonthPrev(state),
	};
};

const mapDispatchToProps = {
	addTask: ActionCreators.addTask,
	updateTask: ActionCreators.updateTask,
	setDate: ActionCreators.setDate,
	openModal: ActionCreators.openModal,
	hideModal: ActionCreators.hideModal,
};

const DayPage = connect(mapStateToProps, mapDispatchToProps)(DayPageComponent);
export default DayPage;
