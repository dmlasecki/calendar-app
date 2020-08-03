import React from "react";
import { connect } from "react-redux";
import {ActionCreators, addTask, setDate, updateTask} from "../redux/actions";
import {
	getTodayTasks,
	getDateInfo,
} from "../redux/selectors/selectors";
import { getListOfIntervals } from "../utils/tasksListLogic";
import TaskList from "../components/TaskList/TaskList";
import WeatherTile from "../components/WeatherTile/WeatherTile";
import CalendarTile from "../components/CalendarTile/CalendarTile";

function DayPageComponent({
	date,
	todayTasks,
	addTask,
	setDate,
	updateTask,
	openModal,
	hideModal,
	ui,
}) {
	const hours = getListOfIntervals(8, 16);
	return (
		<div>
			<WeatherTile />
			<CalendarTile type={"day"} setDate={setDate} date={date} />
			<TaskList
				todayTasks={todayTasks}
				date={date}
				hours={hours}
				addTask={addTask}
				updateTask={updateTask}
				openModal={openModal}
				hideModal={hideModal}
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
	};
};

const mapDispatchToProps = {
	addTask: addTask,
	updateTask: updateTask,
	setDate: setDate,
	openModal: ActionCreators.openModal,
	hideModal: ActionCreators.hideModal,
};

const DayPage = connect(mapStateToProps, mapDispatchToProps)(DayPageComponent);
export default DayPage;
